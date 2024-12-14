import { BsGripVertical } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
export default function ModuleControlButtons(
  { moduleId, deleteModule, editModule }:
    {
      moduleId: string;
      deleteModule: (moduleId: string) => void;
      editModule: (moduleId: string) => void
    }) {

  return (
    <div className="float-end">
      <FaPencil className="text-primary me-3" onClick={() => editModule(moduleId)} />
      <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteModule(moduleId)} />
      <BsGripVertical />
    </div>
  );
}
