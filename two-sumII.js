/**
 * Leetcode two sum II: https://leetcode.com/problems/two-sum/
 * Input: number = [2, 7, 11, 15], target = 9
 * Output: [1, 2]
 *
 * Explanation: The sum of 2 and 7 is 9. Therefore index1 = , index2 = 2.
 */

/**
 * 以下使用三種方法
 * - Brutal Force
 * - Two Point
 * - Hash Table
 */

let num = [2, 7, 11, 15];
//let num = [2, 9, 7, 11, 15];
let target = 9;

const brutalForce = (num, target) => {
  if (num.length < 2) {
    return `num is too short`;
  }

  for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return `${i + 1}, ${j + 1}`;
      }
    }
  }
  return `can't find`;
};
let ansbrutalForce = brutalForce(num, target);

const twoPoint = (num, target) => {
  if (num.length < 2) {
    return `num is too short`;
  }

  // left and right point
  let l = 0;
  let r = num.length - 1;

  while (l <= r) {
    if (num[l] + num[r] === target) {
      return `${l + 1}, ${r + 1}`;
    } else if (num[l] >= target && num[r] >= target) {
      r--;
      l++;
    } else if (num[l] + num[r] > target) {
      if (num[l] > target) {
        l++;
      } else {
        r--;
      }
    } else {
      // num[l] + num[r] < target
      l++;
    }
  }
  return `can't find`;
};
let ansTwoPoint = twoPoint(num, target);

// Hash Table
const hashTable = (num, target) => {
  let iter = 0;
  let hash = {};
  for (let i = 0; i < num.length; i++) {
    iter = target - num[i];
    if (hash[iter] === undefined) {
      hash[num[i]] = i;
    } else {
      return `${hash[iter] + 1}, ${i + 1}`;
    }
  }
  return `can't find`;
};
let ansHashTable = hashTable(num, target);

console.log(
  `brutalForce func ans: ${ansbrutalForce}
twoPoint func ans: ${ansTwoPoint}
hashTable func ans: ${ansHashTable}`,
);
