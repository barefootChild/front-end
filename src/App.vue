<template>
  <div id="app">
    <el-container>
      <el-header><top></top></el-header>
      <el-container>
        <el-aside width="120px"></el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <el-footer></el-footer>
    </el-container>
  </div>
</template>

<script>
import Top from './components/Top'
export default {
  name: 'App',
  components: {
    Top
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  min-height: 100vh;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}
</style>
