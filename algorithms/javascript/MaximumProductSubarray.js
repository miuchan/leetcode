/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    var product = nums[0],
        max = nums[0],
        min = nums[0];
    for(var i=1; i<nums.length; i++) {
        var max_copy = max;
        max = Math.max(Math.max(max*nums[i], nums[i]), min*nums[i]);
        min = Math.min(Math.min(min*nums[i], nums[i]), max_copy*nums[i]);
        product = Math.max(max, product);
    }
    return product;
};