const host = "http://localhost:5000";

export async function createEmployee(data) {
  const employeeData = data;
  try {
    const response = await fetch(`${host}/employees/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
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

export async function getEmployees() {
  try {
    const response = await fetch(`${host}/employees`);
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function getEmployeeById(id) {
  try {
    const response = await fetch(`${host}/employees/${id}`);
    if (!response.ok) {
      throw new Error(`Something went wrong with request`);
    }
    const data = response.json();
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateEmployee(data) {
  const employeeData = data;
  try {
    const response = await fetch(`${host}/employees/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employeeData),
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