import { useLoaderData, useParams } from "react-router-dom";
import { saveJobApplication } from "../../../../Utlity/localStroges";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    const {job_description, job_responsibility, job_title, experiences, educational_requirements, contact_information} = job;
    // console.log(job);

    const handleApply = () =>{
        saveJobApplication(id)
        alert("added")
    };

  return (
    <div className="m-h-screen">
      <h1>Job Details {id}</h1>
        <div className="grid gap-5 md:grid-cols-4">
            <div className="border md:col-span-3">
                <h1>Job: {job.job_title}</h1>
            </div>
            <div className="border md:col-span-1">
                <h1>Side bar</h1>
                <p>{contact_information.address}</p>
                <button
                    onClick={handleApply}
                    type="button"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2"
                  >
                    Apply Now
                  </button>
            </div>
        </div>
    </div>
  );
};

export default JobDetails;
