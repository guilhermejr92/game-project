document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnClassificar").addEventListener("click", classificarHeroi);
});

function classificarHeroi() {
    let nomeHeroi = document.getElementById("nomeHeroi").value;
    let xpHeroi = Math.floor(Math.random() * 20000);
    let nivelHeroi = calcularNivelHeroi(xpHeroi);

    // Exibindo o resultado na página HTML
    document.getElementById("resultado").innerHTML = `O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi} com XP ${xpHeroi}`;

    // Salvando os dados no localStorage
    salvarDados(nomeHeroi, nivelHeroi, xpHeroi);
}

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

function salvarDados(nome, nivel, xp) {
    // Salvando os dados no localStorage
    let dados = {
        nome: nome,
        nivel: nivel,
        xp: xp
    };

    // Convertendo para JSON e salvando
    localStorage.setItem("dadosHeroi", JSON.stringify(dados));
}

