//Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(args) {
      const lowest = Math.min(...args);
      return lowest;
    }
}

// Refactored
class SmallestIntegerFinder {
  findSmallestInt(args) {
   return Math.min(...args)
  }
}