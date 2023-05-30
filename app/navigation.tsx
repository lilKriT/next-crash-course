import Link from "next/link";
const Navigation = () => {
  return (
    <nav>
      <menu>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </menu>
    </nav>
  );
};

export default Navigation;
