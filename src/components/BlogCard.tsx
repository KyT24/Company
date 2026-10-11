import { useState } from "react";
import type { ReactElement } from "react";
import type { Blog } from "../types";

type Props = {
  blog: Blog;
  canDelete: boolean;
  onDelete: (id: string | undefined) => void;
};

function BlogCard({ blog, canDelete, onDelete }: Props) {
  const [expanded, setExpanded] = useState(false);

  let dateText = "";
  if (blog.created) {
    dateText = new Date(blog.created).toLocaleDateString();
  }

  let fullContent: ReactElement | null = null;
  let buttonText = "Read more";
  if (expanded === true) {
    buttonText = "Show less";
    fullContent = (
      <p className="mt-4 whitespace-pre-wrap border-t border-navy-700 pt-4 text-silver-light">
        {blog.content}
      </p>
    );
  }

  let deleteButton: ReactElement | null = null;
  if (canDelete === true) {
    deleteButton = (
      <button
        type="button"
        className="text-sm text-silver-dark hover:text-white"
        onClick={function () {
          onDelete(blog.objectId);
        }}
      >
        Delete
      </button>
    );
  }

  let tagList: ReactElement | null = null;
  if (blog.tags) {
    tagList = <p className="mt-2 text-xs text-neon-light">{blog.tags}</p>;
  }

  return (
    <article className="card flex flex-col">
      <h3 className="text-xl text-white">{blog.title}</h3>
      <p className="mt-1 text-sm text-silver-dark">
        By {blog.author} {dateText !== "" ? "on " + dateText : ""}
      </p>
      {tagList}
      <p className="mt-3 text-silver">{blog.summary}</p>
      {fullContent}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          className="btn-silver py-2 text-sm"
          onClick={function () {
            setExpanded(!expanded);
          }}
        >
          {buttonText}
        </button>
        {deleteButton}
      </div>
    </article>
  );
}

export default BlogCard;