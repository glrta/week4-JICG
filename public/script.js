const deleteButtons = document.querySelectorAll(".post__delete");

deleteButtons.forEach(deleteButton => {
  deleteButton.addEventListener("click", event => {
    const indexToDelete = Array.from(deleteButtons).indexOf(deleteButton);

    fetch("/", {
      method: "delete",
      headers: { "Content-Type": "application/json" },
      body: indexToDelete
    }).then(location.reload());
  });
});
