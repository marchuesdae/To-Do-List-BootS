const addTaskButton = document.getElementById('addTask');
const inputTitle = document.getElementById('inputTitle');
const inputDescription = document.getElementById('inputDescription');
const inputDate = document.getElementById('inputDate');
const taskContainer = document.getElementById('taskContainer');
const noItemsMessage = document.querySelector('.no-items');

addTaskButton.addEventListener('click', addTask);

function addTask() {
  const title = inputTitle.value;
  const description = inputDescription.value;
  const date = inputDate.value;

  if (title.trim() === '' || description.trim() === '' || date.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  const task = document.createElement('div');
  task.classList.add('task', 'card', 'mb-3', 'p-3');

  const taskContent = `
    <h5 class="card-title">${title}</h5>
    <p class="card-text">${description}</p>
    <p class="card-text"><small class="text-muted">Saved on: ${date}</small></p>
    <button type="button" class="btn btn-danger delete-task"><i class="fas fa-trash"></i> Delete</button>
  `;

  task.innerHTML = taskContent;
  taskContainer.appendChild(task);

  inputTitle.value = '';
  inputDescription.value = '';
  inputDate.value = '';

  noItemsMessage.style.display = 'none';

  const deleteButton = task.querySelector('.delete-task');
  deleteButton.addEventListener('click', () => {
    taskContainer.removeChild(task);
    if (taskContainer.children.length === 0) {
      noItemsMessage.style.display = 'block';
    }
  });
}
