import { FaFileImport } from "react-icons/fa6";
import { LiaFileImportSolid } from "react-icons/lia";

export default function Grades() {
  return (
    <div>
      <div className="mb-3 clearfix">
        <button
          className="btn btn-lg btn-secondary float-end dropdown-toggle"
          id="wd-export-grade-btn"
          data-bs-toggle="dropdown"
        >
          <LiaFileImportSolid className="me-2 fs-5" />
          Export
        </button>
        <button className="btn btn-lg btn-secondary me-1 float-end">
          <FaFileImport className="me-2 fs-5" />
          Import
        </button>
        <div className="dropdown">
          <ul className="dropdown-menu" aria-labelledby="wd-export-grade-btn">
            <li>1</li>
            <li>2</li>
          </ul>
        </div>
      </div>
      <table className="table table-striped">
        <tbody>
          <tr>
            <td>Student Name</td>
            <td>
              A1 SETUP <br />
              Out of 100
            </td>
            <td>
              A2 HTML <br />
              Out of 100
            </td>
            <td>
              A3 CSS <br />
              Out of 100
            </td>
            <td>
              A4 BOOTSTRAP <br />
              Out of 100
            </td>
          </tr>
          <tr>
            <td>100%</td>
            <td>100%</td>
            <td style={{ width: 200 }}>
              <input className="form-control me-1" value="88%" />
            </td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
