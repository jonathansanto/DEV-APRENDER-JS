// Operadores Aritméticos (Matemáticos)

let salario = 100;

// +, -, *, /, **

console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5);

// ++ --

let idade = 18;

console.log(idade++); // se quiser que imprima na mesma linha terá que colocar o incremento antes da variavel
console.log(idade);

// Operadores Atribuição

let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer;
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);



// Operadores de igualdade
// Igualdade restrita

console.log (1 === 1);
console.log('1' === 1);

// Igualdade solta

    console.log(1 == 1);
    console.log('1' == 1);

// Operador Ternário   

// Tem um cliente, se tiver + de 100 pontos será premium, se tiver - 100 pontos, comum

let pontos = 100;
let tipo = pontos > 100 ? 'premium' : 'comum';

console.log(tipo);

// Operadores Lógicos

// e (&&) - Retorna TRUE se os dois operandos forem true

//console.log(false && true);

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

console.log(podeAplicar);


// OU (||)  - Retorna TRUE se um dos operandos forem true

let maiorDeIdade1 = true;
let possuiCarteiraDeTrabalho1 = false;
let podeAplicar1 = maiorDeIdade1 || possuiCarteiraDeTrabalho1;

console.log('pode aplicar1:',podeAplicar1);

// Operador NOT (!)  - Nega uma operação

let candidatoRecusado = !podeAplicar1;

console.log('Candidato Recusado',candidatoRecusado);



