<template>
  <div class="body">
    <el-button type="primary" @click="addGame">创建游戏</el-button>
    <el-dialog title="提示" :visible.sync="modifyDialogVisible" width="30%" >
      <span>游戏名</span>
      <el-input prefix-icon="el-icon-tickets" placeholder="请输入游戏名" type="text" class="name-input" v-model="gameName" clearable>
      </el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerModifyGame">确 定</el-button>
      </span>
    </el-dialog>
    <el-table v-loading="isLoading" border :data="tableData" height="700" class="table">
      <el-table-column prop="gid" label="id" width="100">
      </el-table-column>
      <el-table-column prop="gameName" label="游戏名称" width="200">
      </el-table-column>
      <el-table-column prop="appId" label="appId" width="350">
      </el-table-column>
      <el-table-column prop="appKey" label="appKey" width="350">
      </el-table-column>
      <el-table-column prop="gameTime" label="创建（修改）时间" width="250">
      </el-table-column>
      <el-table-column label="操作" fixed="right" width="250">
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="modifyGame(scope.row.gid)">修改</el-button>
          <el-button type="danger" @click.native.prevent="deleteGame(scope.row.gid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" >
      <span>确定删除该游戏？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="innerDeleteGame">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    console.log('data')
    return {
      tableData: [],
      isLoading: false,
      dialogVisible: false,
      modifyDialogVisible: false,
      deleteId: 0,
      modifyId: 0,
      gameName: '',
      userToken: window.localStorage.getItem('userToken')
    }
  },
  created() {
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    // 新增游戏
    addGame: function() {
      this.$prompt('请输入游戏名', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        console.log(value)
        if (value === null) {
          this.$message.error('请输入正确的游戏名')
        } else {
          this.axios.post('/game/add', {
            'game_name': value,
            'user_token': this.userToken
          })
            .then(res => {
              if (res.data.code === 200) {
                this.$message({
                  message: '新增成功',
                  type: 'success'
                })
                this.getInfo()
              }
            })
            .catch(res => {

            })
        }
      }).catch(() => {

      })
    },
    // 获取全部游戏
    getInfo: function() {
      this.isLoading = true
console.log(this.userToken)
      var data = []
      this.axios.post('/game/all', {
        'user_token': this.userToken
      })
        .then(res => {
          this.isLoading = false
          if (res.data.code === 200) {
            console.log(res.data)
            this.tableData = res.data.data
          } else {
            console.log(res.data.msg)
          }
        })
    },
    // 修改游戏名
    modifyGame: function(index) {
      this.modifyDialogVisible = true
      this.modifyId = index
    },
    // 删除游戏
    deleteGame: function(index) {
      this.dialogVisible = true
      this.deleteId = index
    },
    //网络请求删除游戏
    innerDeleteGame: function() {
      this.dialogVisible = false
      this.axios.post('/game/delete', {
        'id': this.deleteId,
        'user_token': this.userToken
      })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: '删除成功',
              type: 'success'
            })
            this.getInfo()
          }
        }).catch(res => {
        })
    },
    //网络请求修改游戏
    innerModifyGame: function() {
      this.modifyDialogVisible = false
      this.axios.post('/game/modify', {
        'id': this.modifyId,
        'game_name': this.gameName,
        'user_token': this.userToken
      })
        .then(res => {
          if (res.data.code === 200) {
            this.$message({
              message: '修改成功',
              type: 'success'
            })
            this.getInfo()
          }
        }).catch(res => {
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  width: 100%;
  height: 100%;
}

.table {
  width: 100%;
  margin-top: 10px;
}

.name-input {
  margin-top: 10px;
}
</style>
