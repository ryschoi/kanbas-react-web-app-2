import Database from "../Database/index.js";
export function deleteAssignment(assignmentId) {
  const { assignments } = Database;
  Database.assignments = assignments.filter((assignment) => assignment._id !== assignmentId);
}

export function createAssignment(assignment) {
  const newassignment = { ...assignment, _id: Date.now().toString() };
  Database.assignments = [...Database.assignments, newassignment];
  return newassignment;
}

export function findAssignments(assignmentId) {
  const { assignments } = Database;
  return assignments.filter((assignment) => assignment._id === assignmentId);
}

export function updateAssignment(assignmentId, assignmentUpdates) {
  const { assignments } = Database;
  const assignment = assignments.find((assignment) => assignment._id === assignmentId);
  Object.assign(assignment, assignmentUpdates);
  return assignment;
}
