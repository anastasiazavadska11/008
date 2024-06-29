// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.

const fishArray = ["Лящ", "щука", "судак", "жерех", "сом", "окунь"];
let string = "";

// 👉 Спочатку через for

for (i = 0; i < fishArray.length; i++) {
    if(i===0) {
      string = fishArray[i];  
    } else {
        string += ', ' + fishArray[i];
    }
}
console.log(string);

// 👉 Потім через join()

console.log(fishArray.join(", "));

// 2. Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = ["card-1", "card-2", "card-3", "card-4", "card-5"];

// 3. Видалити

const cardToRemove = "card-3";
let index = cards.indexOf(cardToRemove);
cards.splice(index, 1);
console.log(cards);

// 4. Додати

const cards1 = ["card-1", "card-2", "card-3", "card-4", "card-5"];

const cardToInsert = "card-6";
let index1 = cards.length;
cards.splice(index1, 0, cardToInsert);
console.log(cards);

// 5. Оновити

const cardToUpdate = "card-4";
let index2 = cards.indexOf(cardToUpdate);
cards.splice(index2, 1, "new card-4");
console.log(cards);

