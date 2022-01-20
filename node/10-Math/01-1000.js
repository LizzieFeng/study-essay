const largeNumFormatBase10000 = function(val) {
    const result = {};
    const BaseNum = 10000;
    const unitArr = ['', '万', '亿', '万亿'];
    let i = 0;
    if (val < BaseNum) {
      result.value = val;
      result.unit = unitArr[i];
    } else {
      i = Math.floor(Math.log(val) / Math.log(BaseNum));
      result.value = ((val / Math.pow(BaseNum, i))).toFixed(2);
      result.unit = unitArr[i];
    }
    return result;
  };