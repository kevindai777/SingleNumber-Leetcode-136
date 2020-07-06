//Objective is to find the number in the array that doesn't appear twice.

let nums = [4,1,2,1,2]


//O(n) solution using a hashmap to keep track of the frequencies.

let map = {}
    
for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]] == undefined) {
        map[nums[i]] = 1
    } else {
        map[nums[i]]++
    }
}
    
for (let [key,value] of Object.entries(map)) {
    if (value !== 2) {
        return key
    }
}