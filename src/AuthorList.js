import React from "react";
import AuthorCard from "./AuthorCard";

function AuthorList(props) {
  const AuthorArray = props.authors.map((author, i) => {
    return <AuthorCard key={i} author={author} />;
  });
  return (
    <div className="authors">
      <h3>Authors</h3>
      <div className="row">{AuthorArray}</div>
    </div>
  );
}

export default AuthorList;
