const campoA = document.querySelector("#campoA");
const campoB = document.querySelector("#campoB");
const form = document.querySelector("#form");

// tira atualização do submit
form.addEventListener("submit", (event) => {
    event.preventDefault()

    // converte os valores dos campos em números
    const valorCampoA = parseInt(campoA.value);
    const valorCampoB = parseInt(campoB.value);

    // se o campoB for maior ou igual ao campoA, envia o formulário
    if (valorCampoB > valorCampoA) {
        alert("Formulário enviado com sucesso");
    } else {
        alert("O Campo B é menor que o Campo A, formulário inválido.")
    }
})