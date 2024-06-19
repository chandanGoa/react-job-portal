/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

import { JobListingCard } from "./JobListingCard";
import { Spinner } from "./Spinner";

export function JobListings({ isHome = false }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const GET_JOBS_API = `/api/jobs`;

  useEffect(() => {
    const getJobs = async function () {
      try {
        const res = await fetch(GET_JOBS_API);
        const data = await res.json();
        const jobsData = isHome ? data.slice(0,3) : data;
        setJobs(jobsData);
      } catch (error) {
        console.warn(`Oops, something went wrong! ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListingCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
