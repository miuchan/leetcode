/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];
    var dfs = function (left, right, str) {
        if(left===0 && right===0) {
            res.push(str);
        }
        if(left>0) {
            dfs(left-1, right+1, str+'(');
        }
        if(right>0) {
            dfs(left, right-1, str+')');
        }
    }
    dfs(n, 0, "");
    
    return res;
};