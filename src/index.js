import './style.css';
import createContactTab,{contactDesign} from "./contact";
import createMenuTab, {menuDesign} from "./menu";
import createHomeTab, {homeDesign} from './home';

const content = document.getElementById("content");

export function createNavBar() {

  let navBar = document.createElement('nav');
  let ul = document.createElement('ul');

  let homeTab = createHomeTab();
  let menuTab = createMenuTab(); 
  let contactTab = createContactTab(); 

  ul.appendChild(homeTab);
  ul.appendChild(menuTab);
  ul.appendChild(contactTab);
  navBar.appendChild(ul);

  // Append navBar and tab contents to the content
  content.appendChild(navBar);
  content.appendChild(createTabContent('homeContent'));
  content.appendChild(createTabContent('menuContent', true));
  content.appendChild(createTabContent('contactContent', true));

  return navBar;
}


export function tabSwitch(tabName) {
  const allContents = ['homeContent', 'menuContent', 'contactContent'];
  allContents.forEach(contentId => {
    const content = document.getElementById(contentId);
    content.style.display = contentId === tabName ? 'block' : 'none';
    
    // Call the design function based on the tab
    if (contentId === tabName) {
      switch (tabName) {
        case 'homeContent':
          homeDesign();
          break;
        case 'menuContent':
          menuDesign();
          break;
        case 'contactContent':
          contactDesign();
          break;
      }
    }
  });
}
function createTabContent(id, hideInitially = false) {
  const content = document.createElement('div');
  content.id = id;
  content.style.display = hideInitially ? 'none' : 'block';
  return content;
}

document.addEventListener('DOMContentLoaded', () => {
  createNavBar();

  document.getElementById('homeTab').addEventListener('click', () => tabSwitch('homeContent'));
  document.getElementById('menuTab').addEventListener('click', () => tabSwitch('menuContent'));
  document.getElementById('contactTab').addEventListener('click', () => tabSwitch('contactContent'));

  tabSwitch('homeContent'); // Initialize with the home tab
  console.log("Hello");
});
