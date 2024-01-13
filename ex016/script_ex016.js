function verify(){
    
    var start = document.getElementById('start')
    var end = document.getElementById('end')
    var pa = document.getElementById('pass')
    var result = document.getElementById('cont')

    if (start.value.length == 0 || end.value.length == 0 || pa.value.lenght == 0){
        window.alert ('[ERRO] Verifique os Dados')

        } else {
            result.innerHTML = ('Contando: ')
            let init = Number(start.value)
            let ed = Number(end.value)
            let pas = Number(pa.value)
            if (pas <= 0){
                window.alert('Passo Inválido! Considerando Passo 1')
                pas = 1
            }
            if (init < ed) {
                //contagem crescente
                for (var c = init; c <= ed; c += pas) {
                result.innerHTML += ` ${c} \u{1F449}`
                }   

            } else {
            // contagem regressiva
                for(var c = init; c >= ed; c -= pas) {
                result.innerHTML += ` ${c} \u{1F449}`
                }
        }
        result.innerHTML += `\u{1F3C1}`
    }
}