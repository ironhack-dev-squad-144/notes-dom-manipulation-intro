console.log('Hello world!')

let $mainHeader = document.getElementById('main-header')
console.log($mainHeader)

$mainHeader.style.color = "chartreuse"
$mainHeader.style.backgroundColor = "black"

// Make all <li> red and with a "!" in the end
// getElementsByTagName return a collection of DOM elements
let $listItems = document.getElementsByTagName('li')
for (let i = 0; i < $listItems.length; i++) {
  $listItems[i].style.color = 'red'
  $listItems[i].innerText += '!'
}

// Add 💪 at the end of each element with the class "super"
let $superElements = document.getElementsByClassName('super')
for (let i = 0; i < $superElements.length; i++) {
  $superElements[i].innerText += "💪"
}


// Add a <li>Turtle</li> in the end of the <ul>
// document.querySelector is selecting the 1st element that match the selector
let $list = document.querySelector('body > ul')
$list.innerHTML += `<li>Turtle</li>`


// --- Code for the TODO list ---
let $button = document.querySelector('button')
let $input = document.querySelector('input')
let $todoList = document.querySelector('.todo-list')
$button.onclick = function () {
  addItemIntoTodoListFromTheInput()
}
document.onkeydown = function(event) {
  if (event.key === "Enter") {
    addItemIntoTodoListFromTheInput()
  }
}

function addItemIntoTodoListFromTheInput() {
  let value = $input.value
  console.log("The button was clicked and the value is", value)
  $todoList.innerHTML += `<li>${value}</li>`
  $input.value = '' // To clear the input
  $input.focus() // To give the focus to the input

  let $lis = document.querySelectorAll('.todo-list li')
  for (let i = 0; i < $lis.length; i++) {
    $lis[i].onclick = function() {
      console.log("The <li> at the following index", i)
      $lis[i].style.textDecoration = "line-through"
    }
  }
}
