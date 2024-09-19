// scripts/scripts.js

// TO DO: implement the business idea generation logic here
// For now, let's just display a sample result
document.getElementById("ideaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const industry = document.getElementById("industry").value;
    const skills = document.getElementById("skills").value;
    const resultText = `Based on your selection of ${industry} and skills in ${skills}, a potential business idea could be...`;
    document.getElementById("result").innerHTML = resultText;
  });// TO DO: implement the business idea generation logic here
  // For now, let's just display a sample result
  document.getElementById("ideaForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const industry = document.getElementById("industry").value;
    const skills = document.getElementById("skills").value;
    const resultText = `Based on your selection of ${industry} and skills in ${skills}, a potential business idea could be...`;
    document.getElementById("result").innerHTML = resultText;
  });