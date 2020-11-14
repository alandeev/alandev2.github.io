const projects = [
  {
    "title": "API DE BUSCA INSTAGRAM",
    "url": "instagram_search",
    "description": "Uma tela com campo de usuario para você pesquisar informações do usuario no Instagram."
  },
]

function renderProject(project){
  const { title, url, description } = project;

  if(!title || !description || !url)
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
  buttonElement.href = `/sources/${url}`;

  //adding elements in the features element ( div )
  featuresElement.appendChild(descriptionElement);
  featuresElement.appendChild(buttonElement);

  //project adding elements
  projectElement.appendChild(titleElement);
  projectElement.appendChild(featuresElement);

  document.getElementsByClassName('projects')[0].appendChild(projectElement);
}

(function(){
  projects.forEach(project => renderProject(project));
})()