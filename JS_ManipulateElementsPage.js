// Этот скрипт выполняется после загрузки страницы
window.addEventListener("load", function () {
    appData.addLiToUl();
    appData.addText();
    appData.removeText();
    appData.questionUser();
});
// Главный объект с данными
let appData = {
    // Добавляем еще один пункт 
    addLiToUl: function () {
        let ul = document.querySelector("ul");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode("Пятый пункт"));
        ul.appendChild(li);
    },
    // Заменяем текст
    addText: function () {
        document.getElementById("title").innerText = "Мы продаем только подлинную технику Apple";
    },
    // Удаляем текст
    removeText: function () {
        document.querySelector("div.adv").innerText = "";
    },
    // Спрашиваем отношение к Apple и записываем ответ в блок prompt
    questionUser: function () {
        let question = prompt("Какое у вас отношение к Apple?");
        document.querySelector("div.prompt").innerText = question;
    }
};