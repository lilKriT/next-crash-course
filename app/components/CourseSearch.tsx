"use client";
import { FormEvent, useState } from "react";

const CourseSearch = ({
  getSearchResults,
}: {
  getSearchResults: (courses: any) => void;
}) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch(`/api/courses/search?q=${query}`);
    const courses = await res.json();
    getSearchResults(courses);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search courses"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CourseSearch;
