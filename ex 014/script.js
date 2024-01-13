function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById ('image')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são <strong>${hora}</strong> horas.`

if (hora >= 0 && hora < 12 ){
    img.src = 'fotomanha.png'
    document.body.style.background = '#A391A4'

    }else if ( hora >= 12 && hora <= 18){
        img.src = 'fototarde.png'
        document.body.style.background = '#9F4845'

    }else{
        img.src = 'fotonoite.png'
        document.body.style.background = '#161A30'
    }

}
