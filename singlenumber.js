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


//O(n) solution that uses a XOR bitwise operator to find the unique element
//a ⊕ b ⊕ a = (a ⊕ a) ⊕ b = 0 ⊕ b = b

let a = 0
for (let num of nums) {
    a ^= num
}

return a
