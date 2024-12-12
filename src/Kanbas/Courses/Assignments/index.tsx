import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams, useLocation } from "react-router-dom";
import * as assignmentsClient from "./client";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { addAssignment, deleteAssignment, updateAssignment }
  from "./reducer";
import ControlButtons from "./ControlButtons";

export default function Assignments() {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const links = [
    { path: `/Kanbas/Courses/${cid}/Assignments/${cid}` },];
  const [assignmentName, setAssignmentName] = useState("");

  // const deleteAssignment = async (assignmentId: string) => {
  //   await assignmentsClient.deleteAssignment(assignmentId);
  //   dispatch(deleteAssignment(assignmentId));
  // };

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

      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />

              <div className="wd-assignment-info ps-3">
                <a className="wd-assignment-link text-decoration-none"
                  href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                  {assignment.name}
                </a>
                <br />
                <span style={{ color: "crimson" }}> Multiple Modules </span>
                | <b> Not available until: </b>
                {`${assignment.release}`} <br />
                <b>Due</b> {`${assignment.due}`} |
                {` ${assignment.points} points`}
              </div>

              {currentUser.role === "FACULTY" && (
                <ControlButtons
                  assignmentID={assignment._id}
                  deleteAssignment={(assignmentID) => {
                    dispatch(deleteAssignment(assignmentID));
                  }} />
              )}
            </li>
          ))
        }
      </ul>


      {/* <ul id="wd-modules" className="list-group rounded-0">
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
      </ul> */}
    </div >
  );
}