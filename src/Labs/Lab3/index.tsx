import VariablesAndConstants from "./VariablesAndConstants"
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import LegacyFunctions from "./LegacyFunctions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import TemplateLiterals from "./TemplateLiterals";
import SimpleArrays from "./SimpleArrays";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunctions";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoList from "./TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import AddPathParameters from "./AddPathParameters";
import PathParameters from "./PathParameters";
import { useSelector } from "react-redux";

export default function Lab3() {
  console.log('Hello World!');
  const { todos } = useSelector((state: any) => state.todosReducer);
  return (
    <div>
      <h2>Lab 3</h2>
      <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />
      <h3>Javascript</h3>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <ConditionalOutputIfElse />
      <LegacyFunctions />
      <ArrowFunctions />
      <ImpliedReturn />
      <TemplateLiterals />
      <SimpleArrays />
      <ArrayIndexAndLength />
      <AddingAndRemovingToFromArrays />
      <ForLoops />
      <MapFunction />
      <FindFunction />
      <FindIndex />
      <FilterFunction />
      <JsonStringify />
      <House />
      <TodoList />
      <Spreading />
      <Destructing />
      <FunctionDestructing />
      <DestructingImports />
      <Classes />
      <Styles />
      <Add a={3} b={4} />
      <h4>Square of 4</h4>
      <Square>4</Square>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
      </Highlight>
      <hr />
      <AddPathParameters />
      <hr />
      <PathParameters />
    </div>
  );
}