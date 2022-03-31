
const PatchFlags = {
    TEXT:1,      // 0001
    CLASS: 1<<1, // 0010
    STYLE:1<<2,  // 0100 
    PROPS:1<<3   // 1000
  }
  
  const flag1 = PatchFlags.TEXT | PatchFlags.STYLE // 0101
  
  // 权限校验
  
  flag1 & PatchFlags.TEXT  // 有权限，结果大于1
  flag1 & PatchFlags.CLASS //没有权限 是0