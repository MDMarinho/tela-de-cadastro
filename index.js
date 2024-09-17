document.getElementById('form').addEventListener('submit', function(event) {
    //Validação dos campos
    const nome = document.getElementById('nome').value;
    const nasc = document.getElementById('nasc').value;
    const sexo = document.getElementById('sexo').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const cel = document.getElementById('cel').value;
    const fixo = document.getElementById('fixo').value;
    const end = document.getElementById('end').value;
    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;
    const confirmsenha = document.getElementById('confirmsenha').value


    // Valida o preenchimento dos campos
    if (!nome | !nasc | !sexo | !cpf | !email | !cel | !fixo | !end | !login) {
        event.preventDefault();
        warningMessage.textContent = 'Por favor, preencha todos os campos.';
        warningMessage.style.display = 'block';
        return;
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmsenha) {
        event.preventDefault();
        warningMessage.textContent = 'A confirmação de senha está incorreta.';
        warningMessage.style.display = 'block';
        return;
    }

    // Se tudo estiver correto, a mensagem de aviso é removida
    warningMessage.style.display = 'none';

alert('Seu formulário foi enviado!')
});
