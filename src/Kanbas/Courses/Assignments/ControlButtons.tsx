import { IoEllipsisVertical } from "react-icons/io5";

import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function ControlButtons({ assignmentID, deleteAssignment }: {
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
            <GreenCheckmark />
            <FaTrash className="text-danger"
                onClick={() => handleDelete() ? deleteAssignment(assignmentID) : null} />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}