//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let amigoInput = document.getElementById('amigo');
    let nomeAmigo = amigoInput.value.trim();
    let listaAmigos = document.getElementById('listaAmigos');
    let resultado = document.getElementById('resultado');

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome para adicionar.');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        amigoInput.value = '';
        return;
    }

    amigos.push(nomeAmigo);
    listaAmigos.innerHTML = '';
    resultado.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        
        let removerBtn = document.createElement('button');
        removerBtn.textContent = 'x';
        removerBtn.classList.add('remover-btn');
        removerBtn.onclick = () => removerAmigo(amigos[i]);
        
        li.appendChild(removerBtn);
        listaAmigos.appendChild(li);
    }
    
    amigoInput.value = '';
}

function removerAmigo(nome) {
    amigos = amigos.filter(amigo => amigo !== nome);
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        
        let removerBtn = document.createElement('button');
        removerBtn.textContent = 'x';
        removerBtn.classList.add('remover-btn');
        removerBtn.onclick = () => removerAmigo(amigos[i]);
        
        li.appendChild(removerBtn);
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para o sorteio!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const nomeSorteado = amigos[indiceSorteado];
    
    const p = document.createElement('p');
    p.textContent = `O nome sorteado foi: ${nomeSorteado}`;
    p.style.fontWeight = 'bold';
    resultado.appendChild(p);
}