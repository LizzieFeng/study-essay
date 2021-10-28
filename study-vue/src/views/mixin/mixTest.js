var mixTest = {
    created() {
        this.msgFromMixinCreated = 'msgFromMixinCreated';
        this.createdValue = 'mixin中的crated 进行赋值'
    },
    methods:{
        methodA() {
            this.methodAValue = 'Mixin进行的赋值cur methodAValue'
        }
    }
}

export default mixTest;