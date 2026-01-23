function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.legth == 0 || fim.value.legth == 0 || passo.value.legth == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c}  \u{1F449}`
            } 
            } else {
                //Contagem regressiva
                for(let c = i; c >= f; c -= p) {
                     res.innerHTML += ' ${c}  \u{1F449}'
                }
            
            }
        res.innerHTML += '\u{1F3C1}'
    }
}