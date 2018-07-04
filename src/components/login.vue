<template>
  <div class="login-container">
    <h3> SDK 后台登录</h3>
    <p class="login-text"> 用户名：</p>
    <el-input prefix-icon="el-icon-tickets" placeholder="请输入用户名" type="text" v-model="inputUsername" clearable>
    </el-input>
    <p class="login-text">密码：</p>
    <el-input prefix-icon="el-icon-view" placeholder="请输入密码" type="password" v-model="inputPwd" clearable>
    </el-input>
    <el-button type="primary" class="login-btn" v-on:click="login">登录</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputUsername: '',
      inputPwd: ''
    }
  },
  methods: {
    login: function (event) {
      if (this.inputUsername === '' || this.inputUsername.length <= 5) {
        this.$notify.error({
          title: '错误',
          message: '用户名格式不正确'
        })
      } else if (this.inputPwd === '' || this.inputPwd.length <= 5) {
        this.$notify.error({
          title: '错误',
          message: '密码格式不正确'
        })
      } else {
        const url = 'init'
        this.axios.post(url, {
          'app_id': this.inputUsername,
          'app_key': this.inputPwd
        }).then(res => {
          this.$notify({
            title: res.data.code,
            message: res.data.msg
          })
        }).catch(res => {
          this.$notify.error({
            title: '错误',
            message: '网络错误'
          })
        })
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 300px;
  height: 100%;
  background-color: #FFF;
  margin: 0 auto;
}

.login-text {
  margin-top: 20px;
}

.login-btn {
  margin-top: 30px;
  width: 100%
}
</style>
