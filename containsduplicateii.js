//Objective is to find whether there are two numbers in an array that
//match and have a difference in indices less than k

let nums = [1,2,3,1], k = 3


//O(n) solution that uses a hashmap to keep track of the elements
//via their indicies

let map = {}
    
for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] != undefined && Math.abs(i - map[nums[i]]) <= k) {
        return true
    }
    map[nums[i]] = i
}

return false