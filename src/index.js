import createContactTab from "./contact";
import createMenuTab from "./menu";

export function createNavBar() {
    console.log('Creating NavBar'); // Debugging log
    const content = document.getElementById("content");
    console.log('Content Element:', content); 

  let navBar = document.createElement('nav');
  let ul = document.createElement('ul');

  let homeTab = document.createElement('li');
  homeTab.textContent = "Home";
  homeTab.id = "homeTab";

  let menuTab = createMenuTab(); 
  let contactTab = createContactTab(); 

  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);
  navBar.appendChild(ul);
  navBar.setAttribute("style", "background:salmon; height:8vh;");
  ul.setAttribute("style", "list-style:none; display:flex; gap: 2em");

  // Append navBar and tab contents to the content
  content.appendChild(navBar);
  content.appendChild(createTabContent('homeContent', 'Home Content'));
  content.appendChild(createTabContent('menuContent', 'Menu Content', true));
  content.appendChild(createTabContent('contactContent', 'Contact Content', true));

  return navBar;
}

export function tabSwitch(tabName) {
  const allContents = ['homeContent', 'menuContent', 'contactContent'];
  allContents.forEach(contentId => {
    const content = document.getElementById(contentId);
    content.style.display = contentId === tabName ? 'block' : 'none';
  });
}

function createTabContent(id, text, hideInitially = false) {
  const content = document.createElement('div');
  content.id = id;
  content.textContent = text;
  content.style.display = hideInitially ? 'none' : 'block';
  return content;
}
