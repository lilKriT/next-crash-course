import Repo from "@/app/components/Repo";

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
      {/* This error is hardcoded in TS! */}
      {/* @ts-expect-error Server Component */}
      <Repo name={name} />
    </div>
  );
};

export default RepoPage;
