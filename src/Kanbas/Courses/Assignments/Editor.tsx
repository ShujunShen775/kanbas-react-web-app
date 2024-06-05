export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assignment-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-assignment-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="MODULES">MODULES</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-grade-as">
              <option value="percentage">percentage</option>
              <option value="number">number</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="Online">Online</option>
              <option value="Modules">Modules</option>
            </select>
            <div>Online Entry Options</div>
            <div>
              <input type="checkbox" value=""></input>
              <label htmlFor="flexCheckDefault">Text Entry</label>
            </div>
            <div>
              <input type="checkbox" value=""></input>
              <label htmlFor="flexCheckDefault">Website URL</label>
            </div>
            <div>
              <input type="checkbox" value=""></input>
              <label htmlFor="flexCheckDefault">Media Recordings</label>
            </div>
            <div>
              <input type="checkbox" value=""></input>
              <label htmlFor="flexCheckDefault">Student Annotation</label>
            </div>
            <div>
              <input type="checkbox" value=""></input>
              <label htmlFor="flexCheckDefault">File Uploads</label>
            </div>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input id="wd-assign-to" value="" />
            <br />
            <label htmlFor="wd-due">Due</label>
            <br />
            <input id="wd-due" value="" type="date" />
            <td>
              <label htmlFor="wd-available-from">Available from</label>
              <br />
              <input id="wd-available-from" value="" type="date" />
            </td>
            <td>
              <label htmlFor="wd-until">Until</label>
              <br />
              <input id="wd-until" value="" type="date" />
            </td>
          </td>
        </tr>
      </table>
    </div>
  );
}
