<template>
  <div class="dialog container">
      <h3>我是Dialog组件--{{msg}}</h3>
      <div>
          <button @click.stop="closeDialog">关闭</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Dialog',
    data () {
        return {
        msg: 'Welcome to Dialog'
        }
    },
    props: {
      domId: {
        type: String,
        default: ''
      }
    },
    methods:{
        closeDialog() {
            this.$emit("closeDialog", this.domId);
        }
    },
    mounted() {
        console.log('我是 Dialog mounted,this.msg=',this.msg);
        if (this.domId) {
            document.getElementById(this.domId).appendChild(this.$el);
        } else {
            document.body.appendChild(this.$el);
        }
    },
    destroyed() {
    //   this.$el.parentNode.removeChild(this.$el);
    }
}
</script>

<style scoped>
    .container{
        background: hotpink;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 999;
    }
</style>
