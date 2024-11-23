import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function GetModule() {
    const [module, setModule] = useState({
        id: 123,
        name: "New Module",
        description: "Module description",
        course: "Web Dev"
    });
    return (
        <div id="wd-working-with-objects">
            <h3>Get Module</h3>
            <h4>Retrieve Module</h4>
            <a id="wd-retrieve-module" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />

            <h4>Get Module Name</h4>
            <a id="wd-retrieve-module-name" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Module Name
            </a><hr />

        </div>
    );
}
