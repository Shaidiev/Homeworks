// Задание №1

var arr = [10, 20, 30, 50, 235, 3050]

for (var i = 0; i < arr.length; i++){
    let num = String(arr[i])
    let opr = num[2]
    if (opr == 3 || opr == 2 || opr == 5){
        console.log(num)
    }

}

// Задание №2

var arr2 = []
for (var x = 20; x >= 0; x--){
    arr2.push(x)
}
console.log(arr2)


// Задание №3

for (;;) {
    let war = prompt('Выберите цвета: "Красный", "Желтый", "Зеленый"');
    var str = war.toLowerCase().toString();
    console.log(str);
  
    let obj = {
      красный: 'Стоп',
      желтый: 'Жди',
      зеленый: 'Топи'
    };
  
    let key = Object.keys(obj);
    console.log(key);
  
    if (key[0] === str) {
      alert(obj.красный);
      console.log(obj.красный);
      break;
    } else if (key[1] === str) {
      alert(obj.желтый);
      console.log(obj.желтый);
      break;
    } else if (key[2] === str) {
      alert(obj.зеленый);
      console.log(obj.зеленый);
      break;
    } else {
      alert('Выберите значения предоставленных цветов');
      continue;
    }
  }


