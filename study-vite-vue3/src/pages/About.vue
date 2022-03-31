<template>
    <h1>
        关于
    </h1>
    <div>
        <HFunc :level="1">
            你好，render h1
        </HFunc>
        <HFunc :level="2">
            你好，render h2
        </HFunc>
        <HFuncJsx :level="3">
            你好，jsx h3
        </HFuncJsx>
    </div>
</template>
<script setup>

import HFunc from '../components/feature/hFunc/Heading.jsx';
import HFuncJsx from '../components/feature/hFunc/HeadingJsx.jsx';
</script>