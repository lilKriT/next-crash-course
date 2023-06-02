import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-slate-200">
      <div className="container">
        <div>
          <Link href="/">Logo</Link>
        </div>
        <nav>
          <menu>
            <ul>
              <Link href={"/about"}>About</Link>
            </ul>
            <ul>
              <Link href={"/about/team"}>Team</Link>
            </ul>
            <ul>
              <Link href={"/code/repos"}>Code</Link>
            </ul>
          </menu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
