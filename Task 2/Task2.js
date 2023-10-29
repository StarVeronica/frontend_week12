const text = document.getElementById("text").textContent.slice(7);

console.log(`1. Количество символов в тексте: ${text.length}`);

const result = text.replace(/; /g, ";\n");

console.log(`2. Текст с переносами строк: \n ${result}`);

const substring = result.replace(/\s/g, "");

console.log(`3. Текст с удалёнными пробелами: ${substring}`);

const newText = result.slice(28, 50);

console.log(`4. Извлечение подстроки: ${newText}`);

const replacedText = newText.replace("клён", "дубе");

console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

const replacedText2 = result.toUpperCase();

console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

const replacedText3 = result.replace(/клён/g, "дуб");

console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

const index = result.indexOf("моря");

console.log(`8. Индекс первого вхождения "моря": ${index}`);

const modifiedText = replacedText[0].toUpperCase() + replacedText.slice(1);

console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);
