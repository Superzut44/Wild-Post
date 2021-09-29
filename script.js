document.getElementById("submitz").addEventListener("click", function (event) {

    event.preventDefault();
    if (
      document.getElementById("formName").value.length <= 0 ||
      document.getElementById("formSurname").value.length <= 0 ||
      document.getElementById("formMail").value.length <= 0 ||
      document.getElementById("formTextarea").value.length  <= 0
    ) {
      alert("Champs manquant");
    } else {
      alert("Nous avons bien reçu votre message !");
    }
  });