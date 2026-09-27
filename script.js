async function getDefinition(word) {
  const resultContainer = document.getElementById("result-container");
  resultContainer.textContent = ""; // clear previous results

  const response = await fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`);

  if (!response.ok) {
    const message = document.createElement("p");
    message.textContent = "Service Down";
    resultContainer.appendChild(message);
    return; // stop here, don't try to parse a bad response
  }

  const data = await response.json();

  if (data.entries.length === 0) {
    const message = document.createElement("p");
    message.textContent = "Word not found";
    resultContainer.appendChild(message);
  } else {
    const wordHeading = document.createElement("h2");
    wordHeading.textContent = data.word;
    resultContainer.appendChild(wordHeading);

    const definitionList = document.createElement("ul");
    const senses = data.entries[0].senses;

    senses.forEach(sense => {
      const listItem = document.createElement("li");
      listItem.textContent = sense.definition;
      definitionList.appendChild(listItem);
    });

    resultContainer.appendChild(definitionList);
  }
}

const button = document.getElementById("searchButton");
button.addEventListener("click", () => {
  const word = document.getElementById("wordInput").value;
  getDefinition(word);
});