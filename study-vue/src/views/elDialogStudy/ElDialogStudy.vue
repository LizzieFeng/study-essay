<template>
  <div class="ElDialogStudy">
      <h3>el-dialog 组件学习</h3>
      <div>
            <!-- <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button> -->
            <div>
                dialogVisible:{{dialogVisible}}
            </div>
            <div>
                <h4>
                    1、两个dialog 追加body正确的使用方式
                </h4>
                <code>
                    <!--  -->
            <!-- <div  class="eldialogcontainer1"
                    v-if="dialogVisible">
                <el-dialog
                    title="提示1"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog1"
                    :modal="false"
                    :append-to-body="true">
                        <span>这是一段信息1</span>
                </el-dialog>
            </div>
            
            <div class="eldialogcontainer2"
                    v-if="dialogVisible">
                <el-dialog
                    title="提示2"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog2"
                    :modal="false"
                    :append-to-body="true">
                        <span>这是一段信息2</span>
                </el-dialog>
            </div> -->
                </code>
            </div>

            <div>
                <h4>
                    2、在当前位置进行两个dialog进行追加 正确的使用方式
                </h4>
                <code>
 <!-- -->
                <!-- <el-dialog
                    v-if="dialogVisible"
                    title="提示1"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog1"
                    :modal="false">
                        <span>这是一段信息1</span>
                </el-dialog>
 
                <el-dialog
                    title="提示2"
                    v-if="dialogVisible"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog2"
                    :modal="false">
                        <span>这是一段信息2</span>
                </el-dialog> -->
                </code>
            </div>

<!-- 
            <div>
                <h4>
                    3、同一个位置
                </h4>
                <code> -->
 <!-- -->
                <!-- <el-dialog
                    v-if="dialogVisible"
                    title="提示1"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog1"
                    :modal="false">
                        <span>这是一段信息1</span>
                </el-dialog>
 
                <el-dialog
                    title="提示2"
                    v-if="dialogVisible"
                    :visible.sync="dialogVisible"
                    custom-class= "ElDialogStudy-dialog2"
                    :modal="false">
                        <span>这是一段信息2</span>
                </el-dialog> -->
                <!-- </code>
            </div> -->
           
             <div>
                <h4>
                    4、测试两个同时追加在body下的el-dialog，dom结构被移除，但是dom结构使用的变量的销毁的情况
                </h4>   
                <el-button @click="dialogVisible = true">
                    在body下追加一个el-dialog,这个el-dialog不使用destroy-on-close，但是这个eldialog内嵌入一个组件
                </el-button>
                <!-- :destroy-on-close="true" -->
                <el-dialog
                    title="dialog"
                    :visible.sync="dialogVisible"
                    >
                    <el-button @click="dialogVisible = false">关闭</el-button>
                    <AChild></AChild>
                </el-dialog>
            </div>
            
      </div>
  </div>
</template>

<script>
import AChild from '@/components/AChild.vue'
export default {
    name: 'ElDialogStudy',
    components:{
        AChild,
    },
    data () {
        return {
            dialogVisible: false
        }
    },
    methods: {
        
        // closeEldialog() {
        //     console.log('closeEldialog')
        //     debugger
        //     this.dialogVisible = false;
        // }
    },
    mounted() {
    }
}
</script>

<style scoped>
    .container{
        background: yellow;
    }
</style>

<style>
    /* .el-dialog__wrapper{
        position: absolute;
        pointer-events: none;
    }
    .ElDialogStudy-dialog1{
        pointer-events: all;
        outline: 1px solid red;
        position: absolute;
        left: 0px;
        width: 200px;
        height: 200px;
    }
    .ElDialogStudy-dialog2{
        pointer-events: all;
        outline: 1px solid greenyellow;
        position: absolute;
        right: 0px;
        width: 200px;
        height: 200px;
    } */
</style>
