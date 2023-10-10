function kolobok(characterName) {
    switch(characterName) {
        case 'дедушка': return 'я от дедушки ушёл';
        break;
        case 'заяц': return 'я от зайца ушёл';
        break;
        case 'лиса': return 'меня съели';
        break;
        default: return 'такого в сказке не было';
}
return characterName;
}

console.log(kolobok('дедушка'));
console.log(kolobok('заяц'));
console.log(kolobok('лиса'));
console.log(kolobok('тест'));



function newYear(persName){
if (persName == "Дед Мороз" || persName == "Снегурочка"){
    return console.log(`${persName}! ${persName}! ${persName}!`)
} else {
    return console.log("нам такого не задавали, это мы еще не проходили");
}
}

newYear("Снегурочка");
newYear("Дед Мороз");
newYear("тест");