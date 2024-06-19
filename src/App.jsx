import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import { JobsUserLayout } from "./layout/JobsUserLayout";
import { HomePage } from "./pages/HomePage";
import { JobsPage } from "./pages/JobsPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { JobDetails, jobDetailsLoader } from "./pages/JobDetails";
import { AddJobPage } from "./pages/AddJobPage";
import { addJob, deleteJob, editJob } from "./apis/api-calls";
import { EditJobPage } from "./pages/EditJobPage";

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<JobsUserLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobDetails requestDeleteJob={deleteJob} />}
          loader={jobDetailsLoader}
        />
        <Route
          path="/jobs/edit/:id"
          element={<EditJobPage requestEditJob={editJob} />}
          loader={jobDetailsLoader}
        />
        <Route
          path="/add-job"
          element={<AddJobPage requestAddJob={addJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
