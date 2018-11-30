const input = document.getElementById('coop_input');
let topMember = undefined;

const clearResults = () => {
  let dropDown = document.getElementById('autocomplete-list');

  while (dropDown.firstChild) {
    dropDown.removeChild(dropDown.firstChild);
  }
};

const createListItem = (member) => {
  const newElement = document.createElement('p');
  newElement.textContent = member.title.rendered;
  //   newElement.addEventListener('click', () => {
  //     listItemClick(member);
  //   });
  return newElement;
};

const domCallback = (response) => {
  let dropDown = document.getElementById('autocomplete-list');
  clearResults();
  response.forEach((item) => {
    const newItem = createListItem(item);
    dropDown.appendChild(newItem);
  });
  //   if (response.length === 0) {
  //     input.classList.add('error');
  //   } else {
  //     input.classList.remove('error');
  //   }
  if (response.length > 0) {
    topMember = response[0];
  }
};

input.addEventListener('keyup', (e) => {
  // console.log('response in fd: \n', e);

  // if (event.keyCode === 13) {
  //   enterPress();
  // }
  if (e.target.value) {
    fetchData(e.target.value, domCallback);
  } else {
    clearResults();
  }
});
