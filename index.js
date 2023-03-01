let myGoalLibrary = [];

function Goal(date, goal, complete) {
  // the constructor...
  this.date = date
  this.goal = goal
  this.complete = complete
}

Goal.prototype.toggleComplete = function() {
  this.complete = !this.complete
}

function toggleComplete(index) {
  myGoalLibrary[index].toggleComplete()
  render()
}

function render(){
  let libraryGoalEl = document.querySelector('#library')
  libraryGoalEl.innerHTML = ""
  for (let i = 0; i < myGoalLibrary.length; i++) {
    let goalItem = myGoalLibrary[i]
    let goalEl = document.createElement('div')
    goalEl.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h3>${goalItem.date}</h3>
      </div>
      <div class="card-body">
        <p>${goalItem.goal}</p>
        <p class="status">${goalItem.complete ? 'Completed' : 'Not Completed'}</p>
        <button class="remove-btn" onclick="removeGoal(${i})">Remove</button>
        <button class="toggle-complete-btn" onclick="toggleComplete(${i})">Toggle Complete</button>
      </div>
    </div>`
    if (goalItem.complete) {
      goalEl.querySelector('.status').style.color = 'green';
    } else {
      goalEl.querySelector('.status').style.color = 'red';
    }
    libraryGoalEl.appendChild(goalEl)
  }
}
function removeGoal(index) {
  myGoalLibrary.splice(index, 1)
  render()
}

function addGoalToLibrary() {
  // do stuff here
  let date = document.querySelector('#day').value
  let goal = document.querySelector('#goal').value
  let complete = document.querySelector('#completed')
  let newGoal = new Goal(date, goal, complete)
  myGoalLibrary.push(newGoal)
  render()
    document.querySelector('#daily-goals').style.display = 'none'
}

let newGoalBtn = document.querySelector('.button')
newGoalBtn.addEventListener('click', function(){
  let newGoalForm = document.querySelector('#daily-goals')
  newGoalForm.style.display = 'block'
})

document.querySelector('#daily-goals').addEventListener('submit', function(event){
  event.preventDefault()
  addGoalToLibrary()
})

