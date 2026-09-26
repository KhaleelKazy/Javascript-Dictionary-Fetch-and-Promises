function getDefinition(word) {
  fetch(`https://freedictionaryapi.com/api/v1/entries/en/${word}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP error, could not find word");
      }
      return response.json();
    })
    .then(data => {
      if (data.entries.length === 0) {
        console.log("Word not found");
      } else {
        const word = data.word;
        const firstDefinition = data.entries[0].senses[0].definition;
        console.log(word, firstDefinition);
      }
    })
    .catch(error => {
      console.log("Error: Could not connect to the dictionary service");
    });
}

const button = document.getElementById("searchButton");
button.addEventListener("click", () => {
  const word = document.getElementById("wordInput").value;
  getDefinition(word);
});