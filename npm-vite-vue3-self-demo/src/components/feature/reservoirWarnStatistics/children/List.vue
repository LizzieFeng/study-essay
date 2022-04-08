<template>
<div class="ReservoirWarnStatistics-List">
    <div class="return-btn" @click.stop="$emit('gotostatistics-click')"></div>
    <div class="list-container">
        <div v-for="(e,i) of listData" class="list-row">
            <div class="serial-col">
                <div class="icon-container">{{i+1}} </div>
            </div>
            <div class="content-col">
                <div>
                    {{e[listConfig[0].props]}}
                </div>
                <div class="col-row">
                    <div v-for="(c,ci) of listConfig.slice(1)" class="row-col">
                        {{c.label}}:{{e[c.props]}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts" setup>
import { ref, inject } from 'vue';
const listConfig = inject<any>('listConfig')
const listData = inject<any>('listData');
const emit = defineEmits(['gotostatistics-click']);
</script>

<style scoped lang="less">
    .ReservoirWarnStatistics-List{
        overflow-y: auto;
        overflow-x: hidden;
        height: 100%;
        box-sizing: border-box;
        padding: 6px;
        position: relative;

        .return-btn{
            position: absolute;
            right:-6px;
            top: -6px;
            width: 55px;
            height: 40px;
            background: url("../imgs/return.png") no-repeat center;
            cursor: pointer;
        }

        .list-container{

        }

        .list-row{
            background: url("../imgs/li-item-bg.png") no-repeat left top;
            background-size: 100% 100%;
            display: flex;
            margin-bottom: 4px;
        }

        .serial-col{
            width: 50px;
            position: relative;
        }

        .icon-container{
            background: url('../imgs/serial-icon.png') no-repeat 0 0;
            background-position-y: -67px;
            min-width: 35px;
            min-height: 22px;
            font-size: 16px;
            font-family: HanYi;
            color: #c3e9ff;
            position: absolute;
            text-align: center;
        }

        .content-col{
            width: calc(100% - 50px);
            box-sizing: border-box;
            padding-right: 10px;
        }

        .col-row{
            display: flex;
            flex-wrap: wrap;

            .row-col:nth-child(2n){
                text-align: right;
            }
        }

        .row-col{
            width: 50%;
        }
    }
</style>