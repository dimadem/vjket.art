import Link from "next/link";
import { usePreview } from "../lib/sanity.preview";
import Project from "./Project.component";

export default function PreviewProject({ slug }) {
  const { data } = usePreview(null, slug);

  return (
    <>
      <Project {...data} />
      <Link
        className="bg-blue-500 p-6 text-white font-bold fixed bottom-0 right-0"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
}
