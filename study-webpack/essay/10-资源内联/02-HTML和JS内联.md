raw-loader 内联 html
    例如： 要把html的一个判断内联进去

<script>
    // ${require('raw-loader!babel-loader!./meta.html')} 这个的写法是版本比较低的 html-webpack-plugin
    <%= require('raw-loader!./meta.html') %>
</script>

raw-loader 内联 JS

<script>
    // ${require('raw-loader!babel-loader!../node_modules/lib-flexible')}
    <%= require('raw-loader!./meta.html') %>
  <script><%= require('raw-loader!babel-loader!../../node_modules/lib-flexible/flexible.js') %></script>
</script>

raw-loader  0.5.1，高版本有问题主要为使用了es6 的 import export