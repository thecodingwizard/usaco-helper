import React from "react";

const SnippetDetail = (props) => {
  const { snippet } = props;

  if (!snippet) return <div>Error: Snippet is undefined.</div>;

  return (
    <div>Snippet Detail. Snippet ID: {snippet.id}.</div>
  );
};

export default SnippetDetail;