// Important!
// Every component is by default, a server component unless specified otherwise.
// Pro: Faster, better SEO. Con: Less Interactive, can't use state and effect.
// This is how you turn Server Component into Client Component:
"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [first, setFirst] = useState("second");

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
