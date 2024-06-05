import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useLocation, Route, Routes } from "react-router";
import { FaAlignJustify } from "react-icons/fa";
import "./index.css";

export default function Courses() {
  const { pathname } = useLocation();
  const paths = pathname.split("/");
  paths.shift();
  paths.shift();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1 float-start" />
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            {paths.map((i, index) => {
              if (index === paths.length - 1) {
                return (
                  <li className="breadcrumb-item active" aria-current="page">
                    {i}
                  </li>
                );
              }
              return <li className="breadcrumb-item">{i}</li>;
            })}
          </ol>
        </nav>
      </h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill main-wrapper">
          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="Grades" element={<Grades />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
