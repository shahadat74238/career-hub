
const getStoredJobApplication = () =>{
    const storedJobApplication = window.localStorage.getItem('jobApplication');
    if(storedJobApplication){
        return JSON.parse(storedJobApplication);
    }
    else{
        return [];
    }
}

const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();
    const exists = storedJobApplication.find(jobId => jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        window.localStorage.setItem('jobApplication', JSON.stringify(storedJobApplication))
    }
}

export {saveJobApplication, getStoredJobApplication};