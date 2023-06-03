import Link from "next/link";

const fetchCourses = async () => {
  const response = await fetch("http://localhost:3000/api/courses");
  const courses = await response.json();

  return courses;
};

const Courses = async () => {
  const courses = await fetchCourses();

  return (
    <div>
      <h2>Courses</h2>
      {courses.map((course: any) => (
        <div>
          <h3>{course.title}</h3>
          <p>Level: {course.level}</p>
          <p>{course.description}</p>
          <Link href={course.link} target="_blank">
            Go to course
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Courses;
