<template>
    <el-container style="height: 100%;width:100%">
        <el-header>
            <v-head/>
        </el-header>
        <el-container>
            <v-side-bar/>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import vHead from './HeaderBar.vue'
import vSideBar from './SideBar.vue'
export default {
    components: {
        vHead, vSideBar
    }
}
</script>
<style scoped>
.el-header {
    padding: 0;
    margin: 0;
}
</style>


