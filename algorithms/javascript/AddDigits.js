/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    num += '';
    res = 0;
    for(var i=0; i<num.length; i++) {
    	res += +num[i];
    } 
    if(res>=10) {  	
    	addDigits(res);  
    }
    return res;
};