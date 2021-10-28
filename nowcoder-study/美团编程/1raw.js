let peopleNum = 0; // 参赛人数
let numLimitArr = []; //
let scoreArr = [];
let numLimitPairArr = [];
let socreResultArr  = [];
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
    // 得到有多少种淘汰人数的方案
    numLimitPairArr = numLimitArrInit();
    // 根据方案，算分
    numLimitPairArr.forEach( (pairItem) => {
        getTargetScore(pairItem);
    });
    const result = socreResultArr.length>0 ? socreResultArr[0] : -1;
    console.log(result)
}

// 确认人数分配方案有多少可能
function numLimitArrInit() {
    let resultArr = [];
    let failNum = +numLimitArr[0]; // 淘汰的人数
    const minNum = +numLimitArr[0]; // 限制的最小值，做比较用
    const maxNum = +numLimitArr[1]; // 限制的最大值，作比较用
    let successNum = peopleNum - failNum; // 录取的人数
    for(failNum; failNum<=maxNum;) {
        if((failNum <= maxNum) && (successNum<= maxNum) && (successNum>=minNum)) {
            const tmpObj = {
                failNum: failNum,
                successNum: successNum
            };
            resultArr.push(tmpObj);

        }
        ++failNum;
        --successNum;
    }
    return resultArr;
}

// 根据淘汰和入选的人数进行分数计算
function getTargetScore(pairObj) {
    const beginIndex = pairObj.failNum -1;
    // 得到这个分值的人就要淘汰,这个分支就应该是最小分值，但是，如果这个分支和下一个分值相等，那么就不符合要求
    const minScore = +scoreArr[beginIndex];
    if(minScore < scoreArr[beginIndex+1]) {
        socreResultArr.push(minScore);
    }
}