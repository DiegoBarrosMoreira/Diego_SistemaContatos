// Simulando a classe de contatos em Python usando JavaScript
class Contato {
    constructor(nome, telefone, email) {
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}

// Lista para armazenar os contatos cadastrados
let contatos = [];

// Referências aos elementos HTML
const form = document.getElementById('form-contato');
const listaContatos = document.getElementById('contatos-lista');

// Função para cadastrar um novo contato
form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    // Cria um novo contato e adiciona à lista
    const novoContato = new Contato(nome, telefone, email);
    contatos.push(novoContato);

    // Exibe os contatos na tela
    exibirContatos();

    // Limpa os campos do formulário
    form.reset();
});

// Função para exibir a lista de contatos cadastrados
function exibirContatos() {
    listaContatos.innerHTML = '';

    // Cria um item de lista para cada contato
    contatos.forEach((contato, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${contato.nome} - ${contato.telefone} - ${contato.email}</span>
            <button class="delete" onclick="excluirContato(${index})">Excluir</button>
        `;
        listaContatos.appendChild(li);
    });
}

// Função para excluir um contato
function excluirContato(index) {
    contatos.splice(index, 1);
    exibirContatos(); // Atualiza a lista
}
