<template>
  <div class="login-container">
    <div class="login-div">
      <h3> SDK 后台登录</h3>
      <p class="login-text"> 用户名：</p>
      <el-input prefix-icon="el-icon-tickets" placeholder="请输入用户名" type="text" v-model="inputUsername" clearable>
      </el-input>
      <p class="login-text">密码：</p>
      <el-input prefix-icon="el-icon-view" placeholder="请输入密码" type="password" v-model="inputPwd" clearable>
      </el-input>
      <el-button type="primary" class="login-btn" @click="login" :loading="isLoading">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputUsername: '',
      inputPwd: '',
      isLoading: false
    }
  },
  methods: {
    login: function(event) {
      if (this.inputUsername === '' || this.inputUsername.length <= 5) {
        this.$message.error('用户名格式不正确')
      } else if (this.inputPwd === '' || this.inputPwd.length <= 5) {
        this.$message.error('密码格式不正确')
      } else {
        this.isLoading = true
        const url = 'admin/login'
        this.axios.post(url, {
          'user_name': this.inputUsername,
          'user_pwd': this.inputPwd
        }).then(res => {
          this.isLoading = false
          console.log(res.data)
          if (res.data.code === 200) {
            this.$router.push({ name: 'game', params: { userToken: res.data.data.userToken } })
            window.localStorage.setItem('userToken', res.data.data.userToken)
            this.$message({
              message: res.data.msg,
              type: 'success'
            })
          } else {
            this.$message.error(res.data.msg)
          }
        }).catch(res => {
          this.isLoading = false
          this.$message.error('网络错误')
        })
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  color: #FFF;
  width: 100%;
  height: 100%;
  background-color: #243144;
  margin: 0 auto;
}

.login-div {
  width: 300px;
  margin: 0 auto;
  padding-top: 100px;
}

.login-text {
  margin-top: 20px;
}

.login-btn {
  margin-top: 30px;
  width: 100%
}
</style>
