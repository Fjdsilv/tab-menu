import { useState, useEffect } from "react";
import JobInfo from "./components/JobInfo";
import BtnContainer from "./components/BtnContainer";

const url = 'https://www.course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentItem, selectCurrentItem] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

if (isLoading) {
  return (
    <section className="jobs-center">
      <div className="loading"></div>
    </section>
  )
}

  return (
    <section className="jobs-center">
      {/* button container */}
      <BtnContainer 
        jobs={jobs} 
        currentItem={currentItem} 
        selectCurrentItem={selectCurrentItem} 
      />
      {/* job info */}
      <JobInfo 
        jobs={jobs} 
        currentItem={currentItem} />
    </section>
  )
}

export default App