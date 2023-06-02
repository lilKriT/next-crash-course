import Link from "next/link";
import { Key } from "react";

const fetchRepoContents = async (name: string) => {
  //   await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://api.github.com/repos/lilKriT/${name}/contents`
  );
  const contents = await response.json();

  return contents;
};

const RepoDirs = async ({ name }: { name: string }) => {
  const contents = await fetchRepoContents(name);
  const dirs = contents.filter(
    (content: { type: string }) => content.type === "dir"
  );

  return (
    <div>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir: { path: Key | null | undefined }) => (
          <li key={dir.path}>
            <Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RepoDirs;
