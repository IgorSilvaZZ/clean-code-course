const numberInString = "123456";

// ❌ Não legivel
const number = +numberInString;

// ❌ Se fosse um decimal seria transformado para inteiro
const number2 = parseInt(numberInString);

// ✅ Utilzar o construtor do Number
const number3 = Number(numberInString);

// ❌ Utilizando o shortcut do Javascript para transforma alguma variavel em boolean
const isNumberNotNull = !!number;

// ✅ Utilzar o construtor do Boolean
const isNumberNotNull2 = Boolean(number);
