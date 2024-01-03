export default function createContactTab() {
    const contactTab = document.createElement('li');
    contactTab.textContent = "Contact";
    contactTab.id = "contactTab";
    return contactTab;
  }

export function contactDesign(){
  let contact = document.getElementById('contactContent');
  if (contact.childNodes.length === 0) {
    let form = document.createElement('form');
    form.id = 'contactForm';

    // Name Input
    let nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.id = 'name';
    nameInput.name = 'name';
    nameInput.placeholder = 'Your Name';
    nameInput.required = true;

    // Email Input
    let emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.id = 'email';
    emailInput.name = 'email';
    emailInput.placeholder = 'Your Email';
    emailInput.required = true;

    // Message Textarea
    let messageInput = document.createElement('textarea');
    messageInput.id = 'message';
    messageInput.name = 'message';
    messageInput.placeholder = 'Your Message';
    messageInput.required = true;

    // Submit Button
    let submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';

    // Append form elements to the form
    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(messageInput);
    form.appendChild(submitButton);
    let info = document.createElement('div');
    info.classList.add('info');
    info.innerHTML = `
      <h3>Contact Information</h3>
      <p>123 Pizza Street, Flavor Town</p>
      <p>Phone: (123) 456-7890</p>
      <p>Email: contact@sliceofitaly.com</p>
    `;
    contact.appendChild(form);
    contact.appendChild(info);
  }
}  