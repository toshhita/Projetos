function gerar() {
    var inputn1 = document.getElementById('n1')
    var lista = document.getElementById('lista')
    lista.innerHTML = "Lista tabuada:  <br>"
    if (inputn1.value === "") {
        alert('[ERRO] Digite um número válido.')
        lista.innerHTML = "Digite um número acima!"
        return
    } else {
        var n1 = Number(inputn1.value)
        for (c = 1; c <= 10; c++) {
        let item = document.createElement('option')
        item.text += `${n1} X ${c} = ${n1 * c} ` 
        lista.appendChild(item)
    }
    }
    
}