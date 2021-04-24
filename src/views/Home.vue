<template>
    <h1>Home</h1>

</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
    name: "Home",
    setup: () => {
        const count = ref(0);
        return { count };
    },
});
</script>

<style scoped lang="less">
h1 {
    color: #42b983;
}
</style>
