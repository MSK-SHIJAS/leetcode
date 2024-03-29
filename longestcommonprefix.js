// LONGEST COMMON PREFIX

        var longestCommonPrefix = function(strs) {
            let longestCommonPrefix = "";
            if (strs == null || strs.length == 0) {
                return longestCommonPrefix;
            }
            let minimumLength = strs[0].length;
            for (let i = 1; i < strs.length; i++) {
                minimumLength = Math.min(minimumLength, strs[i].length);
            }
            for (let i = 0; i < minimumLength; i++) {
                let current = strs[0][i];
                for (let j = 0; j < strs.length; j++) {
                    if (strs[j][i] != current) {
                        return longestCommonPrefix;
                    }
                }
                longestCommonPrefix += current;
            }
            return longestCommonPrefix;
        };
        
        let strs = ["flower","flow","flight"]
        
        console.log(longestCommonPrefix(strs));

        
