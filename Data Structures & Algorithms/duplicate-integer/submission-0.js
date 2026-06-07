class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(!nums || !nums.length){
            return false;
        }

        const freqSet = new Set();
        for(const elem of nums){
            if(freqSet.has(elem)){
               return true;
            }
            freqSet.add(elem);
        }

        return false;
        
    }
}
