import { Routes, Route, Navigate, useParams, useLocation } from "react-router";
import { useSelector } from "react-redux";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import Editor from "./Assignments/Editor"
import PeopleTable from "./People/Table";
import CoursesNavigation from "./Navigation";
import { FaAlignJustify } from "react-icons/fa6";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" />
        {course && course.name} &gt; {pathname.split("/")[4]}</h2>
      <div className="d-flex">
        <div>
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules currentUser={currentUser}/>} />
            <Route path="Assignments" element={<Assignments currentUser={currentUser} />} />
            <Route path="Assignments/:aid" element={<Editor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}