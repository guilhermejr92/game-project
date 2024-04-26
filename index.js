const readline = require('readline');

// Função para calcular o nível do herói com base na XP
function calcularNivelHeroi(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar nome do herói ao usuário
rl.question("Digite o nome do herói: ", function (nomeHeroi) {
    // Gerar XP aleatória entre 0 e 20000
    let xpHeroi = Math.floor(Math.random() * 20000);

    // Calcular o nível do herói com base na XP
    let nivelHeroi = calcularNivelHeroi(xpHeroi);

    // Exibindo a mensagem com o nome e o nível do herói
    console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi} com XP ${xpHeroi}`);

    rl.close();
});
