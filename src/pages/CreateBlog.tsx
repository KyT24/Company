import { useState } from "react";
import type { FormEvent, ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Backendless from "../lib/backendless";
import { getErrorMessage } from "../lib/helpers";
import { useAuth } from "../context/AuthContext";
import SectionTitle from "../components/SectionTitle";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    if (title.trim() === "" || summary.trim() === "" || content.trim() === "") {
      setError("Title, summary and content are required.");
      return;
    }

    let authorName = "Anonymous";
    if (user !== null) {
      if (user.name) {
        authorName = user.name;
      } else if (user.email) {
        authorName = user.email;
      }
    }

    setSaving(true);
    try {
      await Backendless.Data.of("Blogs").save({
        title: title.trim(),
        summary: summary.trim(),
        tags: tags.trim(),
        content: content,
        author: authorName,
      });
      navigate("/blog");
    } catch (err) {
      setError(getErrorMessage(err));
      setSaving(false);
    }
  }

  let errorMessage: ReactElement | null = null;
  if (error !== "") {
    errorMessage = (
      <p className="rounded-md border border-navy-700 bg-navy-900 p-3 text-silver-light" role="alert">
        {error}
      </p>
    );
  }

  let buttonText = "Publish Post";
  if (saving === true) {
    buttonText = "Saving...";
  }

  return (
    <div className="page-wrap max-w-3xl">
      <h1 className="sr-only">Create Blog</h1>
      <SectionTitle
        title="Create a Blog Post"
        subtitle="Share a review, a tip or some news with the community."
      />

      <form onSubmit={handleSubmit} className="card space-y-5">
        {errorMessage}

        <div>
          <label htmlFor="title" className="mb-1 block font-semibold text-white">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="input"
            value={title}
            onChange={function (event) {
              setTitle(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="summary" className="mb-1 block font-semibold text-white">
            Short summary
          </label>
          <input
            id="summary"
            type="text"
            className="input"
            value={summary}
            onChange={function (event) {
              setSummary(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="tags" className="mb-1 block font-semibold text-white">
            Tags (optional, separated by commas)
          </label>
          <input
            id="tags"
            type="text"
            className="input"
            placeholder="rpg, review, ps5"
            value={tags}
            onChange={function (event) {
              setTags(event.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="content" className="mb-1 block font-semibold text-white">
            Content (plain text or Markdown)
          </label>
          <textarea
            id="content"
            rows={10}
            className="input"
            value={content}
            onChange={function (event) {
              setContent(event.target.value);
            }}
          ></textarea>
        </div>

        <button type="submit" className="btn-primary" disabled={saving}>
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default CreateBlog;