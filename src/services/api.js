const BASE_URL = 'https://homeworkback.onrender.com';

export const createTask = async data => {
  const response = await fetch(`${BASE_URL}/task/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const getTasksByClass = async className => {
  const response = await fetch(`${BASE_URL}/task/${className}`);

  return response.json();
};