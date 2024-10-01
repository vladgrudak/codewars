const rps = (p1, p2) => {
    let arrVar = ['paper', 'scissors', 'rock']

    let val1 = arrVar.indexOf(p1)
    let val2 = arrVar.indexOf(p2)

    if (Math.abs(val1 - val2) === 1) {
        return val1 > val2 ? 'Player 1 won!' : 'Player 2 won!'
    } else if (val1 === val2) {
        return 'Draw!'
    } else {
        return val1 > val2 ? 'Player 2 won!' : 'Player 1 won!'
    }
};