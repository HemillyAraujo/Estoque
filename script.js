const Estoque = [
    {Nome: "Batata", Quantidade: 10},
    {Nome: "Feijão", Quantidade: 3},
    {Nome: "Óleo", Quantidade: 20},
    {Nome: "Nescau", Quantidade: 8},
    {Nome: "Chocolate", Quantidade: 100}
]

function Buscar(){
    var produto = document.querySelector('#produto').value;

    for(var i = 0; i < Estoque.length; i++){
        
        if(produto === Estoque[i].Nome){
            var quant = Estoque[i].Quantidade;
            break;
        }
        else{
        }
    }
    if (quant){
        Resultado.textContent = `Quantidade encontrada!`;
    }
    else {
        Resultado.textContent = `Produto não encontrado!`;
    }
}