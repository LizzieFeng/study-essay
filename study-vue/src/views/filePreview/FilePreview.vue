<template>
  <div>
      <h1>
          file文件预览
      </h1>
      <ul style="border: 2px solid red;">
        <li>
              <h2>
                  pdf
              </h2>
              <div class="testGroupContainer">
               
              </div>
        </li>
        <li>
              <h2>
                  docx
              </h2>
              <div class="testGroupContainer">
                 
              </div>
        </li>
        <li>
              <h2>
                  doc
              </h2>
              <div class="testGroupContainer">
                 
              </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'FilePreview',
    components:{
    },
    data () {
        return {
           
        }
    },
    props:{
    },
    methods:{
        
    },
    created() {
      setTimeout(()=>{
        this.$preview({
          //url: 'https://testimg.tiangongy.com/100601/a024b86760bb1ff3b38f25ae2e0b9bdf', //图片
          //url: 'https://testimg.tiangongy.com/100601/9958ff80d202f91b347b14b5c56f14e8', // xlsx
          //url: 'https://testimg.tiangongy.com/100601/12d7e6a9b0b9169b800fbb29061212c2', //pptx
          //url: 'https://testimg.tiangongy.com/100601/ce44c69f3075334e6c624b8180a42804', //doc,
          //url: 'https://testimg.tiangongy.com/100601/3b85b4f1c3accdb4bb9f7e42e1f9070e',
          url:'http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf',
          fid: '12121212'
        })
      }, 2000);

    }
}
</script>

<style scoped>
    .conclusion {
        background: cadetblue;
    }
    .testGroupContainer{
        /* border: 2px solid red; */
        background: #f3f3f3;
    }
</style>
