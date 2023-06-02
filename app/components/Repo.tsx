const fetchRepo = async (name: string) => {
  const response = await fetch(`https://api.github.com/repos/lilKriT/${name}`);
  const repo = await response.json();

  return repo;
};

const Repo = async ({ name }: { name: string }) => {
  const repo = await fetchRepo(name);
  //   console.log(repo);

  return <div>Repo</div>;
};

export default Repo;
