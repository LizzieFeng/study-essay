// 优化思路，只要找出淘汰晋级人数组合中，最少淘汰人数的那个分值，就可以提前结束了

let peopleNum = 0; // 参赛人数
let numLimitArr = []; //
let scoreArr = [];
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputs = [];
rl.on('line', function(line){
    inputs.push(line.trim());
    (inputs.length == 2 ) && rl.close();
});
rl.on('close', function() {
    handleInputs();
    process.exit(0);
});

function handleInputs() {
    // 处理输入
    const line_1 =  inputs[0];
    const line_2 = inputs[1];
    const line_1_arr = line_1.split(' ');
    const line_2_arr = line_2.split(' ');
    peopleNum = +line_1_arr[0];
    numLimitArr = line_1_arr.slice(1);
    // 对分值进行排序，方便比较大小
    line_2_arr.sort((a,b) => {
        a = +a;
        b = +b;
        return a-b;
    });
    scoreArr = line_2_arr;
    beginCalc();
}

function beginCalc() {
    // 先找出淘汰和晋级的人数分配方案
    numLimitArrInit();
}

// 先找出淘汰和晋级的人数分配方案
function numLimitArrInit() {
    let resultScore = -1;
    let failNum = +numLimitArr[0]; // 淘汰的人数
    const minNum = +numLimitArr[0]; // 限制的最小值，做比较用
    const maxNum = +numLimitArr[1]; // 限制的最大值，作比较用
    let successNum = peopleNum - failNum; // 录取的人数
    for(failNum; failNum<=maxNum;) {
        if((failNum <= maxNum) && (successNum<= maxNum) && (successNum>=minNum)) {
            // 得到一个方案
            const tmpObj = {
                failNum: failNum,
                successNum: successNum
            };
            // 根据淘汰人数去算分
            resultScore =  getTargetScore(tmpObj);
            if(resultScore !== -1) { // 已经找到了最小的分值，可以提前结束了
                console.log(resultScore);
                return ;
            }
        }
        ++failNum;
        --successNum;
    }
    if(resultScore === -1) { // 没有找到方案
        console.log(resultScore);
    }
}

// 根据淘汰和入选的人数进行分数计算
function getTargetScore(pairObj) {
    let targetScore = -1;
    const beginIndex = pairObj.failNum -1;
    // 得到这个分值的人就要淘汰,这个分支就应该是最小分值，但是，如果这个分支和下一个分值相等，那么就不符合要求
    const minScore = +scoreArr[beginIndex];
    if(minScore < scoreArr[beginIndex+1]) {
        // 得到目标分值
        targetScore = minScore;
    }
    return targetScore;
}