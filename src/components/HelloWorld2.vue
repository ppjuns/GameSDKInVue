<template>
<el-container style="height: 100%;">
   <el-header style="background-color: rgb(64, 158, 255); width:100%;font-size: 12px; height:100px;">
  <p style="font-size: 28px;font-color:rgb(255, 255, 255);font-weight: bold;">SDK后台管理系统</p>
</el-header>
<el-aside width="200px" style="margin-top: 15px;">
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
  <el-radio-button :label="false">展开</el-radio-button>
  <el-radio-button :label="true">收起</el-radio-button>
</el-radio-group>
<el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">游戏列表</span>
    </template>
    <el-menu-item-group>
      <span slot="title">分组一</span>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <span slot="title">选项4</span>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-document"></i>
    <span slot="title">用户统计</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-setting"></i>
    <span slot="title">支付统计</span>
  </el-menu-item>
   <el-menu-item index="4">
    <i class="el-icon-mobile-phone"></i>
    <span slot="title">设备统计</span>
  </el-menu-item>
</el-menu>
</el-aside>
</el-container>
</template>

<script>
export default {
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
