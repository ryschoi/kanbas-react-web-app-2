import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import GetModule from "./GetModule";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import QueryParameters from "./QueryParameters";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div><hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <GetModule />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
    </div>
  );
}
