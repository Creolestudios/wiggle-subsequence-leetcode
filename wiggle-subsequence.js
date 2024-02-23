var wiggleMaxLength = function(nums) {
    let dif = undefined
    let count = 1
    for(let i = 0; i<nums.length-1; i++){
            if(nums[i]>nums[i+1] ){
                if(dif == 1 || dif == undefined){
                    dif = 0
                    count = count + 1 
                }
            }
            else if(nums[i]<nums[i+1] ){
                if((dif == 0 || dif == undefined)){
                    dif = 1
                    count = count + 1
                }
            }
    }return count
};
