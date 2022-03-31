
function delyError(message){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        reject({message})
      },1000)
    })
  }
  async function test(){
      await delyError('ref is not defined')
  }
  // 我们期望的代码
  async function test(){
    try{
          await delyError('ref is not defined')
    }catche(e){
      console.error(e.message)
      _errorTrack(e.message,location.pathname)
       console.log('https://stackoverflow.com/search?q=[js]+'+encodeURI(e.message))
    }
  
  }
  test()