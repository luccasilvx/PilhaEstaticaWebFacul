async function pushValue() {
    const value = document.getElementById("valorPilha").value;
    if (value === "") {
        showNotification("Por favor, insira um valor.");
        return;
    }
    const response = await fetch(`/pilha/push/${value}`, { method: 'POST' });
    const result = await response.text();
    document.getElementById("resultado").innerText = result;
    if (result.includes("empilhado")) {
        alert("Valor " + value + " empilhado com sucesso!");
    }
    document.getElementById("valorPilha").value = "";  // Limpa o campo de entrada
}

async function popValue() {
    const response = await fetch(`/pilha/pop`);
    const result = await response.text();
    document.getElementById("resultado").innerText = result;
    if (result.includes("removido")) {
        alert(result);
    }
}

document.getElementById("btnVisualizar").addEventListener("click", async function() {
    try {
        const response = await fetch("/pilha/visualizar");
        const data = await response.json();
        const pilhaDiv = document.getElementById("pilha");
        const tamanhoResponse = await fetch("/pilha/tamanho");
        const tamanho = await tamanhoResponse.text();
        if (data.length > 0) {
            pilhaDiv.innerHTML = `Estado atual da pilha: ${data.join(", ")} <br> Tamanho: ${tamanho}`;
        } else {
            pilhaDiv.innerHTML = "A pilha está vazia.";
        }
    } catch (error) {
        console.error("Erro ao buscar estado da pilha:", error);
    }
});

async function removerPorIndice() {
    const indice = document.getElementById("valorIndice").value;
    if (indice === "") {
        showNotification("Por favor, insira um índice.");
        return;
    }
    const response = await fetch(`/pilha/remover/${indice}`, { method: 'DELETE' });
    const result = await response.text();
    document.getElementById("resultado").innerText = result;
    if (result.includes("removido")) {
        showNotification(`Elemento no índice ${indice} removido com sucesso!`);
    }
    document.getElementById("valorIndice").value = "";  // Limpa o campo de entrada
}

async function peekValue() {
    const response = await fetch(`/pilha/peek`);
    const result = await response.text();
    document.getElementById("resultado").innerText = result;
}

function showNotification(message) {
    const resultado = document.getElementById("resultado");
    resultado.innerText = message;
    resultado.style.color = "#fff";
    setTimeout(() => {
        resultado.innerText = "";
    }, 3000);
}
