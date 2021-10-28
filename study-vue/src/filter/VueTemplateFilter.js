let falseStrArr = ['null', 'NULL', 'undefined', 'UNDEFINED', 'NaN'];
// 判断是否为不合法的值，即 '' null undefined等
let equalFalseStr = function (targetStr) {
    targetStr = (targetStr + '').trim(); // 强行转成字符串
    if(targetStr) { // 如果有值
        return !!falseStrArr.includes(targetStr);
    }
     return true;
  }

   

let  VueTemplateFilter = {
    filter: function (param) { 
        let nullFlag = equalFalseStr(param);
        debugger
        return nullFlag;
    }
}

export default VueTemplateFilter;