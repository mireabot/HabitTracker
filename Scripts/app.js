const balance = 2000;
const banned = true;
const gameExists = true;
const bonuses = 300;
const selling = true;

if ((balance > 1000 || bonuses > 100) && banned != true && selling != false && gameExists != false) {
    console.log('Can buy')
}
else {
    console.log('Cannot buy')
}