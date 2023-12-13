const frm = document.querySelector("form")
const resp = document.querySelector("pre")
//ouvinte 

frm.addEventListener("submit",(e)=> {
    e.preventDefault()

    const valor = Number(frm.inValor.value)
    const num = Number(frm.inParcelas.value)
    const valorParcela = Math.floor(valor/num)
    let valorfinal= valorParcela+ (valor%num)
    let resposta=""
    for(let i=1; i < num; i++){
        resposta= resposta+ i+ "ªParcela:R$" + valorParcela.toFixed(2)+"\n"
    }
        resposta= resposta + num +"ªParcela:R$" + valorfinal.toFixed(2)
        resp.innerText= resposta  
})
