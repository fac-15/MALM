function fetchData() {
  let xhr = new XMLHttpRequest();
  //call fetch data with no params
  //print to the console
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      // console.log(response);
      var membersArray = []; //array to store data from obj
      response.forEach(function(item) {
        membersArray.push(item.title.rendered);
      });
      console.log(response[1].acf.social_media[2].social_media_link);
      // console.log(response[1].title.rendered); //twitter link
      console.log(membersArray);
    }
  };
  xhr.open("GET", "/data", true);
  xhr.send();
}
fetchData();
