import React from "react";
import Logo from "../../assets/github-logo.png";

const Nav = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="flex justify-between py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-9">
            <img src={Logo} alt="" />
          </div>
          <span className="text-2xl font-semibold">GitHub Issues Tracker</span>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
          <button className="btn btn-primary">+ New Issues</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
