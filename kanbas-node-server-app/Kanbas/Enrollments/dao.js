import * as Database from "../database/index.js";
const { enrollments } = Database.enrollments;
export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: Date.now(), user: userId, course: courseId });
}
