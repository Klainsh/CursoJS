function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.style.width = '300px';
        img.style.height = '300px'

        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianças.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'homem.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'homem-idoso.jpg')
            }
        }else{
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'crianças.jpg')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'mulher.jpg')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'mulher-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}