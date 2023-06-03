import { NextResponse, NextRequest } from "next/server";
import courses from "../data.json";

export const GET = (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  //   console.log(searchParams.get("q"));

  const query = searchParams.get("q");
  let filteredCourses;
  if (query) {
    filteredCourses = courses.filter((course) => {
      return course.title.toLowerCase().includes(query.toLowerCase());
    });
  } else {
    filteredCourses = courses;
  }
  return NextResponse.json(filteredCourses);
};
