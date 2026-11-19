import { Fragment, type ReactNode } from "react";

function inline(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={i} className="font-semibold text-midnight">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*") && part.length > 2) return <em key={i}>{part.slice(1, -1)}</em>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

const lines = (text: string) =>
  text.split("\n").map((line, i) => (
    <Fragment key={i}>
      {i > 0 && <br />}
      {inline(line)}
    </Fragment>
  ));

/** Renders the simple block format used by Post.body (see content/posts.ts). */
export function PostBody({ blocks }: { blocks: string[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) return <h2 key={i} className="pt-4 text-2xl font-semibold text-midnight">{block.slice(3)}</h2>;
        if (block.startsWith("- ")) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-deep">
              {block.split("\n").map((l, j) => <li key={j}>{inline(l.replace(/^- /, ""))}</li>)}
            </ul>
          );
        }
        if (/^1\. /.test(block)) {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-6 marker:font-semibold marker:text-deep">
              {block.split("\n").map((l, j) => <li key={j}>{inline(l.replace(/^\d+\. /, ""))}</li>)}
            </ol>
          );
        }
        return <p key={i}>{lines(block)}</p>;
      })}
    </>
  );
}
