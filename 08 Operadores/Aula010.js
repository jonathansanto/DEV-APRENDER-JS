//Comparações não boleanos

// Falsy - Undefined - Null - 0 - False - '' - NaN  - not a number

// Truthy - tudo que não seja nada acima


let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);