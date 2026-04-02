import React from "react";
import openStatus from "../../assets/Open-Status.png";
import closeStatus from "../../assets/Closed- Status .png";
import { FaBug, FaHandsHelping, FaLifeRing } from "react-icons/fa";
const CloseIssues = ({ issues }) => {
  const issueTypes = {
    bug: {
      icon: <FaBug />,
      color: "text-red-500",
    },
    enhancement: {
      icon: <FaLifeRing />,
      color: "text-blue-500",
    },
    "help wanted": {
      icon: <FaHandsHelping />,
      color: "text-green-500",
    },
  };

  return (
    <>
      {issues.map((issue) => (
        <div
          onClick={() => document.getElementById("my-modal").showModal()}
          key={issue.id}
          className={`bg-white rounded p-4 border-t-5 ${issue.status === "pending" ? "border-green-600" : "border-purple-950"} shadow space-y-5`}
        >
          <div className="flex justify-between items-center">
            <img
              src={issue.status === "pending" ? openStatus : closeStatus}
              alt=""
            />
            <div
              className={`badge badge-soft ${issue.priority === "high" ? "badge-error" : issue.priority === "medium" ? "badge-warning" : issue.priority === "low" ? "badge-primary" : "badge"}`}
            >
              {issue.priority}
            </div>
          </div>
          <h3 className="text-sm font-semibold">{issue.title}</h3>
          <p className="text-gray-400">{issue.description}</p>
          <div
            className={`flex items-center gap-2 badge ${issueTypes[issue.type].color}`}
          >
            {issueTypes[issue.type].icon}
            <span>{issue.type}</span>
          </div>

          <hr />
          <div>
            <h6>{issue.author}</h6>
            <p>{issue.date}</p>
          </div>

          <dialog id="my-modal" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">{issue.title}</h3>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-soft">
                  {issue.status}
                </div>
                <p>{issue.author}</p>
                <small>{issue.date}</small>
              </div>
              <div className="badge">
               {issueTypes[issue.type].icon} {issue.type}
              </div>
              <p>{issue.description}</p>
              <div className="modal-action">
                <form method="dialog">
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      ))}
    </>
  );
};

export default CloseIssues;
