import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold">Featured Jobs</h1>
        
      </div>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mt-14">
        {jobs.slice(0, dataLength).map((job) => (
          <div key={job.id}>
            <div className="card card-compact bg-base-100 shadow-xl border border-white rounded-none p-5">
              <figure>
                <img className="h-10" src={job.logo} alt="Logo" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{job.job_title}</h2>
                <p>{job.company_name}</p>
                <div className="flex gap-5">
                  <button className="px-5 py-2 border-white rounded-md font-medium text-sky-400 border">
                    {job.remote_or_onsite}
                  </button>
                  <button className="px-5 py-2 border-white rounded-md font-medium text-sky-400 border">
                    {job.job_type}
                  </button>
                </div>
                <div className="flex justify-between">
                  <p className="text-2xl">
                    <IoLocationOutline className="inline mr-2" />
                    {job.location}
                  </p>
                  <p className="text-2xl">
                    <BiDollar className="inline mr-2" />
                    {job.salary}
                  </p>
                </div>
                <div className="card-actions justify-left">
                  <NavLink to={`/jobs_details/${job.id}`}>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      View Details
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`flex justify-center my-10 ${
          dataLength === jobs.length && "hidden"
        }`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          type="button"
          className={`text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2`}
        >
          View All
        </button>
      </div>
    </div>
  );
};

export default Jobs;
