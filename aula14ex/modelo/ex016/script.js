function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passos = document.getElementById('passos')
    var resultado = document.getElementById('resultado')

    if(inicio.value.length == 0){
        alert('Digite o valor inicial.')
    }else if(fim.value.length == 0){
        alert('Digite o valor final.')
    }else if(passos.value.length == 0){
        alert('Digite os passos.')
    }else{      
        let inicio_tratado = Number(inicio.value)
        let fim_tratado = Number(fim.value)
        let passos_tratado = Number(passos.value)
        resultado.innerHTML = 'Contando: </br>'
        
        for(inicio_tratado; inicio_tratado <= fim_tratado; inicio_tratado += passos_tratado){
            resultado.innerHTML += `${inicio_tratado},`
        }
    }
    
}