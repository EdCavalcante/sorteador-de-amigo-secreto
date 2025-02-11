let listaComNomeDeAmigos = [];
function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo.trim() === '') {
        alert('Por favor, digite um nome.')
    } else {
        listaComNomeDeAmigos.push(nomeAmigo);
        document.getElementById('amigo').value = '';
        exibirAmigos();
    }
}

function exibirAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';
    for (let i = 0; i < listaComNomeDeAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaComNomeDeAmigos[i];
        document.getElementById('listaAmigos').appendChild(li);
    }
     }

     function escolherNomeDeAmigo() {
        if (listaComNomeDeAmigos.length === 0) { 
            alert('Digite os nomes dos seus amigos para serem sorteados.');
        } else {
            let nomeAleatorioSorteado = Math.floor(Math.random() * listaComNomeDeAmigos.length);
            let nomeEscolhido = listaComNomeDeAmigos[nomeAleatorioSorteado];
            document.getElementById('resultado').innerHTML = 'O amigo sorteado é: ' + nomeEscolhido;
        }
    } 
