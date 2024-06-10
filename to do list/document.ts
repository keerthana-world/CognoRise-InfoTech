document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    addTaskBtn.addEventListener('click', addTask);

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            const span = document.createElement('span');
            span.textContent = taskText;
            li.appendChild(span);

            const editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit';
            editBtn.addEventListener('click', () => editTask(li, span, editBtn));
            li.appendChild(editBtn);

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete';
            deleteBtn.addEventListener('click', () => deleteTask(li));
            li.appendChild(deleteBtn);

            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function deleteTask(li) {
        taskList.removeChild(li);
    }

    function editTask(li, span, editBtn) {
        if (li.classList.contains('editing')) {
            const input = li.querySelector('input[type="text"]');
            span.textContent = input.value;
            li.removeChild(input);
            editBtn.textContent = 'Edit';
        } else {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input, span);
            li.removeChild(span);
            editBtn.textContent = 'Save';
        }
        li.classList.toggle('editing');
    }
});
