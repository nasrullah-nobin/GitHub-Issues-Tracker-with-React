import React from 'react';
import openStatus from "../../assets/Open-Status.png";
import closeStatus from "../../assets/Closed- Status .png";
import { FaBug, FaHandsHelping, FaLifeRing } from "react-icons/fa";


const OpenIssues = ({issues}) => {
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
               <div key={issue.id}
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
       
                 <hr/>
                 <div>
                   <h6>{issue.author}</h6>
                   <p>{issue.date}</p>
                 </div>
               </div>
             ))}
           </>
    );
};

export default OpenIssues;