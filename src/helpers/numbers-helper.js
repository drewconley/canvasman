export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function coinToss() {
    return (Math.floor(Math.random() * 2) === 0);
}


export function baseRoll() {
    return getRandomInRange(2, 8);
}

export function percentChance(percent) {
    //usage: percentChance(15) //There is a 15 percent chance this will return true;
    return percent >= getRandomInRange(1, 100);
}