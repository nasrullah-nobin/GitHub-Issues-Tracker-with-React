import React, { use, useState } from "react";
import issueLogo from "../../assets/Aperture.png";
import AllIssues from "./allIssues";
import OpenIssues from "./OpenIssues";
import CloseIssues from "./CloseIssues";
import { BounceLoader } from "react-spinners";

const Issues = ({ issuesFetch }) => {
  const issues = use(issuesFetch);
  const [active, setActive] = useState("all");
  const [loading, setLoading] = useState(false);
  const filterIssues =
    active === "all"
      ? issues
      : active === "open"
        ? issues.filter((issue) => issue.status === "pending")
        : active === "close"
          ? issues.filter((issue) => issue.status === "solved")
          : null;
  const clickHandle = (type) => {
    setLoading(true);
    setTimeout(() => {
      setActive(type);
      setLoading(false);
    }, 600);
  };

  return (
    <section>
      <div className="flex justify-start gap-3 mt-14 bg-white p-6 rounded">
        <button
          onClick={() => clickHandle("all")}
          className={`btn ${active === "all" && "btn-primary"}`}
        >
          All
        </button>
        <button
          onClick={() => clickHandle("open")}
          className={`btn ${active === "open" && "btn-primary"}`}
        >
          Open
        </button>
        <button
          onClick={() => clickHandle("close")}
          className={`btn ${active === "close" && "btn-primary"}`}
        >
          Closed
        </button>
      </div>

      <div className="mt-10 bg-white p-6 rounded flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-[#ECE4FF] rounded-full p-2 w-12">
            <img src={issueLogo} alt="" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              {filterIssues.length} Issues
            </h3>
            <p className="text-base text-gray-400">
              Track and manage your project issues
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-3 items-center">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full"></span>
            <span className="font-medium text-base">Open</span>
          </div>
          <div className="flex gap-3 items-center">
            <span className="inline-block w-4 h-4 rounded-full bg-purple-700"></span>
            <span className="font-medium text-base">Closed</span>
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-screen">
          <BounceLoader color="#2246c1" />
        </div>
      ) : (
        <div className="bg-[#FBFBFB] rounded p-6 grid grid-cols-4 gap-3">
          {active === "all" ? (
            <AllIssues issues={filterIssues}></AllIssues>
          ) : active === "open" ? (
            <OpenIssues issues={filterIssues}></OpenIssues>
          ) : active === "close" ? (
            <CloseIssues issues={filterIssues}></CloseIssues>
          ) : null}
        </div>
      )}
    </section>
  );
};

export default Issues;
