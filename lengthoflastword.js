        // LENGTH OF LAST WORD
        
        var lengthOfLastWord = function(s) {
            let len = 0;
        
            x = s.trim();
        
            for (let i = 0; i < x.length; i++) {
                if (x[i] == ' ') {
                    len = 0;
                }
                else {
                    len++;
                }
            }
        
            return len;
            
        };
        
        let s = "Hello World"
        console.log(lengthOfLastWord(s));
