import { Link } from "react-router-dom";
import { Navigate, Route, Routes, useParams } from "react-router";
import { useLocation } from "react-router-dom";
import * as db from "../../Database";
import { useState } from "react";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;

  return (
    <div id="wd-assignments-editor">
      <h2><label id="a-title" htmlFor="wd-name">Assignment Name</label></h2>

      {assignments
        // .filter((assignment: any) => assignment.course === cid && assignment._id == aid)
        .map((assignment) => (
          <div>
            <input className="padding" id="wd-name" defaultValue={assignment.name} /><br /><br />
            <textarea id="wd-description">
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
                  <input className="padding" id="wd-points" value={assignment.points} />
                </td>
              </tr><br />

              {/* Assignment group */}
              <tr>
                <td className="padding-right" align="right" valign="top">
                  <label htmlFor="wd-group">Assignment Group</label>
                </td>
                <td>
                  <select name="wd-group" className="padding" id="wd-group" defaultValue={assignment.group}>
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
                  <select name="wd-display-grade-as" className="padding" id="wd-display-grade-as" defaultValue={assignment.display}>
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
                  <select name="wd-submission-type" className="padding" id="submission-type" defaultValue={assignment.submission}>
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
                  <input className="padding" type="date" id="wd-due-date" value={assignment.due} />
                  <br /><br />
                  <table>
                    <tr>
                      <td align="left">
                        Available from<br />
                        <input className="padding" type="date" id="wd-available-from" value={assignment.available} />
                      </td>
                      <td>
                        Until<br />
                        <input className="padding" type="date" id="wd-available-until" value={assignment.until} />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <hr />
            <div id="bottom-buttons-group">
              <Link to="../Assignments"><button className="bottom-buttons" id="cancel-bt">Cancel</button></Link>
              <button className="bottom-buttons" id="save-bt">Save</button>
            </div>
          </div>
        ))
      }



    </div >
  );
}
