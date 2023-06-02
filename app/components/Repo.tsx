import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepo = async (name: string) => {
  const response = await fetch(`https://api.github.com/repos/lilKriT/${name}`, {
    next: {
      revalidate: 60,
    },
  });
  const repo = await response.json();

  return repo;
};

const Repo = async ({ name }: { name: string }) => {
  const repo = await fetchRepo(name);

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <div>
        <FaStar />
        {repo.stargazers_count}
        <FaCodeBranch />
        {repo.forks_count}
        <FaEye />
        {repo.watchers_count}
      </div>
    </div>
  );
};

export default Repo;
