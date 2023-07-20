window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extensions = [".com", ".net", ".us", ".io", ".es"];

  var domainNames = [];

  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < extensions.length; l++) {
          var domainName = pronoun[i] + adj[j] + noun[k] + extensions[l];
          domainNames.push(domainName);
        }
        var domainHack =
          pronoun[i] + adj[j] + noun[k].slice(0, -1) + extensions[l];
        domainNames.push(domainHack);
      }
    }
  }

  var domainListElement = document.getElementById("domainList");
  domainNames.forEach(function(domain) {
    var li = document.createElement("li");
    li.textContent = domain;
    domainListElement.appendChild(li);
  });
};
