<template>
  <el-aside class="main-side" width="200px" height="100%">
    <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" :collapse="false" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="/game">
        <i class="el-icon-location"></i>
        <span slot="title" class="main-title">游戏管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-document"></i>
        <span slot="title" class="main-title">用户管理</span>
      </el-menu-item>
      <el-menu-item index="/pay">
        <i class="el-icon-setting"></i>
        <span slot="title" class="main-title">支付管理</span>
      </el-menu-item>
      <el-menu-item index="/device">
        <i class="el-icon-mobile-phone"></i>
        <span slot="title" class="main-title">设备管理</span>
      </el-menu-item>
    </el-menu>
  </el-aside>
</template>

<script>

</script>

<style scoped>
.el-menu-vertical-demo {
  width: 200px;
  padding-top: 10px;
  color: #FFF;
  height: 100%;
  background-color: #243144;
}

.main-title {
  width: 100%;
}

.el-aside {
  width: 200px;
}

.main-side {}
</style>
