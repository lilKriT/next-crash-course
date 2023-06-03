import courses from "./data.json";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // return NextResponse(courses); // this is just text
  return NextResponse.json(courses); // this is json
}
