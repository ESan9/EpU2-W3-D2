const inputName = document.getElementById("Uname");
const saveButton = document.getElementById("save");
const memoryKey = "notepad-memory";
const removeButton = document.getElementById("remove");

saveButton.addEventListener("click", function () {
  // qua non mi serve "neutralizzare" nessun evento di submit
  console.log("SALVO");
  // recupero il contenuto testuale della textarea
  const uContent = Uname.value; // contenuto testuale della textarea
  // salvataggio di questa stringa nel localStorage sulla chiave prefissata
  localStorage.setItem(memoryKey, uContent);
  addElement(uContent);
  function addElement(uContent) {
    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.id = "savedContentDiv";

    // and give it some content
    const newContent = document.createTextNode(uContent);

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
  }
  alert("CONTENUTO SALVATO");
});

removeButton.addEventListener("click", function () {
  // salvataggio di questa stringa nel localStorage sulla chiave prefissata
  localStorage.removeItem(memoryKey);
  const element = document.getElementById("savedContentDiv");
  element.remove();
  alert("CONTENUTO RIMOSSO");
});
