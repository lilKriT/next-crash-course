import courses from "./data.json";
import { v4 as uuidv4 } from "uuid";
import { NextResponse, NextRequest } from "next/server";

export const GET = async (request: NextRequest) => {
  // return NextResponse(courses); // this is just text
  return NextResponse.json(courses); // this is json
};

export const POST = async (request: NextRequest) => {
  const {
    title,
    description,
    level,
    link,
  }: { title: string; description: string; level: string; link: string } =
    await request.json();
  // console.log(title, description, level, link);

  const newCourse = {
    id: parseInt(uuidv4()),
    title,
    description,
    level,
    link,
  };

  courses.push(newCourse);

  return NextResponse.json(courses);
};
