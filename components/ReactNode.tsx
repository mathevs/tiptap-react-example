import { mergeAttributes, Node } from "@tiptap/core";
import { NodeViewWrapper, ReactNodeViewRenderer } from "@tiptap/react";

const TestReactComponent = () => {
  return (
    <NodeViewWrapper className="react-component">
      <div contentEditable="false" data-gramm="false">
        This is not content edtable
      </div>
    </NodeViewWrapper>
  );
};

export default Node.create({
  name: "reactComponent",

  group: "block",

  atom: true,

  parseHTML() {
    return [
      {
        tag: "react-component",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["react-component", mergeAttributes(HTMLAttributes)];
  },

  addNodeView() {
    return ReactNodeViewRenderer(TestReactComponent);
  },
});
