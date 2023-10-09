function kolobok(characterName) {
    switch(characterName) {
        case 'дедушка': return console.log ('я от дедушки ушёл');
        break;
        case 'заяц': return console.log ('я от зайца ушёл')
        break;
        case 'лиса': return console.log ('меня съели');
        break;
        default: return console.log('такого в сказке не было');
}
return characterName;
}

kolobok('дедушка');
kolobok('заяц');
kolobok('лиса');
kolobok('тест');



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