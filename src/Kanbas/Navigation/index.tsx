import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  return (
    <div id="wd-kanbas-navigation" className="list-group rounded-0">
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0"
        rel="noreferrer"
      >
        <img src="/images/NEU.png" width="75px" />
      </a>
      <a
        id="wd-account-link"
        href="#/Kanbas/Account"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <FaRegCircleUser className="fs-1 text text-white" />
        <br />
        Account
      </a>
      <a
        id="wd-dashboard-link"
        href="#/Kanbas/Dashboard"
        className="list-group-item text-center border-0
                   bg-white text-danger"
      >
        <AiOutlineDashboard className="fs-1 text-danger" />
        <br />
        Dashboard
      </a>
      <a
        id="wd-course-link"
        href="#/Kanbas/Courses"
        className="list-group-item text-white
                   bg-black text-center border-0"
      >
        <LiaBookSolid className="fs-1 text-danger" />
        <br />
        Courses
      </a>
      {/* complete styling the rest of the links */}
    </div>
  );
}
