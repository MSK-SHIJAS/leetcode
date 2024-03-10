        var removeElement = function(nums, val) {
            let count = 0;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== val) {
                    nums[count++] = nums[i];
                }
            }
            return count;
        };
        
        let nums = [3,2,2,3]
        let val = 3
        
        count = removeElement(nums, val);
        let removedArray = nums.slice(0, count);
        
        console.log(removedArray);
        console.log(removeElement(nums, val));
