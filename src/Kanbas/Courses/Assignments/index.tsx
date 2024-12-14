import { PiNotebookThin } from "react-icons/pi";
import { BsGripVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { FaPlus, FaTrash } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Link, useParams, useLocation } from "react-router-dom";
import * as assignmentsClient from "./client";
import * as coursesClient from "../client";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { addAssignment, deleteAssignment, updateAssignment, setAssignment }
  from "./reducer";
import AssignmentDelete from "./AssignmentDelete";
import LessonControlButtons from "../Modules/LessonControlButtons";

export default function Assignments({ currentUser, }: { currentUser: any; }) {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const dispatch = useDispatch();

  const links = [
    { path: `/Kanbas/Courses/${cid}/Assignments/${cid}` },];
  const [assignmentName, setAssignmentName] = useState("");


  return (
    <div id="wd-assignments">
      {/* TOP BUTTONS/ACTIONS */}
      <CiSearch className="search-icon" style={{ height: '50px', marginRight: '5px' }} />
      <input id="wd-search-assignment" placeholder="Search" style={{ borderRadius: '10px', padding: '2px', paddingLeft: '7px' }} />

      <Link to="./Editor">
        <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
          <FaPlus className="position-relative me-2" style={{ fontWeight: 'bolder' }} /> Assignments </button>
      </Link>

      <button id="wd-add-module-btn" className="btn btn-lg btn-secondary me-1 float-end">
        <FaPlus className="position-relative me-2" />
        Group </button>

      <br /> <br />

      {/* ASSIGNMENT BAR */}
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

      {/* ASSIGNMENTS FOR CURRENT COURSE */}
      <ul id="wd-assignment-list" className="list-group rounded-0">
        {assignments
          .filter((assign: any) => assign.course === cid)
          .map((assignment: any) => (
            <li className="wd-assignment-list-item d-flex align-items-center list-group-item p-3 ps-1">
              <BsGripVertical className="me-2 fs-3" />

              <div className="wd-assignment-info ps-3">
                <PiNotebookThin className="me-2 fs-3" />
                <a className="wd-assignment-link text-decoration-none"
                  href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
                  {assignment.name}
                </a>
                <br />
                Multiple Modules | Not available until: {`${assignment.available}`} <br />
                Due {`${assignment.due}`} | Available until {`${assignment.until}`} | {` ${assignment.points} points`}
              </div>

              {currentUser.role === "FACULTY" && (
                <AssignmentDelete
                  assignmentID={assignment._id}
                  deleteAssignment={(assignmentID) => {
                    dispatch(deleteAssignment(assignmentID));
                  }} />
              )}
            </li>
          ))
        }
      </ul>
    </div >
  );
}