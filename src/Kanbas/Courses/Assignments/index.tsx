import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import LessonControlButtons from "./LessonControlButtons";
import "./index.css";
export default function Assignments() {
  return (
    <div id="wd-assignments">
      <ModulesControls />
      <ul id="wd-assignment-list" className="list-group rounded-0 mt-3">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-assignments-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" />
            ASSIGNMENTS
            <span>40% of Total</span>
            <FaPlus />
            <LessonControlButtons />
          </div>
          <ul className="wd-assignments list-group rounded-0">
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <a href="#/Kanbas/Courses/1234/Assignments/123">
                <BsGripVertical className="me-2 fs-3" />
                <div style={{ display: "inline-flex" }}>
                  A1 - ENV + HTML
                  <br />
                  Multiple Modules | Not available util May 6 at 12:00am |{" "}
                  <br />
                  Due May 13 at 13:59pm | 100pts
                </div>
                <LessonControlButtons />
              </a>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <a href="#/Kanbas/Courses/1234/Assignments/12345">
                <BsGripVertical className="me-2 fs-3" />
                <div style={{ display: "inline-flex" }}>
                  A2 - CSS + BOOTSTRAP
                  <br />
                  Multiple Modules | Not available util May 6 at 12:00am |{" "}
                  <br />
                  Due May 13 at 13:59pm | 100pts
                </div>
                <LessonControlButtons />
              </a>
            </li>
            <li className="wd-assignment-list-item list-group-item p-3 ps-1">
              <a href="#/Kanbas/Courses/1234/Assignments/123456">
                <BsGripVertical className="me-2 fs-3" />
                <div style={{ display: "inline-flex" }}>
                  A3 - JAVASCRIPT + REACT
                  <br />
                  Multiple Modules | Not available util May 6 at 12:00am |{" "}
                  <br />
                  Due May 13 at 13:59pm | 100pts
                </div>
                <LessonControlButtons />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
