// Função para verificar e habilitar o botão com base na data e hora
function verificarDataEHora() {
    const dataAlvo = new Date('2023-10-09T00:00:00'); // Defina a data e hora alvo
    const agora = new Date();
    const botoes = document.getElementsByClassName('btn');

    for (const botao of botoes) {
        if (agora >= dataAlvo) {
            botao.removeAttribute('disabled');
            botao.textContent = 'Botão Ativado';
        } else {
            botao.setAttribute('disabled', true);
            botao.textContent = 'Botão Desativado';
        }
    }
}

// Chame a função para verificar a data e hora quando a página carregar
verificarDataEHora();

// Atualize a verificação a cada minuto (opcional)
setInterval(verificarDataEHora, 60000); // A cada minuto
