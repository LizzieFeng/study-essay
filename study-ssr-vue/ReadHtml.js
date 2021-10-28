const renderer = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync('./index.html', 'utf-8')
  })
  
  renderer.renderToString(app, (err, html) => {
    console.log(html) // html 将是注入应用程序内容的完整页面
  })