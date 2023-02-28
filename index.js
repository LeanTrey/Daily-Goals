let myGoalLibrary = [];

function Goal(date, goal, complete) {
  // the constructor...
  this.date = date
  this.goal = goal
  this.complete = complete
}

function addGoalToLibrary() {
  // do stuff here
  let date = document.querySelector('#day').value
  let goal = document.querySelector('#goal').value
  let complete = document.querySelector('#completed')
  let newGoal = new Goal(date, goal, complete)
  console.log(newGoal)
}

let newGoalBtn = document.querySelector('.button')
newGoalBtn.addEventListener('click', function(){
  let newGoalForm = document.querySelector('#daily-goals')
  newGoalForm.style.display = 'block'
})

document.querySelector('#daily-goals').addEventListener('submit', function(){
  event.preventDefault()
  addGoalToLibrary()
})