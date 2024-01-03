export default function createMenuTab() {
    const menuTab = document.createElement('li');
    menuTab.textContent = "Menu";
    menuTab.id = "menuTab";
    return menuTab;
  }

  export function menuDesign(){
    let menu=document.getElementById('menuContent');
    if (menu.childNodes.length === 0) {
    let menuTitle=document.createElement('h1');
    menuTitle.textContent = 'Pizzas';
    menuTitle.classList.add('menuTitle');
    menu.appendChild(menuTitle);
    const items=[
        {
            name: 'Margherita',
            desc: 'San Marzano tomato sauce, fresh mozzarella, basil, extra virgin olive oil.',
            price: '$11.99'
          },
          {
            name: 'Pepperoni',
            desc: 'Spicy pepperoni, tomato sauce, mozzarella, oregano.',
            price: '$13.99'
          },
          {
            name: 'Quattro Formaggi',
            desc: 'A blend of four cheeses - mozzarella, gorgonzola, parmesan, and fontina.',
            price: '$14.99'
          },
          {
            name: 'Truffle & Mushroom',
            desc: 'Wild mushrooms, truffle oil, ricotta, mozzarella, parsley.',
            price: '$19.99'
          },
          {
            name: 'Veggie Delight',
            desc: 'Bell peppers, red onions, mushrooms, olives, tomato sauce, mozzarella.',
            price: '16.99',
          },
        ];

        items.forEach(pizza => {
            let pizzaItem = document.createElement('div');
            pizzaItem.classList.add('pizza-item');
        
            let pizzaName = document.createElement('h4');
            pizzaName.textContent = pizza.name;
            pizzaName.classList.add('pizza-name');
        
            let pizzaPrice = document.createElement('span');
            pizzaPrice.textContent = pizza.price;
            pizzaPrice.classList.add('pizza-price');
        
            let dottedLine = document.createElement('span');
            dottedLine.classList.add('dotted-line');
        
            pizzaItem.appendChild(pizzaName);
            pizzaItem.appendChild(dottedLine);
            pizzaItem.appendChild(pizzaPrice);
        
            let pizzaDesc = document.createElement('p');
            pizzaDesc.textContent = pizza.desc;
            pizzaDesc.classList.add('desc');
        
            menu.appendChild(pizzaItem);
            menu.appendChild(pizzaDesc);
          });

  

  }
}