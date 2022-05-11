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
// Operadores Bitwise


