import { tabSwitch } from "./index";
export default function createHomeTab() {
    const homeTab = document.createElement('li');
    homeTab.textContent = "Home";
    homeTab.id = "homeTab";
    return homeTab;
}

export function homeDesign(){
    let home=document.getElementById("homeContent");

    if (home.childNodes.length === 0) {
        let title = document.createElement('p');
        let caption = document.createElement('h3');

        title.textContent = "Slice Of Italy";
        caption.textContent = "A Taste That Tells a Story";

        home.appendChild(title);
        home.appendChild(caption);
        // New About Us section
        let aboutUs = document.createElement('section');
        aboutUs.id = 'about-us';

        let aboutUsTitle = document.createElement('h2');
        aboutUsTitle.textContent = 'About Us';
        aboutUs.appendChild(aboutUsTitle);

        let order = document.createElement('button');
        order.textContent = "Order Now";
        
        order.addEventListener('click', () => {
            tabSwitch('menuContent');
        });
        home.appendChild(order);
        
    }
}