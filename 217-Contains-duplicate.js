// 217. Contains Duplicate
// Easy
// 7.6K
// 1.1K
// Companies
// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let hashmap = new Map()

    for (let i = 0; i < nums.length; i++){
        let num = nums[i]

        if (hashmap.has(num)){
            let value = hashmap.get(num)
            hashmap.set(num, value + 1)
        } else {
            hashmap.set(num, 1)
        } if (hashmap.get(num) >= 2 ) {
            
            return true
        }
    }  return false
    
};

/*
first thing we do is create a hashmap. each time a number shows up we make sure it isnt a duplice, becuase if it is. it will trigger our first if condition. If the first if condition is not triggered
we then move on to creating an entry for that spot. If at any point during this a number hits 2, we will and the loop and return true, else after the for loop we will return false.
*/