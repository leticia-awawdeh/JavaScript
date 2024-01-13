var numb = document.getElementById('number')
var tabist = document.getElementById('selist')
var res = document.querySelector('div#result')
let values = []

function isNumber(n){
    if (Number(n) >=1 && Number(n) <= 999){
        return true
    } else {
        return false
    }
}

function inList(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

function add(){
    if (isNumber(numb.value) && !inList(numb.value, values)){
        values.push(Number(numb.value))
        let item = document.createElement('option')
        item.text = `Valor ${numb.value} adicionado.`
        tabist.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('[ERROR]')
    }
    numb.value = ''
    numb.focus()
}


function end(){
    if (values.length == 0){
        window.alert('[ERROR} Adicione os valores antes de finalizar')
    } else {
        let total = values.length
        let bigger = values [0]
        let smallest = values [0]
        let sum = 0
        let med = 0
            for ( var post in values){
                sum += values[post]
                
                if (values [post] > bigger)
                bigger = values[post]
                
                if (values [post] < smallest)
                    smallest = values [post]
                }
                
                med = sum / total
                res.innerHTML = ''
                res.innerHTML += `<p> São ${total} números cadastrados </p>`
                res.innerHTML += `<p> O maior valor é ${bigger}</p>`
                res.innerHTML += `<p> O menor valor é ${smallest}</p>`
                res.innerHTML += `<p> A soma dos valores é ${sum}</p>`
                res.innerHTML += `<p> A média é ${med}</p>`
            
    }
   
}






 