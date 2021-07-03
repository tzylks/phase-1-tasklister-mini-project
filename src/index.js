

document.querySelector('#create-task-form').addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log(e);
  let thing = e.target.newTaskDescription.value;
  //console.dir(e.target[0]) --> also works
  //console.log(thing);
  renderList(thing);
});

function renderList(thing) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  
  btn.innerText = 'x';
  btn.className = 'delete';
  li.innerText = thing;

  li.appendChild(btn);
  document.querySelector('#list').append(li);

  //removes li
  btn.addEventListener('click', () => li.remove() )
};



//document.getElementById('#create-task-form').addEventListener("submit", console.log("hi")).preventDefault()


// Create the Form in HTML- DONE 
// Target the Form in JS - i.e using the document.getElementById