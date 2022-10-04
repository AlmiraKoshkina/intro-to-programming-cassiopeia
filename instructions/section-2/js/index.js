let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = "Almira " + thisYear;
footer.appendChild(copyright);

let skills = [
"JavaScript",
"HTML",
"Git"
];
let skillsSection = document.getElementById('skills');
skillsList = skillsSection.querySelector('ul'); 
for (let i =0; i< skills.length; i++){
    let skill = document.createElement('li');
    skill.innerHTML = skills[i];
    skillsList.appendChild(skill);
}

let messageForm = document.querySelector('[name = "leave_message"]');
messageForm.addEventListener("submit", (event)=> {
    
    event.preventDefault();
    
    let textField = document.getElementById('text');
    let text = textField.value;

    let emailField = document.getElementById('email');
    let email = emailField.value;

    let messageField = document.getElementById('message');
    let message = messageField.value;

    console.log (text, email, message);

    let messageSection = document.getElementById('messages');
    let messageList = messageSection.querySelector('ul');
    console.log(messageList);
    let newMessage = document.createElement("li");
    newMessage.innerHTML = '<a href = "mailto:' + email + '">' + text + '</a> ' + '<span>' + 'wrote: ' +  message +' ' + '</span>';
    
    let removeButton = document.createElement('button');
    removeButton.innerHTML = 'remove';
    removeButton.type = "button";
    
    removeButton.addEventListener('click', () => {
        let entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.append(removeButton);
    messageList.append(newMessage);

// if (messageList.value === "none") {
//     messageSection.style.display = "block";

    document.getElementById('leave_message').reset();
});






