function solution(left, right) {
    const count = right - left;
    let sum = 0;
    
    while (left <= right) {
      let floorSqrt = Math.floor(Math.sqrt(left));
        
      if (floorSqrt === Math.sqrt(left)) {
        sum -= left;
      } else {
        sum += left;
      }
      left++;
    }
    return sum;
}

