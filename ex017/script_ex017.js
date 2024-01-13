function valuestab(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if (num.value.length == 0){
        window.alert('[ERROR] Digite um Número para funcionar')
    } else {
        let value = Number(num.value)
        tab.innerHTML = ''

        for (let acc = 1; acc <= 10; acc++){
            let item = document.createElement('option')
            item.text = `${value} X ${acc} = ${value*acc}`
            item.value = 'tab${acc}'
            tab.appendChild(item)
        }
    }
}