const projects = [
  {
    "title": "API DE BUSCA INSTAGRAM",
    "url": "instagram_search",
    "description": "Uma tela com campo de usuario para você pesquisar informações do usuario no Instagram."
  },
  {
    "title": "EM BREVE! [Design Login]",
    "url": null,
    "description": "Tela de login para minhsa aplicações futuras"
  },
]

function refreshProjects(projects){
  document.getElementsByClassName('projects')[0].textContent = "";
  projects.forEach(project => renderProject(project));
}

function renderProject(project){
  const { title, url, description } = project;

  if(!title || !description)
    return false;

  //project element
  const projectElement = document.createElement('li');
  
  //title element
  const titleElement = document.createElement('h2');
  titleElement.textContent = title;

  const featuresElement = document.createElement('div');
  featuresElement.className = "features";

  //description element
  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = description

  const buttonElement = document.createElement('a');
  buttonElement.textContent = "Abrir";
  buttonElement.href = url ? `/sources/${url}` : "#";

  //adding elements in the features element ( div )
  featuresElement.appendChild(descriptionElement);
  featuresElement.appendChild(buttonElement);

  //project adding elements
  projectElement.appendChild(titleElement);
  projectElement.appendChild(featuresElement);

  document.getElementsByClassName('projects')[0].appendChild(projectElement);
}

document.getElementsByTagName("form")[0].addEventListener('submit', (event) => {
  event.preventDefault();
  const inputproject = document.getElementById("inputproject")
  const tag = inputproject.value;
  if(!tag) return refreshProjects(projects);

  let projectsFilted = projects.filter(project => project.title.includes(tag.toUpperCase()));
  if(projectsFilted.length == 0){
    projectsFilted = projects;
    inputproject.style.color = "red";
  }
  else{ 
    inputproject.style.color = "#000"; 
  }
  return refreshProjects(projectsFilted);
});

(function(){
  projects.forEach(project => renderProject(project));
})()