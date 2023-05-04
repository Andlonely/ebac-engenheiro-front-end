// Seleciona o formulário de adição de contatos
const form = document.querySelector('form');

// Adiciona o event listener para o submit do formulário
form.addEventListener('submit', (event) => {
  // Previne o comportamento padrão do formulário
event.preventDefault();

  // Seleciona os inputs de nome e telefone
const inputNome = document.querySelector('#nome');
const inputTelefone = document.querySelector('#telefone');

  // Cria um novo objeto com os dados do contato
const contato = {
    nome: inputNome.value,
    telefone: inputTelefone.value
};

  // Limpa os inputs
inputNome.value = '';
inputTelefone.value = '';

  // Seleciona a tabela de contatos e o tbody
const tabela = document.querySelector('table');
const tbody = document.querySelector('#tbody-contatos');

  // Cria uma nova linha na tabela com os dados do contato
const tr = document.createElement('tr');
const tdNome = document.createElement('td');
const tdTelefone = document.createElement('td');
const tdExcluir = document.createElement('td');
const btnExcluir = document.createElement('button');

tdNome.textContent = contato.nome;
tdTelefone.textContent = contato.telefone;
btnExcluir.textContent = 'Excluir';

tdExcluir.appendChild(btnExcluir);
tr.appendChild(tdNome);
tr.appendChild(tdTelefone);
tr.appendChild(tdExcluir);

tbody.appendChild(tr);

  // Adiciona a classe 'linha-adicionada' na <tr> correspondente ao novo contato
tr.classList.add('linha-adicionada');


  // Seleciona todas as linhas adicionadas
const linhasAdicionadas = document.querySelectorAll('.linha-adicionada');

  // Para cada
linhasAdicionadas.forEach((linha) => {
    // Seleciona o botão de exclusão da linha e adiciona a classe 'btn-excluir' ao botão, para mudar a cor e aplicar as formatações
    const btnExcluir = linha.querySelector('button');
    btnExcluir.classList.add('btn-excluir');
    // Adiciona o event listener para o clique do botão de exclusão
btnExcluir.addEventListener('click', () => {
    // Remove a linha da tabela
    linha.remove();
});


});
});