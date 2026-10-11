import { useEffect, useState } from "react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import Backendless from "../lib/backendless";
import { getErrorMessage } from "../lib/helpers";
import { useAuth } from "../context/AuthContext";
import SectionTitle from "../components/SectionTitle";
import BlogCard from "../components/BlogCard";
import Loading from "../components/Loading";
import type { Blog } from "../types";

function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const { user } = useAuth();

  useEffect(function () {
    async function loadBlogs() {
      try {
        const query = Backendless.DataQueryBuilder.create();
        query.setSortBy(["created DESC"]);
        query.setPageSize(50);
        const result = await Backendless.Data.of("Blogs").find(query);
        setBlogs(result as Blog[]);
      } catch (err) {
        setError(getErrorMessage(err));
      }
      setLoading(false);
    }
    loadBlogs();
  }, []);

  async function handleDelete(id: string | undefined) {
    if (id === undefined) {
      return;
    }
    try {
      await Backendless.Data.of("Blogs").remove(id);
      const remaining: Blog[] = [];
      for (let i = 0; i < blogs.length; i++) {
        if (blogs[i].objectId !== id) {
          remaining.push(blogs[i]);
        }
      }
      setBlogs(remaining);
    } catch (err) {
      setError(getErrorMessage(err));
    }
  }

  if (loading === true) {
    return <Loading />;
  }

  const keyword = search.toLowerCase();
  const cards: ReactElement[] = [];
  for (let i = 0; i < blogs.length; i++) {
    const blog = blogs[i];
    const text = (blog.title + " " + blog.tags).toLowerCase();

    if (text.includes(keyword)) {
      let canDelete = false;
      if (user !== null && user.objectId === blog.ownerId) {
        canDelete = true;
      }
      cards.push(
        <BlogCard
          key={blog.objectId}
          blog={blog}
          canDelete={canDelete}
          onDelete={handleDelete}
        />
      );
    }
  }

  let errorMessage: ReactElement | null = null;
  if (error !== "") {
    errorMessage = (
      <p className="mb-6 rounded-md border border-navy-700 bg-navy-800 p-4 text-silver">
        {error}
      </p>
    );
  }

  let emptyMessage: ReactElement | null = null;
  if (cards.length === 0 && error === "") {
    emptyMessage = (
      <p className="text-center text-silver">
        No blog posts found. Log in and create the first one!
      </p>
    );
  }

  return (
    <div className="page-wrap">
      <h1 className="sr-only">Blog</h1>
      <SectionTitle
        title="Game Blog"
        subtitle="News, tips and stories from the PixelVault team."
      />

      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <label htmlFor="search" className="sr-only">
          Search blog posts
        </label>
        <input
          id="search"
          type="text"
          className="input"
          placeholder="Search by title or tag..."
          value={search}
          onChange={function (event) {
            setSearch(event.target.value);
          }}
        />
        <Link to="/create-blog" className="btn-primary whitespace-nowrap text-center">
          Create Blog
        </Link>
      </div>

      {errorMessage}
      {emptyMessage}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{cards}</div>
    </div>
  );
}

export default BlogList;