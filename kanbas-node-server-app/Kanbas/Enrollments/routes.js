import * as dao from "./dao.js";

export default function EnrollmentRoutes(app) {

    app.get("api/user/:userId/courses", (req, res) => {
        const { courseId } = req.params;
        const enrollments = dao.findEnrollmentsForCourse(courseId);
        res.json(enrollments);
    });

    app.delete("api/user/:userId/courses/:courseId", (req, res) => {
        const { courseId, userId } = req.params;
        const status = dao.unEnrollUserFromCourse(courseId);
        res.send(status);
    })

    app.post("/api/user/:userId/courses/:courseId", (req, res) => {
        const { courseId, userId } = req.params;
        const enroll = {
            ...req.body,
            course: courseId,
            user: userId,
        };
        const newEnrollment = dao.enrollUserInCourse(userId, courseId);
        res.send(newEnrollment);
    });
}