import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../../Utlity/localStroges";

const Applied = () => {
    const jobs = useLoaderData();
    useEffect(()=>{
        const storedJobsId = getStoredJobApplication();
        if(jobs.length > 0){
            const jobApplied = jobs.filter()
        }
    },[])
    return (
        <div>
            <h1>Applied Page</h1>
        </div>
    );
};

export default Applied;