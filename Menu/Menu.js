/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

 

  //Step 1: Write a function that will create a menu component as seen below:

  // <div class="menu">
  //   <ul>
  //     {each menu item as a list item}
  //   </ul>
  // </div>

  
  //The function takes an array as its only argument.

  // Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  // Add those items to the <ul>
  

  // Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.


  // Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  
  // Step 5: return the menu component.

  
  // Step 6: add the menu component to the DOM.
  
// creating a function that will create "li" items:
function createMenu(navArray) {
  //creating the elements:
  const menu = document.createElement("div");
  const menuList = document.createElement("ul");
//adding the styles to the div:
  menu.classList.add("menu");
//going through each menu list item and create "li" elements:
  navArray.forEach(item => {
    let menuListItem = document.createElement("li");
    menuListItem.textContent = item;
    menuList.appendChild(menuListItem);
  });
//adding a click event listener that toggles on/off using 'menu--open' class: 
  menu.appendChild(menuList);
  document.querySelector(".menu-button").addEventListener("click", function() {
    // console.log("clicktest");
    menu.classList.toggle("menu--open");
  });
  // return the menu component:
  return menu;
}
//adding components to the DOM: 
document.querySelector(".header").append(createMenu(menuItems));