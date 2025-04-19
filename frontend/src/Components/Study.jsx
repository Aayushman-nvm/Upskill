import AdjustIcon from "@mui/icons-material/Adjust";
import { Link } from "react-router-dom";

export default function Study() {
  const courses = [
    {
      title: "Web Development",
      description:
        "Web development (WebDev) is the process of building and maintaining websites and web applications, encompassing both frontend (UI/UX with HTML, CSS, JavaScript) and backend (server-side logic with Node.js, Python, PHP, and databases like MongoDB, MySQL). Full-stack development combines both. Essential tools include Git, APIs, hosting platforms (Netlify, AWS), and frameworks (React, Vue, Angular). Modern trends like PWAs, serverless computing, and Web3 shape the future of web development. We will focus more on JS-based web dev.",
      link: "/study/web-dev",
    },
  ];

  return (
    <div className="w-screen min-h-screen bg-gradient-to-br from-red-600 via-red-500 to-red-700 animate-gradient-move flex flex-col items-center p-8 gap-16 overflow-hidden">
      {courses.map((course, index) => (
        <div
          className="flex flex-col items-center bg-[#eeeeee] rounded-xl p-8 shadow-md max-w-lg w-full space-y-6"
          key={index}
        >
          <div className="flex items-center gap-3">
            <AdjustIcon className="text-red-500" />
            <Link
              to={course.link}
              className="hover:underline font-semibold text-xl"
            >
              {course.title}
            </Link>
          </div>

          <div className="border-l-4 border-red-500 pl-4 text-left space-y-2">
            <span className="font-medium text-lg text-gray-700">
              Description:
            </span>
            <p className="text-gray-800 leading-relaxed">{course.description}</p>
          </div>

          <Link
            to={course.link}
            className="bg-red-500 text-[#eeeeee] py-3 px-6 rounded-xl font-bold text-lg hover:bg-red-600 text-center w-full max-w-xs"
          >
            Get Started
          </Link>
        </div>
      ))}
    </div>
  );
}
