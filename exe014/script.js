function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 13   //  data.getHours()
    var minutos = data.getMinutes
    msg.innerHTML = `<strong>Agora são ${hora} horas!</strong>`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#f7ebdd'
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#fdc18a'
    }else  {
        img.src = 'noite.png'
        document.body.style.background = '#4f4f51'
    }
}