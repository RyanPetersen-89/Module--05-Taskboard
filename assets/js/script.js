// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"))||[];
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
return nextId++;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

  const header = $('<h4>').addClass('card-title').text(task.title)
  //Add element for all required attributes
  const p1El = $('<p>').addClass('card-text').text(task.date)
  const newTaskCard = $('<div>').addClass('card').append(header).append(p1El)
  newTaskCard.id = 'task' + task.id
  return newTaskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  $("#todo-cards").empty();
  
  // Renders each task
  taskList.forEach(task => {
    let $taskCard = createTaskCard(task);
    $taskCard.addClass('task-card');
    $("#todo-cards").append($taskCard);
  });

  // Makes cards draggable
  $(".task-card").draggable({
    revert: "invalid",
    cursor: "move",
    containment: "document",
    helper: "clone",
    zIndex: 100
    
})
$( function() {
  $( "#draggable" ).draggable();
  $( ".lane" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" ).text ("Dropped!");
      const droppedElementId = ui.draggable.attr('id');
      console.log("Dropped element ID:",droppedElementId);
    }
  });
} );
}



// Todo: create a function to handle adding a new task
function handleAddTask(event){
console.log('hello');
const newTask = {
      id: generateTaskId(),
      title: $('#task-name-input').val(),
      date: $('#datepicker').val(),
      description: $('#description').val()
    };
taskList.push(newTask);
localStorage.setItem('tasks', JSON.stringify(taskList));
console.log('testing');
renderTaskList();
}

$(function() {
    $( "#datepicker" ).datepicker({
    });
  } );

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $(document).ready(function () {
    // Initializes date picker
    $("#taskDate").datepicker();
  
    // Add event listener for adding a new task
    $('#addTask').on('click', handleAddTask);
  
    // Render task list
    renderTaskList();
})
});
