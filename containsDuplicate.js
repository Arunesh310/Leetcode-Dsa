{
  /* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 */
}

// Solution

var containsDuplicate = function (nums) {
  let set = new Set(nums); // Set function automatically removes any duplicate from the array
  return set.size !== nums.length; // If duplicate is found and removed the length of the array will become less than the array length hence returning true
};
