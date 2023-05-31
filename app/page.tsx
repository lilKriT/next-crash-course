import Head from "next/head";

interface IHome {
  articles: any;
}

export default function Home({ articles }: IHome) {
  return (
    <div>
      <Head>
        <title>Next Crash</title>
        <meta name="keywords" content="web development, programming, next js" />
      </Head>
      <h1>Next JS!</h1>
      {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=6`
  );
  console.log("abc");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
