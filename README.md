# Notes DOM Manipulation Introduction

```js
// To select a DOM element
$element  = document.getElementById("an-id") // a single element
$elements = document.getElementsByClassName("a-class") // array
$elements = document.getElementsByTagName("aTag") // array
$element  = document.querySelector("aQuery") // a single element
$elements = document.querySelectorAll("aQuery") // array



// To change the html or text
$element.innerHTML = "Some HTML"
$element.innerText = "Some text"

// To change the style
$element.style.backgroundColor = "red"
$element.style.border          = "2px green solid"
$element.style.fontSize        = "50px"
$element.style.marginTop       = "30px"
$element.style.paddingBottom   = "30px"


// To get and set the class name
$element.className = "new-class-name"

```
