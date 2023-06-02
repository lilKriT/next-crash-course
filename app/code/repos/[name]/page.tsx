import React from "react";

// interface IRepoPage {
//   params: {
//     name: string;
//   };
// }

// This is a bit weird, but it works ;)
// First I destructure params to get name, then I declare the type as a literal.
const RepoPage = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Repo details</p>
    </div>
  );
};

export default RepoPage;
