document.getElementById("quiz-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let results = {
        deportivo: 0,
        lujo: 0,
        practico: 0
    };

    const questions = document.querySelectorAll("input[type='radio']:checked");
    if (questions.length < 8) {
        alert("Por favor, responde todas las preguntas.");
        return;
    }

    questions.forEach((answer) => {
        results[answer.value]++;
    });

    let personalityType = Object.keys(results).reduce((a, b) => results[a] > results[b] ? a : b);

    let resultText = "";
    let resultImage = "";

    switch (personalityType) {
        case "deportivo":
            resultText = "¡Eres un Ferrari 488 GTB! Un auto veloz y lleno de adrenalina.";
            resultImage = "ferrari.jfif";
            break;
        case "lujo":
            resultText = "¡Eres un Rolls-Royce Phantom! Refinado, elegante y lujoso.";
            resultImage = "rollsroyce.jpg";
            break;
        case "practico":
            resultText = "¡Eres un Toyota Prius! Fiable, eficiente y amigable con el medio ambiente.";
            resultImage = "toyota.jpg";
            break;
        default:
            resultText = "Algo salió mal. Intenta de nuevo.";
    }

    document.getElementById("result").innerHTML = `
        <p>${resultText}</p>
        <img src="${resultImage}" alt="${personalityType}">
    `;
});
