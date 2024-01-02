import { createNavBar, tabSwitch } from "../src/index";

document.addEventListener('DOMContentLoaded', () => {
  createNavBar();

  document.getElementById('homeTab').addEventListener('click', () => tabSwitch('homeContent'));
  document.getElementById('menuTab').addEventListener('click', () => tabSwitch('menuContent'));
  document.getElementById('contactTab').addEventListener('click', () => tabSwitch('contactContent'));

  tabSwitch('homeContent'); // Initialize with the home tab
});
