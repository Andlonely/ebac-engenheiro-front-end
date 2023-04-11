const campoA = document.querySelector("#campoA");
const campoB = document.querySelector("#campoB");
const form = document.querySelector("#form");


// tira atualização do submit
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const campoA = parseInt(campoA.value);
    const campoB = parseInt(campoB.value);
    // se o campoB for maior que o campoA, envia o formulário
    if (campoB.value >= campoA.value) {
        alert("Formulario enviado com sucesso");
    }
    else {
        alert("O Campo B é menor que o Campo A, formulário inválido.")
    }
})