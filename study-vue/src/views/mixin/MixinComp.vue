<template>
<div>
    <h1>
        进行Mixin学习
    </h1>
    <ul>
        <li>
            <h2>
                  1、测试mixin和当前组件中都写created的执行关系
            </h2>
            <div class="testGroupContainer">
                <div>
                    我是在当前created中进行的msgFromCurCreated赋值：{{msgFromCurCreated}}
                </div>
                <div>
                    我是在mixin 的  created中进行的msgFromMixinCreated赋值：{{msgFromMixinCreated}}
                </div>
            </div>
        </li>
        <li>
            <h2>
                  2、在当前created和mixin的created中对同一个变量createdValue进行赋值
            </h2>
            <div class="testGroupContainer">
                <div>
                    我是createdValue: {{createdValue}}
                </div>
            </div>
        </li>
        <li>
            <h2>
                  3、测试mixin和当前组件中有一个相同的方法名，改变同一个变量
            </h2>
            <div class="testGroupContainer">
                <div>
                    <button @click.stop="methodA">调用方法methodA，改变methodAValue的值</button>
                </div>
                <div>
                    我是在methodAValue: {{methodAValue}}
                </div>
            </div>
        </li>
    </ul>
</div>      
</template>

<script>
import mixTest from './mixTest.js';
export default {
    name: 'MixinComp',
    mixins:[mixTest],
    components:{
    },
    data () {
        return {
            msgFromCurCreated: '',
            msgFromMixinCreated: '',
            methodAValue: '我是原始值',
            createdValue: '我是原始值'
        }
    },
    methods:{
        methodA() {
            this.methodAValue = '当前页面进行的赋值cur methodAValue';
        }
    },
    created() {
        this.msgFromCurCreated = 'msgFromCurCreated';
        this.createdValue = '当前组件中的crated 进行赋值'
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
