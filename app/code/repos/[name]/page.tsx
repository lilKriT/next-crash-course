import Link from "next/link";
import { Suspense } from "react";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

// This is a bit weird, but it works ;)
// First I destructure params to get name, then I declare the type as a literal.
const RepoPage = ({ params: { name } }: { params: { name: string } }) => {
  return (
    <div>
      <Link href="/code/repos">Go back</Link>
      {/* This error is hardcoded in TS! */}
      <Suspense fallback={<div>Loading repo...</div>}>
        {/* @ts-expect-error Server Component */}
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default RepoPage;
