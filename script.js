document.addEventListener('DOMContentLoaded', function() {
    const botao = document.getElementById('botao1');
    const paragrafoResultado = document.getElementById('resultado');
    
    // Variável para armazenar o valor atual (começa com 15, igual ao value do botão)
    let string = Number(botao.value);

    botao.addEventListener('click', function() {
        valorAtual += 5; // Soma +5 ao valor atual
        paragrafoResultado.textContent = `O resultado é: ${valorAtual}`;
        
        // Atualiza o value do botão (opcional)
        botao.value = valorAtual;
    });
});