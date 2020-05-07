/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

//Step 1: Write a function that will create a menu component 
//The function takes an array as its only argument.
const createMenu = (navArray) => {
  
// <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>


  //creating the elements:
  const menu = document.createElement("div")
  const menuList = document.createElement("ul")
//adding the styles to the div:
  menu.classList.add("menu")

// Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
  navArray.forEach(item => {
    const menuListIndex = document.createElement("li")
    menuListIndex.textContent = item
    menuList.appendChild(menuListIndex)
  })

// Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  menu.appendChild(menuList)
  document.querySelector(".menu-button").addEventListener("click", event => menu.classList.toggle("menu--open"))
  // console.log("clicktest");
  
  // Step 5: return the menu component.
  return menu
}
// Step 6: add the menu component to the DOM.
document.querySelector(".header").append(createMenu(menuItems))