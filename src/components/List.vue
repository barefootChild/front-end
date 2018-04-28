<template>
  <div class="list_container">
    <el-table
      :data="tableData"
      :header-cell-style="{ textAlign: 'center' }"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180">
      </el-table-column>
      <el-table-column
        prop="height"
        label="身高">
      </el-table-column>
      <el-table-column
        prop="weight"
        label="体重">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别">
      </el-table-column>
      <el-table-column
        prop="timestamp"
        label="时间戳">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      tableData: []
    }
  },
  created () {
    axios.get('http://localhost:3001/list').then(res => {
      if (res.data.code === 1) {
        this.tableData = res.data.data
      }
    })
  }
}
</script>
