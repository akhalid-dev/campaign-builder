import React from "react";
import { useParams } from "react-router-dom";

function Editor() {
  const { slug, id } = useParams();
  const src = `http://localhost:3000/editor/${id}`;
  return (
    <>
      <iframe src={src} width="1673" height="880"></iframe>
    </>
  );
}

export default Editor;
