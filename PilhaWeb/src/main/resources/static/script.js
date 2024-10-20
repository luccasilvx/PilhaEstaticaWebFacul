async function pushValue() {
    const value = document.getElementById("valorPilha").value;
    if (value === "") {
        showNotification("Por favor, insira um valor.");
        return;
    }

    const response = await fetch(`/pilha/push/${value}`, { method: 'POST' });
    const result = await response.text();

    document.getElementById("resultado").innerText = result;
    showNotification("Valor empilhado com sucesso!");
}

async function popValue() {
    const response = await fetch(`/pilha/pop`);
    const result = await response.text();

    document.getElementById("resultado").innerText = result;
    showNotification("Valor desempilhado com sucesso!");
}

document.getElementById("btnVisualizar").addEventListener("click", function() {
    fetch("/pilha/visualizar")
        .then(response => response.json())
        .then(data => {
            const pilhaDiv = document.getElementById("pilha");
            if (data.length > 0) {
                pilhaDiv.innerHTML = "Estado atual da pilha: " + data.join(", ");
            } else {
                pilhaDiv.innerHTML = "A pilha está vazia.";
            }
        })
        .catch(error => console.error("Erro ao buscar estado da pilha:", error));
});

function showNotification(message) {
    const notificacao = document.getElementById("notificacao");
    notificacao.innerText = message;
    notificacao.classList.add("show");

    setTimeout(() => {
        notificacao.classList.remove("show");
        notificacao.classList.add("hidden");
    }, 3000);
}
