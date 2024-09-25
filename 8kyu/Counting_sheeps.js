function countSheeps(sheep) {

    let totalSheep = 0;
    sheep.map( val => {
        if ( val === 0 || val === undefined || val == null || val === false) {
            return 0;
        } else {
            totalSheep += 1;
        }
    })
    return totalSheep;
}