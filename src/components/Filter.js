import React from "react";

const Filter = () => {
  return (
    <details className="dropdown mb-32">
      <summary className="m-1 btn">Filter</summary>
      <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <a>completed Task</a>
        </li>
        <li>
          <a>All Task</a>
        </li>
      </ul>
    </details>
  );
};

export default Filter;
