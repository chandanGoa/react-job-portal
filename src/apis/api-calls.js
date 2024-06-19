export const addJob = async (newJob) => {
  try {
    await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
  } catch (e) {
    console.warn(e);
  }
};

export const deleteJob = async (id) => {
  try {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(`Error occurred during Job delete. ${res.status}`);
    }
    return res.status;
  } catch (e) {
    console.warn(e);
    throw e;
  }
};

export const editJob = async (id, newJob) => {
  try {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    if (!res.ok) {
      throw new Error(`Error occurred during Job update. ${res.status}`);
    }
  } catch (e) {
    console.warn(e);
    throw e;
  }
};
