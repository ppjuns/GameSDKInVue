<template>

    <div>
        <el-dropdown>
            <el-button type="primary">
                {{gameName}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="(item,index) in items" :key="index" @click.native="setGameName(item.gameName,item.gid)">{{item.gameName}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-table v-loading="isLoading" border :data="tableData" height="980" class="table">
            <el-table-column prop="pid" label="id" width="100">
            </el-table-column>
            <el-table-column prop="productName" label="商品名" width="150">
            </el-table-column>
            <el-table-column prop="productPrice" label="商品价格（元）" width="150" />
            <el-table-column prop="gameOrderNo" label="游戏内订单号" width="150" />
            <el-table-column prop="payStatus" label="支付状态" :formatter="setColumnPayStatus" align="center" width="100">

            </el-table-column>
            <el-table-column prop="payWay" label="支付方式 " align="center" width="100">
            </el-table-column>
            <el-table-column prop="payTime" label="支付时间 " width="180">
            </el-table-column>
            <el-table-column prop="userId" label="用户id " width="100 ">
            </el-table-column>
            <el-table-column prop="payTradeNo" label="预订单 " width="300 ">
            </el-table-column>
            <el-table-column prop="createTime" label="创建时间 " width="250 ">
            </el-table-column>
        </el-table>
        <el-pagination class="pagination " background layout="prev, pager, next " :page-size="10 " @current-change="handleCurrentChange " :current-page="currentPage " :total="allPage " />
    </div>

</template>

<script>
export default {
    data() {
        return {
            tableData: [],
            gameName: "全部游戏",
            gameId: 0,
            isLoading: false,
            items: [],
            userToken: window.localStorage.getItem("userToken"),
            currentPage: 1,
            allPage: 1
        };
    },
    mounted() {
        this.getGameName();
    },
    methods: {
        setColumnPayStatus: function(row, column) {
            console.log(row[column.property]);
            if (row[column.property] === "0") {
                return "未支付";
            }
            return "已支付";
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            this.getPayById();
        },
        getGameName: function() {
            this.isLoading = true;
            console.log(this.$route.params.userToken);
            var data = [];
            this.axios
                .post("/game/all", {
                    user_token: window.localStorage.getItem("userToken")
                })
                .then(res => {
                    this.isLoading = false;
                    if (res.data.code === 200) {
                        console.log(res.data);
                        this.items = res.data.data;
                        if (res.data.data.length > 0) {
                            this.setGameName(
                                res.data.data[0].gameName,
                                res.data.data[0].gid
                            );
                        }
                    } else {
                        console.log(res.data.msg);
                    }
                });
        },
        setGameName: function(name, gid) {
            console.log(name);
            this.gameName = name;
            this.gameId = gid;
            this.getPayById();
        },
        getPayById: function() {
            this.isLoading = true;
            var data = [];
            this.axios
                .post("/pay/page", {
                    user_token: this.userToken,
                    game_id: this.gameId,
                    page: this.currentPage
                })
                .then(res => {
                    this.isLoading = false;
                    if (res.data.code === 200) {
                        console.log(res.data);
                        this.tableData = res.data.data.list;
                        this.allPage = res.data.data.page * 10;
                    } else {
                        console.log(res.data.msg);
                    }
                });
        }
    }
};
</script>
<style>
.table {
    width: 100%;
    margin-top: 10px;
}

.pagination {
    margin-top: 20px;
}
</style>
