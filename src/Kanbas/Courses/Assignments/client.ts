import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER || "http://localhost:4000";
const ASSIGNMENT_API = `${REMOTE_SERVER}/api/assignments`;

export const updateAssignment= async (assignment: any) => {
  const { data } = await axios.put(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
  return data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
  return response.data;
 };

 export const fetchAssignment = async () => {
  const response = await axios.get(`${ASSIGNMENT_API}`);
  return response.data;
};

export const createAssignment = async (assignmentId: string, module: any) => {
  const response = await axios.post(
      `${ASSIGNMENT_API}/${assignmentId}/modules`,
      module
  );
  return response.data;
};