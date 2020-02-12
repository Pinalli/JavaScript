function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')//Mesmo efeito
    var res = document.querySelector('div#res')//
    if(fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src','neneH.png')
            } else if (idade < 21){
                img.setAttribute('src','jovem.png')
            } else if (idade < 50){
                img.setAttribute('src','homem.png')
            } else {
                img.setAttribute('src','idoso.png')
            }

        } else if(fsex[1].checked) {
            genero = 'Mulher'
             if (idade >= 0 && idade < 10) {
                img.setAttribute('src','neneM.png')
            } else if (idade < 21){
                img.setAttribute('src','garota.png')
            } else if (idade < 50){
                img.setAttribute('src','mulher.png')
            } else {
                img.setAttribute('src','idosa.png')
            }

            res.style.textAlign = 'center' //centralizou o texto pelo JS
            res.innerHTML = ` Detectamos ${genero} com ${idade} anos.`
            res.appendChild(img)
        }
       
    }
}
