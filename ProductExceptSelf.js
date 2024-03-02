{
  /*Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]*/
}

// Solution

function productExceptSelf(nums) {
  const n = nums.length;

  let forwardArr = new Array(n);
  let backwardArr = new Array(n);
  let result = new Array(n);

  forwardArr[0] = 1;
  backwardArr[n - 1] = 1;

  // calculate the forward product of the array from right to left
  for (let i = 1; i < n; i++) {
    forwardArr[i] = forwardArr[i - 1] * nums[i - 1];
  }

  //calculate the backward product of the array from left to right
  for (let i = n - 2; i >= 0; i--) {
    backwardArr[i] = backwardArr[i + 1] * nums[i + 1];
  }

  // final product
  for (let i = 0; i < n; i++) {
    result[i] = forwardArr[i] * backwardArr[i];
  }

  return result;
}

const nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums));
