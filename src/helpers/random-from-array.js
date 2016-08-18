export function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

export default randomFromArray;