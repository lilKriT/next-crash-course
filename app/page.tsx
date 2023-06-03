"use client"; // we need this because search from will need useEffect and useState
import Link from "next/link";
import Courses from "./components/Courses";
import { useState, useEffect } from "react";
import LoadingPage from "./loading"; // we need to add this manually because this is a client component

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Welcome to lilKriT's Page</h1>
      <Courses courses={courses} />
    </div>
  );
};

export default HomePage;
