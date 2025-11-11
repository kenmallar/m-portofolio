"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("conversion");

  const convertedLink = emailLink.href
    .replace("maringouin", "internet")
    .replace("_", "@")
    .replace("grommeuleux", "kenmallar")
    .replace("-", ".")
    .replace("patente", "com")
    .replace("#holala", "?subject=Salut Ken Mallar!");

  emailLink.setAttribute("href", convertedLink);
});
