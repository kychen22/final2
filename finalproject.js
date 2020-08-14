document
  .getElementById("reading")
  .addEventListener("mouseover", function() {
    document.getElementById("reading").innerHTML = "Some of my favorite genres are fantasy, realistic function, classics, and biographies. Click on this to see what I'm currently reading!";
  });
  document
  .getElementById("reading")
  .addEventListener("mouseout", function() {
    document.getElementById("reading").innerHTML = "Reading";
  });
  document.getElementById("reading").addEventListener("click", function() {
    document.getElementById("me").src =
      "https://images-na.ssl-images-amazon.com/images/I/71UHPATHqFL.jpg";
  });

  document
  .getElementById("writing")
  .addEventListener("mouseover", function() {
    document.getElementById("writing").innerHTML = "I've been writing since I was 5, and the first coherent piece I ever wrote was a small poem. Since then, I've grown attached to poetry and short stories.";
    document.getElementById("me").src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.0-9/100073602_267829321268091_695755728102621184_o.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_ohc=z8CHLxbs-W0AX8b7kQJ&_nc_ht=scontent-atl3-1.xx&oh=dc1193a271af8e354e0a809782cd2871&oe=5F5C8B86";
  });
  document
  .getElementById("writing")
  .addEventListener("mouseout", function() {
    document.getElementById("writing").innerHTML = "Writing";
  });

  document
  .getElementById("piano")
  .addEventListener("mouseover", function() {
    document.getElementById("piano").innerHTML = "I've also been playing piano for almost nine years. My favorite composer is Chopin, although I enjoy listening to Mozart as well.";
  });
  document
  .getElementById("piano")
  .addEventListener("mouseout", function() {
    document.getElementById("piano").innerHTML = "Piano";
  });

  document
  .getElementById("coding")
  .addEventListener("mouseover", function() {
    document.getElementById("coding").innerHTML = "Although I'm fairly new to coding, I'm excited to continue learning more about it in the future.";
  });
  document
  .getElementById("coding")
  .addEventListener("mouseout", function() {
    document.getElementById("coding").innerHTML = "Coding";
  });

  document.getElementById("me").addEventListener("click", function() {
    alert("Thanks for reading!");
  });

  document
  .getElementById("harlem")
  .addEventListener("mouseover", function() {
    document.getElementById("harlem").innerHTML = "1918-1930s";
  });
  document
  .getElementById("harlem")
  .addEventListener("mouseout", function() {
    document.getElementById("harlem").innerHTML = "The Harlem Renaissance";
  });

  document
  .getElementById("depression")
  .addEventListener("mouseover", function() {
    document.getElementById("depression").innerHTML = "1930s";
  });
  document
  .getElementById("depression")
  .addEventListener("mouseout", function() {
    document.getElementById("depression").innerHTML = "The Great Depression";
  });

  document
  .getElementById("cold")
  .addEventListener("mouseover", function() {
    document.getElementById("cold").innerHTML = "1950s-1990s";
  });
  document
  .getElementById("cold")
  .addEventListener("mouseout", function() {
    document.getElementById("cold").innerHTML = "The Cold War";
  });

  document
  .getElementById("pandemic")
  .addEventListener("mouseover", function() {
    document.getElementById("pandemic").innerHTML = "2020";
  });
  document
  .getElementById("pandemic")
  .addEventListener("mouseout", function() {
    document.getElementById("pandemic").innerHTML = "COVID-19";
  });

function button() {
  console.log("Liked!");
  alert("Thank you for leaving a like!");
}

function burn() {
  document.getElementById("joel").src = "https://thumbs.gfycat.com/ForsakenFeistyArabianhorse-size_restricted.gif";
}