import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams, useLocation } from "react-router-dom";
import LessonControlButtons from "../Modules/LessonControlButtons";
import * as coursesClient from "./client";
import * as modulesClient from "./client";
import * as assignmentsClient from "./client";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addAssignment, deleteAssignment, updateAssignment }
  from "./reducer";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  const links = [
    { path: `/Kanbas/Courses/${cid}/Assignments/${cid}` },];
  const [assignmentName, setAssignmentName] = useState("");
  const dispatch = useDispatch();

  const saveAssignment = async (assignment: any) => {
    await assignmentsClient.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const removeAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignment(assignmentId));
  };

  const createAssignment = async () => {
    if (!cid) return;
    const newAssignment = { name: assignmentName, course: cid };
    const module = await assignmentsClient.createAssignment(cid, newAssignment);
    dispatch(addAssignment(module));
  };

  // const fetchAssignments = async () => {
  //   const assignments = await coursesClient.fetchAssignment(assignmentId as string);
  //   dispatch(setAssignment(assignments));
  // };

  // useEffect(() => {
  //   fetchModules();
  // }, []);

  return (
    <div id="wd-assignments">
      <CiSearch className="search-icon" style={{ height: '40px' }} />
      <input id="wd-search-assignment" placeholder="Search" style={{ borderRadius: '10px' }} />

      <Link to="./Editor">
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" /> Assignments </button>
      </Link>

      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Group </button><br /><br />


      <div className="wd-title p-3 ps-2 bg-secondary" id="assignments-heading">
        <div>
            <BsGripVertical className="me-2 fs-3" />
            <span className="bolder">ASSIGNMENTS</span>
        </div>
        <div>
          <span id="a_40">40% of Total</span>
          <Link to="./Editor"><FaPlus id="plus" className="wd-side-icon" /></Link>
        </div>
      </div>



      <ul id="wd-modules" className="list-group rounded-0">
        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
          {assignments
            .filter((assignment: any) => assignment.course === cid)
            .map((assignment: any) => (
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <PiNotebookThin className="me-2 fs-3" />
                <Link to={`/Kanbas/Courses/${cid}/Assignments/${assignment.id}`}
                  className="wd-assignment-link"> {assignment.title} </Link>
                <br /> <LessonControlButtons />
                <p>
                  <span className="text-danger"> Multiple Modules</span> | <b>Not available until</b> {assignment.available} |<br />
                  <b>Due</b> {assignment.due} | {assignment.points}pts <IoIosCheckmarkCircle className="wd-checkmark" />
                </p>
              </li>
            ))}
        </li>
      </ul>
    </div >
  );
}