class soldier {
    constructor() {
        this.name = 'Fotsoldat';
        this.strength = Math.floor(Math.random() * 10) + 1;
        this.skill = Math.floor(Math.random() * 10) + 1;
        this.defense = Math.floor(Math.random() * 30) + 10;
    }
}
class horseman {
    constructor() {
        this.name = 'Rytter';
        this.strength = Math.floor(Math.random() * 20) + 10;
        this.skill = Math.floor(Math.random() * 10) + 1;
        this.defense = Math.floor(Math.random() * 20) + 1;
    }
}
class cannoncrew {
    constructor() {
        this.name = 'Kanonmann';
        this.strength = Math.floor(Math.random() * 10) + 40;
        this.skill = Math.floor(Math.random() * 10) + 1;
        this.defense = Math.floor(Math.random() * 5) + 1;
    }
}

function makeSoldier() {
    const randNum = Math.floor(Math.random() * 3);
    if (randNum == 0) {
        const newSoldier = new soldier;
        return newSoldier
    } else if (randNum == 1) {
        const newHorseman = new horseman;
        return newHorseman
    } else {
        const newCannoncrew = new cannoncrew;
        return newCannoncrew
    }
}

function findASoldierWhoAttacked(soldier) {
    switch (soldier.name) {
        case 'Fotsoldat':
            return 'soldierA'
        case 'Rytter':
            return 'riderA'
        case 'Kanonmann':
            return 'cannoncrewA'
    }
}
function findBSoldierWhoAttacked(soldier) {
    switch (soldier.name) {
        case 'Fotsoldat':
            return 'soldierB'
        case 'Rytter':
            return 'riderB'
        case 'Kanonmann':
            return 'cannoncrewB'
    }
}


let lagA = Math.floor(Math.random() * 10) + 5;
let lagB = Math.floor(Math.random() * 10) + 5;

console.log(`Lag A startar med ${lagA} soldatar`)
console.log(`Lag B startar med ${lagB} soldatar`)

while (lagA > 0 && lagB > 0) {
    let angrep = 3;
    let a_liv = 10;
    let b_liv = 10;
    const A = makeSoldier();
    const B = makeSoldier();
    const aSoldierDiv = document.getElementById(findASoldierWhoAttacked(A))
    const bSoldierDiv = document.getElementById(findBSoldierWhoAttacked(B))
    const skadeA = A.skill + A.strength - B.defense;
    const skadeB = B.skill + B.strength - A.defense;
    function fight() {
        aSoldierDiv.style.left = '370px'
        bSoldierDiv.style.left = '770px'
        if (a_liv > 0 && b_liv > 0 && angrep > 0) {
            const randNum = Math.random();
            if (randNum >= 0.5) {
                console.log('Lag A angriper med ein ' + A.name);
                aSoldierDiv.style.left = '450px'
                if (skadeA > B.defense) {
                    b_liv -= skadeA;
                    angrep--;
                    console.log('Soldat B tok skade, n??v??rende liv: ' + b_liv + ', skade fr?? A: ' + skadeA);
                    if (b_liv <= 0) {
                        lagB--;
                        console.log('Lag B mista ein soldat');
                    };
                    setTimeout(() => {
                        fight();
                    }, 2000);
                } else {
                    angrep--;
                    console.log('Soldat B forsvarte seg');
                    setTimeout(() => {
                        fight();
                    }, 2000);
                }
                if (angrep <= 0) {
                    console.log('Ingen nytte i kampen, trekk tilbake!')
                    setTimeout(() => {
                        fight();
                    }, 2000);
                }
            } else {
                console.log('Lag B angriper med ein ' + B.name);
                aSoldierDiv.style.left = '690px'
                if (skadeB > A.defense) {
                    a_liv -= skadeB;
                    angrep--;
                    console.log('Soldat A tok skade, n??v??rende liv: ' + a_liv + ', skade fr?? B: ' + skadeB);
                    if (a_liv <= 0) {
                        lagA--;
                        console.log('Lag A mista ein soldat')
                    }
                    setTimeout(() => {
                        fight();
                    }, 2000);
                } else {
                    angrep--;
                    console.log('Soldat A forsvarte seg');
                    setTimeout(() => {
                        fight();
                    }, 2000);
                }
                if (angrep <= 0) {
                    console.log('Ingen nytte i kampen, trekk tilbake!')
                    setTimeout(() => {
                        fight();
                    }, 2000);
                }
            }
        } else {
            console.log('daud')
        }
    }
};

if (lagA == 0) {
    console.log(`Lag B vant med ${lagB} soldatar`);
} else {
    console.log(`Lag A vant med ${lagA} soldatar`);
};
