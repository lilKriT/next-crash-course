import Link from "next/link";
import { FaStar, FaCodeBranch, FaEye } from "react-icons/fa";

const fetchRepos = async () => {
  const response = await fetch("https://api.github.com/users/lilKriT/repos");
  const repos = await response.json();

  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div className="container">
      <h1>My repos!</h1>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id}>
            <Link href={`/code/repos/${repo.name}`}>
              <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div>
                <FaStar /> {repo.stargazers_count}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReposPage;
