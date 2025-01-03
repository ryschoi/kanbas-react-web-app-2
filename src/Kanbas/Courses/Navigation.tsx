import { Link } from "react-router-dom";
import { Navigate, Route, Routes } from "react-router";
import { useLocation, useParams } from "react-router-dom";
import * as db from "../Database";
export default function CoursesNavigation() {
  const { pathname } = useLocation();
  const { cid } = useParams();
  const links = [
    { label: "Home", path: `/Kanbas/Courses/${cid}/Home` },
    { label: "Modules", path: `/Kanbas/Courses/${cid}/Modules` },
    { label: "Piazza", path: `/Kanbas/Courses/${cid}/Piazza` },
    { label: "Zoom", path: `/Kanbas/Courses/${cid}/Zoom` },
    { label: "Assignments", path: `/Kanbas/Courses/${cid}/Assignments` },
    { label: "Quizzes", path: `/Kanbas/Courses/${cid}/Quizzes` },
    { label: "Grades", path: `/Kanbas/Courses/${cid}/Grades` },
    { label: "People", path: `/Kanbas/Courses/${cid}/People` },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0" style={{ width: 120 }}>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item border-0
              ${pathname.includes(link.label) ? "text-danger bg-white active border" : "text-danger bg-white"}`}>
          <br />
          {link.label}
        </Link>
      ))}
    </div>
  );
}