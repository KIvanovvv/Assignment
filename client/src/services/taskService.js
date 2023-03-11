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
