//You receive an array with your peers' test scores. Now calculate the average and compare your score!
function betterThanAverage(classPoints, yourPoints) {
    let count = 0;
    let arrCount = classPoints.map((e) => count++)
    let sum = classPoints.reduce((a, b) => a + b)
    let result = Math.round(sum / count)
    return yourPoints > result ? true : false;
    
}