function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia!
        img.src = 'foto-manha.png'
        document.body.style.background = '#cc9966'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        img.src = 'foto-tarde.png'
        document.body.style.background = '#ff9900'
    }else{
        //Boa noite!
        img.src = 'foto-noite.png'
        document.body.style.background = '#000033'
    }
}


