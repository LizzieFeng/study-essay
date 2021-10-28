<template>
  <div class="MicroMacroStudy">
      <h3> 宏任务微任务 学习</h3>
      <div>
           看控制台和链接
           <a href="https://www.jianshu.com/p/bfc3e319a96b" target="_blank">讲解链接1</a>
           和
           <a href="https://www.jianshu.com/p/75107522813f" target="_blank">讲解链接2</a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'MicroMacroStudy',
    components:{
    },
    data () {
        return {
        }
    },
    methods: {
    },
    created() {
        console.log('script start')

        this.$nextTick( () => {
            console.log('nexttick 11');
        });

        async function async1() {
            await async2()
            console.log('async1 end')
        }
        async function async2() {
            console.log('async2 end')
        }
        async1()

        // new Promise(resolve => {
        //     console.log('async2 end')
        //     resolve()
        // })
        // .then(function() {
        //     console.log('async1 end')
        // })

        this.$nextTick( () => {
            console.log('nexttick 22');
        });

        setTimeout(function() {
            console.log('setTimeout')
        }, 0)

        this.$nextTick( () => {
            console.log('nexttick 33');
        });

        new Promise(resolve => {
            console.log('Promise')
            resolve()
        })
        .then(function() {
            console.log('promise1')
        })
        .then(function() {
            console.log('promise2')
        })

        console.log('script end')
        this.$nextTick( () => {
            console.log('nexttick 44');
        });

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