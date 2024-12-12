import { FaTrash } from "react-icons/fa";

export default function AssignmentDelete({ assignmentID, deleteAssignment }: {
    assignmentID: string;
    deleteAssignment: (assignmentID: string) => void;
}) {
    const handleDelete = () => {
        const result = window.confirm("Do you want to proceed?");
        if (result) {
            return true;
        } else {
            return false;
        }
    };

    return (
        <div className="float-end" style={{ marginLeft: "auto" }}>
            <FaTrash className="text-danger"
                onClick={() => deleteAssignment(assignmentID)} />
        </div>
    );
}