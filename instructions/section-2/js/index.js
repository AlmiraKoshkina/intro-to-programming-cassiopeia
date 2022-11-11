let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector('footer');
let copyright = document.createElement('p');
copyright.innerHTML = "&copy Almira Koshkina " + thisYear;
footer.appendChild(copyright);

let skills = [
"JavaScript",
"HTML",
"Git",
"CSS"
];
let skillsSection = document.getElementById('skills');
skillsList = skillsSection.querySelector('ul'); 
for (let i =0; i< skills.length; i++){
    let skill = document.createElement('li');
    skill.className = "skill";
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


    document.getElementById('leave_message').reset();
});

// Fetch GitHub Repositories

let repositories = new Array();


//Using the Fetch API, create a "GET" request to the same GitHub API url

function fetchData (url) {
   return fetch(url)
   .then(res => res.json())
   .then(function parseRepos(res) {
        console.log(res);
        repositories = res;
        console.log("Repos:");
        console.log(repositories);
   })
   .catch(error => console.log ('Looks like there was a problem', error))
}

fetchData('https://api.github.com/users/AlmiraKoshkina/repos')
.then(() => {
    let projectSection = document.getElementById("projects");
    let projectList = projectSection.querySelector('ul');
    console.log("repo len: " + repositories.length);
    for (let i=0; i < repositories.length; i++) {
        let project = document.createElement('li');
        project.innerHTML = `<a href="${repositories[i].html_url}">${repositories[i].name}</a>`;
        projectList.appendChild(project);
}
})



