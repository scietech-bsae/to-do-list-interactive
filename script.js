// Sélection des éléments du DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Fonction pour ajouter une tâche
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Veuillez entrer une tâche.');
        return;
    }

    // Créer un nouvel élément de tâche
    const taskItem = document.createElement('li');
    taskItem.className = 'task';

    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Bouton pour marquer comme terminé
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Terminé';
    completeBtn.addEventListener('click', () => {
        taskContent.classList.toggle('completed');
    });

    // Bouton pour supprimer la tâche
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Supprimer';
    deleteBtn.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    // Ajouter les éléments au DOM
    taskItem.appendChild(taskContent);
    taskItem.appendChild(completeBtn);
    taskItem.appendChild(deleteBtn);
    taskList.appendChild(taskItem);

    // Réinitialiser le champ de saisie
    taskInput.value = '';
}

// Ajouter un événement au bouton
addTaskBtn.addEventListener('click', addTask);

// Ajouter une tâche en appuyant sur "Entrée"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
