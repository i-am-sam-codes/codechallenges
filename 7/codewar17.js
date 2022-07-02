//You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
function maxDiff(list) {
    const max = Math.max(...list)
    const min = Math.min(...list)
    if(list.length <= 1) {
      return 0
    }
    return max - min;
}