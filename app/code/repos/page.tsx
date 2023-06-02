const fetchRepos = async () => {
  const response = await fetch("https://api.github.com/users/lilKriT/repos");
  const repos = await response.json();

  return repos;
};

const ReposPage = async () => {
  const repos = await fetchRepos();

  return (
    <div>
      <h1>My repos!</h1>
      {repos[0].name}
    </div>
  );
};

export default ReposPage;
