// MAJORITY ELEMENT

        var majorityElement = function(nums3) {
            let res = nums3[0];
            let count = 1;
            for(let i = 1; i < nums3.length; i++){
                if(nums3[i] == res) count++;
                else{
                    count--;
                    if(count == 0){
                        res = nums3[i];
                        count = 1;
                    }
                }
            }
            return res;
        };
        
        let nums3 = [3,2,3]
        console.log(majorityElement(nums3));
