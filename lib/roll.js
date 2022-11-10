export function roll(sides, dice, rolls) {

    let results = [];
    var sides = 6;

    for (let i = 0; i < rolls; i++) {
        let score = 0;
        for (let j = 0; j < dice; j++) {
            score += (Math.floor(Math.random() * sides) + 1);
        }
        results.push(score);
    }

    return {
        "sides": sides,
        "dice": dice,
        "rolls": rolls,
        "results": results
    };
}