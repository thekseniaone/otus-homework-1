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
if (persName == 'Дед Мороз' || persName == 'Снегурочка'){
    return `${persName}! ${persName}! ${persName}!`
} else {
    return 'нам такого не задавали, это мы еще не проходили';
}
}

console.log(newYear('Снегурочка'));
console.log(newYear('Дед Мороз'));
console.log(newYear('тест'));