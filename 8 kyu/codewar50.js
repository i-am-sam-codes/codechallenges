//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let years = sonYearsOld * 2
    let formula = dadYearsOld - years
    if(formula < 0) return Math.abs(formula)
    return dadYearsOld - years
}