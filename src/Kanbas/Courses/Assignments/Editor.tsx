import { Navigate, Route, Routes, useParams } from "react-router";
import * as db from "../../Database";
import { useState } from "react";
import { addAssignment, updateAssignment } from './reducer'
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as assignmentsClient from "./client";
import * as coursesClient from "./client";
import { current } from "@reduxjs/toolkit";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = useSelector((state: any) => state.assignmentReducer.assignments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newAssignment = assignments.find((newAssignment: any) => newAssignment._id == aid) || {
    name: "",
    description: "",
    points: 0,
    due: "",
    avaiilable: "",
    course: cid,
    _id: new Date().getTime().toString(),
  }

  const [currentAssignment, setCurrentAssignment] = useState(newAssignment);
  const editing = assignments.findIndex((a: any) => a._id === aid) !== -1;

  const saveCurAssignment = async () => {
    if (editing) {
      await assignmentsClient.updateAssignment(currentAssignment);
    }
    else {
      await coursesClient.createAssignment(cid || "", currentAssignment);
    }
    navigate(`/Kanbas/Courses/${currentAssignment.course}/Assignments`);
  }

  return (
    <div id="wd-assignments-editor">
      <h2><label id="a-title" htmlFor="wd-name">Assignment Name</label></h2>

      <div>
        <input className="padding" id="wd-name" value={currentAssignment.name}
          onChange={(e) => setCurrentAssignment({ ...currentAssignment, name: e.target.value })} /><br /><br />
        <textarea id="wd-description" value={currentAssignment.description}
          onChange={(e) => setCurrentAssignment({ ...currentAssignment, description: e.target.value })}>
          The assignment is available online.
          Submit a link to the landing page of your Web application running on Netlify.

          The landing page should include the following:

          •  Your full name and section
          •  Links to each of the lab assignments
          •  Link to the Kanbas application
          •  Links to all relevant source code repositories

          The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
        <br /> <br />

        <table id="editor-table">
          {/* Points */}
          <tr>
            <td className="padding-right" align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input className="padding" id="wd-points" value={currentAssignment.points}
                onChange={(e) => setCurrentAssignment({ ...currentAssignment, points: Number(e.target.value) })}
              />
            </td>
          </tr><br />

          {/* Assignment group */}
          <tr>
            <td className="padding-right" align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select name="wd-group" className="padding" id="wd-group" defaultValue={currentAssignment.group}
                onChange={(e) => setCurrentAssignment({ ...currentAssignment, group: e.target.value })}>
                <option value="assignments">ASSIGNMENTS</option>
                <option value="quizzes">QUIZZES</option>
                <option value="exams">EXAMS</option>
                <option value="projects">PROJECTS</option>
              </select>
            </td>
          </tr><br />

          {/* Display grade as */}
          <tr>
            <td className="padding-right" align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display grade as</label>
            </td>
            <td>
              <select name="wd-display-grade-as" className="padding" id="wd-display-grade-as" defaultValue={currentAssignment.display}
                onChange={(e) => setCurrentAssignment({ ...currentAssignment, display: e.target.value })}>
                <option value="percentage">Percentage</option>
                <option value="letter">Letter</option>
              </select>
            </td>
          </tr><br />

          {/* Submission type */}
          <tr>
            <td className="padding-right" align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select name="wd-submission-type" className="padding" id="submission-type" defaultValue={currentAssignment.submission}
                onChange={(e) => setCurrentAssignment({ ...currentAssignment, submission: e.target.value })}>
                <option value="online">Online</option>
                <option value="paper">Paper</option>
              </select>
              <br /><br />
            </td>
          </tr>

          {/* Online entry options */}
          <tr>
            <td className="padding-right" align="right" valign="top"></td>
            <td>
              Online entry options
              <div>
                <input type="checkbox" id="wd-text-entry" name="wd-text-entry" value="text entry" />
                <label className="padding" htmlFor="wd-text-entry"> Text Entry</label><br />
              </div>
              <div>
                <input type="checkbox" id="wd-website-url" name="wd-website-url" value="website url" />
                <label className="padding" htmlFor="wd-website-url"> Website URL</label> <br />
              </div>
              <div>
                <input type="checkbox" id="wd-media-recordings" name="wd-media-recordings" value="media recordings" />
                <label className="padding" htmlFor="wd-media-recordings"> Media Recordings</label><br />
              </div>
              <div>
                <input type="checkbox" id="wd-student-annotation" name="wd-student-annotation" value="student annotation" />
                <label className="padding" htmlFor="wd-student-annotation"> Student Annotation</label><br />
              </div>
              <div>
                <input type="checkbox" id="wd-file-upload" name="wd-file-upload" value="file upload" />
                <label className="padding" htmlFor="wd-file-upload"> File Upload</label><br />
              </div>
            </td>
          </tr><br />

          {/* Assign*/}
          <tr>
            <td className="padding-right" align="right" valign="top">
              <label htmlFor="wd-assign-to">Assign</label>
            </td>
            <td className="table-border">
              Assign to<br />
              <input className="padding" type="text" id="wd-assign-to" value={"Everyone"} />
              <br /><br />
              Due<br />
              <input className="padding" type="date" id="wd-due-date" value={currentAssignment.due}
                onChange={(e) => setCurrentAssignment({ ...currentAssignment, due: e.target.value })} />
              <br /><br />
              <table>
                <tr>
                  <td align="left">
                    Available from<br />
                    <input className="padding" type="date" id="wd-available-from" value={currentAssignment.available}
                      onChange={(e) => setCurrentAssignment({ ...currentAssignment, available: e.target.value })} />
                  </td>
                  <td>
                    Until<br />
                    <input className="padding" type="date" id="wd-available-until" value={currentAssignment.until}
                      onChange={(e) => setCurrentAssignment({ ...currentAssignment, until: e.target.value })} />
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <hr />
        <div id="bottom-buttons-group">
          {/* <Link to={`/Kanbas/Courses/${cid}/Assignments`}><button className="bottom-buttons" id="cancel-bt">Cancel</button></Link> */}
          <button className="bottom-buttons" id="save-bt" onClick={saveCurAssignment}>Save</button>
          <Link to={`/Kanbas/Courses/${currentAssignment.course}/Assignments`}><button className="bottom-buttons" id="cancel-bt">Cancel</button>
          </Link>
        </div>
      </div>
    </div >
  );
}
