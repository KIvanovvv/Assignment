const host = "http://localhost:5000";

export async function createTask(data) {
  const taskData = data;
  try {
    const response = await fetch(`${host}/tasks/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getTasks() {
  try {
    const response = await fetch(`${host}/tasks`);
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}
export async function getTasksById(id) {
  try {
    const response = await fetch(`${host}/tasks/${id}`);
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateStatus(id) {
  try {
    const response = await fetch(`${host}/tasks/update/${id}`);
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateTask(data) {
  const taskData = data;
  try {
    const response = await fetch(`${host}/tasks/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function deleteTask(id) {
  try {
    const response = await fetch(`${host}/tasks/delete/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getEmployeesOnTask(id) {
  try {
    const response = await fetch(`${host}/tasks/${id}/employees`);
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}