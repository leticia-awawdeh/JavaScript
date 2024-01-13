function verify() {

var data = new Date()
var year = data.getFullYear()
var fyear = document.getElementById('txtano')
var result = document.querySelector('div#res')

    if (fyear.value.length == 0 || Number(fyear.value) > year) {
        window.alert('[ERRO] Verifique os dados colocados')

    } else {
        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement ('img')
        img.setAttribute('ag', 'photo')

            if( fsex[0].checked ) {
                gender = 'Homem'
                    if(age >= 1 && age <= 11 ){
                        img.setAttribute('src', 'crianço.png')
                    }else if (age >= 12 && age <= 19) {
                        img.setAttribute('src', 'adolescente.png')
                    } else if(age >= 20 && age <= 24){
                        img.setAttribute('src', 'jovemadulto.png')

                    }else if (age >= 25 && age <= 59 ){
                        img.setAttribute('src', 'adulto.png')

                    }else{
                        img.setAttribute('src', 'idoso.png')
                    }
                
            } else if ( fsex[1].checked ) {
                gender = 'Mulher'
                if(age >= 1 && age <= 11 ){
                    img.setAttribute('src', 'criança.png')
                }else if (age >= 12 && age <= 19) {
                    img.setAttribute('src', 'adolescenta.png')
                } else if(age >= 20 && age <= 24){
                    img.setAttribute('src', 'jovemadulta.png')

                }else if (age >= 25 && age <= 59 ){
                    img.setAttribute('src', 'adulta.png')

                }else{
                    img.setAttribute('src', 'idosa.png')
                }
            } 
            result.style.textAlign = 'center'
            result.innerHTML = `<p>Você tem ${age} anos e é ${gender}.</p>`
            result.appendChild(img)
            
    }
}
