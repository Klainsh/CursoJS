function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var resultado = document.getElementById('resultado')
    var inicio_tratado = Number(inicio.value)
    var fim_tratado = Number(fim.value)
    var passos_tratado = Number(passos.value)
    if(inicio.value.length == 0){
        alert('Digite o valor inicial.')
    }else if(fim.value.length == 0){
        alert('Digite o valor final.')
    }else if(passos.value.length == 0){
        alert('Digite os passos.')
    }else{    
        resultado.innerHTML = ''
        for(inicio_tratado; inicio_tratado <= fim_tratado; inicio_tratado += passos_tratado){
            resultado.innerHTML += `${inicio_tratado}`
        }
    }

    
}