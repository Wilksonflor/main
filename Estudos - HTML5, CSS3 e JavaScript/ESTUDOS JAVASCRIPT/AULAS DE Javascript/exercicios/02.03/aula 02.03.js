//Pedir para o usuário digitar um número - OK
//Converter em número inteiro - OK
//Pedir para o usuário digitar outro número - OK
//Converter em número inteiro - OK

//--------------------Início do execício--------------------
var n1 = parseInt(prompt('Digite um número'))
var n2 = parseInt(prompt('Digite outro número'))
//
//-------------------------pronto----------------------------

/*Mostrar em um alert o seguinte texto: 
O resto da divisão de (n1) por (n2) é: (resultado);* - OK/ 
/*Mostrar num alert o seguinte texto o número (n1) elevado a (n2) é: (resultado); - OK */
var calc = n1 % n2;
calc = parseFloat(calc);
alert('O resto da divisão de ' + n1 + ' por ' + n2 + ' é: ' + calc)
var expo = n1 ** n2
alert('O número ' + n1 + ' Elevado a ' + n2 + ' é: ' + expo)
