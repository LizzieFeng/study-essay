<template>
  <div class="SelfDialog">
      <h3>自定义组件dialog</h3>
      <div id="defaultTarget">
        <p id="target" class="curTestTarget">
            将dialog插入在指定的dom结构
        </p>
      </div>
      <div>
          <button @click.stop="moveGreenyellow('defaultTarget')">将greenyellow还原</button>
          <button @click.stop="moveGreenyellow('dialogForA')">将greenyellow插入在指定的id=dialogForA</button>
          <button @click.stop="moveGreenyellow('dialogForB')">将greenyellow插入在指定的id=dialogForB</button>
          <button @click.stop="openDialog('dialogForA')">打开弹窗A</button>
          <button @click.stop="openDialog('dialogForB')">打开弹窗B</button>
          <button @click.stop="openDialog()">打开弹窗</button>
      </div>
      <div>
          <h6>id=dialogForA</h6>
          <div id="dialogForA" class="dialogOuter">

          </div>
      </div>
      <div>
          <h6>id=dialogForB</h6>
          <div id="dialogForB" class="dialogOuter">

          </div>
      </div>
      <Dialog domId="dialogForA" v-if="dialogForAVisable" @closeDialog="closeDialog"></Dialog>
      <Dialog domId="dialogForB" v-if="dialogForBVisable" @closeDialog="closeDialog"></Dialog>
      <Dialog v-if="dialogVisable" @closeDialog="closeDialog"></Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/dialog/Dialog';
export default {
    name: 'SelfDialog',
    components:{
        Dialog
    },
    data () {
        return {
            msg: 'Welcome to SelfDialog',
            dialogForAVisable: false,
            dialogForBVisable: false,
            dialogVisable: false,
        }
    },
    methods: {
        moveGreenyellow(id) {
            var node = document.getElementById('target');
            document.getElementById(id).appendChild(node);
        },
        openDialog(id) {
            if(id === "dialogForA") {
                this.dialogForAVisable = true;
            } else if( id === "dialogForB") {
                this.dialogForBVisable = true;
            } else {
                this.dialogVisable = true;
            }  
        },
        closeDialog(id) {
            if(id === "dialogForA") {
                this.dialogForAVisable = false;
            } else if( id === "dialogForB") {
                this.dialogForBVisable = false;
            } else {
                this.dialogVisable = false;
            } 
        }
    },
    mounted() {
       console.log('我是 SelfDialog mounted,this.msg=',this.msg);
    //    this.msg = 'mounted';
    }
}
</script>

<style scoped>
    .container{
        background: yellow;
    }

    .curTestTarget{
        background: greenyellow;
    }

    .dialogOuter{
        height: 100px;
        outline: 1px solid red;
        position: relative;
    }
</style>
