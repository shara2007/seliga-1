const frm = document.querySelector("form")
const resp=document.querySelector("h3")
// ouvinte 
frm.addEventListener("submit",(e)=> {
    e.preventDeflault()
    const num = Number(frm.inNúmero.value)
    let resposta="" 
    for(let i=1; i<= num/2;i++){
    if(num% i==0){
        resposta= resposta+ i+ ","
    }
    }
    resp.innerText=`Divisores de ${num}:${resposta}${num}.`
})
    