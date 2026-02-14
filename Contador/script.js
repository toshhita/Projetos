function contar () {
var ini = document.getElementById('n1')
var fim = document.getElementById('n2')
var passo = document.getElementById('passo')
var res = document.getElementById('res')
res.innerHTML = 'Contando:'
if (ini.value.length == 0 || fim.value.length == 0) {
    alert('[ERRO] Preencha os Dados Novamente!')
    res.innerHTML = "Impossível Contar!"
}
 else {
    i = Number(ini.value)
    f = Number(fim.value)
    p = Number(passo.value)
    if (p <= 0) {
        alert('[ERRO] Passo Inválido. Considerando Passo 1.')
        p = 1
    }
    if (i < f) {
    for (let c = i; c <= f;c += p) {
        res.innerHTML += `${c} \u{2764}`
    }
} else {
    for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{2764} `
    }
}
res.innerHTML += `FIM`
}
}