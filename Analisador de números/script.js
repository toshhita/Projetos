let num = document.getElementById('num')
let lista = document.getElementById('lista')
let valores = []

function limpar() {
    lista.innerHTML = ''
    document.querySelector('p#quantidade').innerHTML = ''
    document.querySelector('p#maior').innerHTML = ''
    document.querySelector('p#menor').innerHTML = ''
    document.querySelector('p#soma').innerHTML = ''
    document.querySelector('p#média').innerHTML = ''
}


function isNum(n) {
    if (Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    return l.indexOf(Number(n)) === -1
}




function ad() {
    let valor = num.value
    

    if (isNum(valor) && inLista(valor, valores)) {
        valores.push(Number(valor))
        let item = document.createElement('option')
        item.text = `Valor ${valor} adicionado`
        lista.appendChild(item)
        
        document.querySelector('p#quantidade').innerHTML = ''
        document.querySelector('p#maior').innerHTML = ''
        document.querySelector('p#menor').innerHTML = ''
        document.querySelector('p#soma').innerHTML = ''
        document.querySelector('p#média').innerHTML = ''
        num.value = ''
        num.focus()
        
    } else {
        alert('Valor inválido ou já está na lista!')
    }
}

function finalizar() {
    if (valores.length === 0) { 
        alert('Digite um valor antes de finalizar! ')
    } else {
        let qtd = document.querySelector('p#quantidade')
        let maior = document.querySelector('p#maior')
        let menor = document.querySelector('p#menor')
        let soma = document.querySelector('p#soma')
        let média = document.querySelector('p#média')
        valores.sort((a, b) => a - b)
        let ultimo = valores[valores.length - 1]
        let primeiro = valores[0]
        let resultado = somar()
        let médiaN = resultado / Number(valores.length)
        

        function somar() {
            let somaT = 0
            for(let c = 0; c < valores.length; c++) {
                    somaT += valores[c]
            }
            return somaT
        }
            
        qtd.innerHTML = `Foram cadastrados ${valores.length} números!`
        menor.innerHTML = `O menor número foi: ${primeiro}`
        maior.innerHTML = `O maior número foi: ${ultimo}`
        soma.innerHTML = `A soma dos números é: ${resultado}`
        média.innerHTML = `A média dos valores é ${médiaN}:`




    }
}
    