var ListaPeca = ["Filtro de Ar","Motor","Amortecedor"]

if (ListaPeca.length < 10){
    //É possível cadastrar
    console.log("É possível cadastrar mais peças")
} else {
    //Não é possível mais cadastrar
    console.log("Não tem mais espaço na lista")
}

let peso = 50;
if(peso<100){
    console.log("A peça deve pesar no mínimo 100g")
}else {
    console.log("A peça não possui peso adequado")
}

let nomePeca = "Disco de Freio"
if (nomePeca.length>3){
    console.log("Nome de peça adequado para o cadastro")
    } else if(nomePeca.length ==0){
        console.log("O nome da peçao não pode ser vazio")
    }else {
        console.log("O nome deve ter mais de 3 caracteres, digite um  nome adequado")
    }    

    // = -> atribuição de valor -. Recebe
   // == -> verificação se os valores são iguais -> é igual
  // === -> verificação se o valor e o tipo de informação são iguais -> 

  // let idade = 23
  // if (idade == "23")


  switch(nomePeca.length){
      case 0:
          console.log("O nome da peça não pode ser vazio")
          break

          case 1:
          case 2:
          case 3:
          console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado - Case")

          default:
          console.log("Nome da peça está adequado - Case")
          break
          }

          // var variável pode ser alterada, pode ser incluida mais informação durante o código por todos
          // let variável mais segura, fica travada