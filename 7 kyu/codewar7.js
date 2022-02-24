//Your task is to return a sequence which includes the developer who is the oldest. In case of a tie, include all same-age senior developers listed in the same order as they appeared in the original input array.
function findSenior(list) {
    const maxAge = Math.max(...list.map(obj => obj.age));
    return list.filter(obj => obj.age === maxAge);
}