let fs = require('fs');
let readline = require('readline');
let file = './someFile.in';

let fileReader = readline.createInterface({
  input: fs.createReadStream(file)
});

fileReader
  .on('line', (line) => {
    // прочитана строка
    // обрабатываем строку
  })
  .on('close', () => {
    // конец файла
    // запускаем нашу крутую логику
    // формируем из данных строки, сохраням в файл


    // fs.writeFile('./someFile.out', content, () => {});
  });
