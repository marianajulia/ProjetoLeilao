const  lanceMinimo = 1000
const input = document.getElementById('input')
const lance = document.getElementById('lance')

lance.addEventListener('click', function(){
    const valor = parseFloat(input.value)

    if(isNaN(valor)){
        alert('Por favor, insira um valor válido!')
    }else if(valor < lanceMinimo){
        alert(`O lance mínimo é de R$1000`)
    }else{
        alert(`Lance enviado com sucesso!`)
    }
})