const ToDoListApiUrl = "http://localhost:3000/";
const information = { description: "was auto" };

async function getData() {
  try {
    const response = await fetch(ToDoListApiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

fetch(ToDoListApiUrl, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(information),
})
  .then((response) => response.json())
  .then((information) => {
    console.log("Success:", information);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

async function deleteTodoData(id) {
  const deleteUrl = deleteTodoData + "" + id;
  await fetch(deleteUrl, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return deleteTodoData();
}
