import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import ReactNode from "./ReactNode";

export default () => {
  const editor = useEditor({
    extensions: [StarterKit, ReactNode],
    content: `
    <p>
      This is still the text editor you’re used to, but enriched with node views.
    </p>
    <react-component></react-component>
    <p>
      Did you see that? That’s a React component. We are really living in the future.
    </p>
    `,
  });

  return <EditorContent editor={editor} />;
};
