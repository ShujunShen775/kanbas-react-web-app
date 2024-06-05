import "./index.css";
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">
          Assignment Name
        </label>
        <input
          id="wd-name"
          className="form-control mb-3"
          value="A1 - ENV + HTML"
        />
        <textarea
          id="wd-description"
          className="form-control col-12"
          rows={5}
          style={{ resize: "none" }}
          value={`The assignment is avallable online Submit a link to the landing page of your Wveb application running onNetlify. The landing page should include the followwing: e Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositorles The Kanbas application should include a link to navigate back to the landing page.`}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-points" className="form-label col-3 text-end">
          Points
        </label>
        <div className="col-9">
          <input id="wd-points" className="form-control" value="100" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-group" className="form-label col-3 text-end">
          Assignment Group
        </label>
        <div className="col-9">
          <select className="form-select" aria-label="Assignment Group">
            <option value="assignments" selected>
              ASSIGNMENTS
            </option>
            <option value="modules">MODULES</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-grade" className="form-label col-3 text-end">
          Display Grade as
        </label>
        <div className="col-9">
          <select className="form-select" aria-label="Display Grade as">
            <option value="percentage" selected>
              percentage
            </option>
            <option value="number">number</option>
          </select>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-type" className="form-label col-3 text-end">
          Submission Type
        </label>
        <div className="col-9">
          <div className="border rounded p-3">
            <select className="form-select mb-3" aria-label="Submission Type">
              <option value="Online" selected>
                Online
              </option>
              <option value="modules">MODULES</option>
            </select>
            <label htmlFor="wd-options" className="form-label mb-2">
              Online Entry Options
            </label>
            <div className="mb-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Text Entry
              </label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Website URL
              </label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Media Recordings
              </label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Student Annotation
              </label>
            </div>
            <div className="mb-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
              ></input>
              <label className="form-check-label" htmlFor="flexCheckDefault">
                File Uploads
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="wd-assign" className="form-label col-3 text-end">
          Assign
        </label>
        <div className="col-9">
          <div className="border rounded p-3">
            <label htmlFor="wd-options" className="form-label mb-3">
              Assign to
            </label>
            <input className="form-control mb-3" value="" />
            <label htmlFor="wd-options" className="form-label mb-3">
              Due
            </label>
            <input className="form-control mb-3" type="date" value="" />
            <div className="row">
              <div className="col-6">
                <label htmlFor="wd-options" className="form-label">
                  Available from
                </label>
                <input className="form-control" type="date" value="" />
              </div>
              <div className="col-6">
                <label htmlFor="wd-options" className="form-label">
                  Until
                </label>
                <input className="form-control" type="date" value="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="clearfix mb-3">
        <div className="float-end">
          <button className="btn btn-secondary me-2">Cancel</button>
          <button className="btn btn-danger">Save</button>
        </div>
      </div>
    </div>
  );
}
