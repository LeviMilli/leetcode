// 169. Majority Element
// Easy
// 13K
// 419
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 

// Constraints:

// n == nums.length
// 1 <= n <= 5 * 104
// -109 <= nums[i] <= 109
 

// Follow-up: Could you solve the problem in linear time and in O(1) space?



/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
  
    const length = nums.length;
  
    if (length % 2 === 0) {
      return nums[length / 2]
    } else {
      return nums[(length - 1) / 2]
    }
  };

/*
the majority number will always show up in the middle if we sort the array. after the array is sorted we grab the length of the numbers taht will be present and divide it in half.
If thats not possible then we remove a number from the length and divide again. the number returned will always be the majority.

Another way to do it without the use of sort is creating another hashmap like below.
*/



var majorityElement = function(nums) {
    var obj = {};
    
    for(var i = 0; i < nums.length; i++){
        obj[nums[i]] = obj[nums[i]] + 1 || 1;
        if(obj[nums[i]] > nums.length / 2)  return nums[i];
    }
    
};


/*
*/ 