<template>
  <div style="width:100%;height:100%;">

    <el-button type="primary" v-on:click="addGame">创建游戏</el-button>
    <template>
    <el-table v-loading="isLoading" border :data="tableData"  height="700" style="width: 100%;margin-top:10px;"  >
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
      <el-table-column label="操作" fixed="right" width="250" >
        <template slot-scope="scope">
          <el-button type="primary" @click.native.prevent="modifyGame(scope.row.gid)">修改</el-button>
          <el-button type="danger" @click.native.prevent="deleteGame(row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
</template>
  </div>
</template>

<script>
export default {
  data() {
    console.log('data')
    return {
      tableData: [],
      isLoading: false
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
            'game_name': value
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
      console.log(this.$route.params.userToken)
      var data = []
      this.axios.post('/game/all', {
        'user_token': window.localStorage.getItem('userToken')
      })
        .then(res => {
          this.isLoading = false
          if (res.data.code === 200) {
              console.log( res.data)
            this.tableData = res.data.data
          } else {
            console.log(res.data.msg)
          }
        })
    },
    // 修改游戏名
    modifyGame:function(index){
        console.log(index)
    },
    // 删除游戏
    deleteGame:function(index){

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
