//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers){
    let numArr = numbers.split(' ').map(Number)
    
    const highest = Math.max(...numArr);
    const lowest = Math.min(...numArr);
    
    return `${highest} ${lowest}`;
}