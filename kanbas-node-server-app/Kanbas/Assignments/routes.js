import * as assignmentsDao from "./dao.js";
export default function AssignmentsRoutes(app) {
    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    });
    app.post("/api/assignments/:assignmentId/assignments", (req, res) => {
        const { assignmentId } = req.params;
        const assignment = {
            ...req.body,
            _id: assignmentId,
        };
        const newAssignment = assignmentsDao.createAssignment(assignment);
        res.send(newAssignment);
    });

    app.get("/api/courses/:cid/assignments", (req, res) => {
        const { cid } = req.params;
        const assignments = assignmentsDao.findAssignment(cid);
        res.json(assignments);
    });
}