/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var extensions = [".com", ".net", ".us", ".io", ".es"];

  // Variable para almacenar todas las combinaciones de nombres de dominio
  var domainNames = [];

  // Bucle anidado para generar todas las combinaciones posibles
  for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
      for (var k = 0; k < noun.length; k++) {
        for (var l = 0; l < extensions.length; l++) {
          var domainName = pronoun[i] + adj[j] + noun[k] + extensions[l];
          domainNames.push(domainName);
        }
        // Generar "domain hacks" con la extensión formando parte del dominio
        var domainHack =
          pronoun[i] + adj[j] + noun[k].slice(0, -1) + extensions[l];
        domainNames.push(domainHack);
      }
    }
  }

  // Imprimir las combinaciones de nombres de dominio generadas en la consola
  for (var x = 0; x < domainNames.length; x++) {
    console.log(domainNames[x]);
  }
};
