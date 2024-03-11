var strStr = function(haystack, needle) {
    if(needle) return haystack.indexOf(needle);
   else return 0;
};

const haystack = "sadbutsad"
const needle = "sad"
console.log(strStr(haystack, needle));
