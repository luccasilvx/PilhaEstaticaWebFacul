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


