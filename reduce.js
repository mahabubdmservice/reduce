const friends = [
    {name: 'rashed', money: 2},
    {name: 'Kashed', money: 20},
    {name: 'Pashed', money: 18},
    {name: 'Mashed', money: 10},
    {name: 'Mizan', money: 111},
    ];

const total = friends.reduce((sum, friend) => {
        console.log(sum, friend);
       return sum + friend.money
    }, 0)

console.log(total);


const final = friends.reduce((sum, friend) => sum + friend.money, 0)
console.log(final);

