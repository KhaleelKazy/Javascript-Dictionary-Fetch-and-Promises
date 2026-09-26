async function getDefinition(word) {
  const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`);
  const data = await response.json();

  const firstDefinition = data.entries[0].senses[0].definition;

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = firstDefinition;
}

const button = document.getElementById("searchButton");
button.addEventListener("click", () => {
  const word = document.getElementById("wordInput").value;
  getDefinition(word);
});