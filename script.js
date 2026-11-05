function saudacao (){
    console.log("Bem-vindo ao sistema!");
}

saudacao();

function apresentar (nome){
    console.log("Olá, " + nome + "!");
}

apresentar("Luanna");
apresentar("João");
apresentar("Matheus");

function somar(numero1,numero2){
    let resultado = numero1 + numero2;
    console.log(resultado);
}

somar(10,20);
somar(11,11);

function somar(a,b){
    return a+b;
}

let resultado = somar(10,20);

console.log("Resultado: " + resultado);

function verificarIdade(idade){
    if(idade>=18){
        return "Você tem " + idade + " anos. Você é maior de idade";
    }else{
        return "Você tem " + idade + " anos. Você é menor de idade";
    }
}

let idade = Number(prompt("Digite sua idade:"));

console.log(verificarIdade(idade));

let alunos = ["Matias", "Luanna", "Pedro", "Alice"];

console.log(alunos); //trazer todos

console.log(alunos[3]); //trazer especifico

alunos.push("Gabriel"); //acrescenta o último item
console.log(alunos);

alunos.pop(); // retira o último
console.log(alunos);
