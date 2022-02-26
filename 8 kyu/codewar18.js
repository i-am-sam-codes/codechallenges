//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      const lowest = Math.min(...args);
      return lowest;
    }
}