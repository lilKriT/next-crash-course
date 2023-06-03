import Link from "next/link";
import Courses from "./components/Courses";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to lilKriT's Page</h1>
      {/* @ts-expect-error Server Component */}
      <Courses />
    </div>
  );
};

export default HomePage;
