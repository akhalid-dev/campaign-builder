import React from "react";
import { useParams } from "react-router-dom";

function Editor() {
  const { slug, id } = useParams();
  const src = `https://remembrance-eds-83642.herokuapp.com/editor/${id}`;
  return (
    <>
      <iframe src={src} width="1673" height="880"></iframe>
    </>
  );
}

export default Editor;
