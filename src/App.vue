<template>
  <div id="app">
    <el-container>
      <el-header><head-top></head-top></el-header>
      <el-container>
        <el-aside width="65px">
          <sider-bar></sider-bar>
        </el-aside>
        <el-container>
          <el-main>
            <router-view />
          </el-main>
        </el-container>
      </el-container>
      <el-footer><foot></foot></el-footer>
    </el-container>
  </div>
</template>

<script>
import HeadTop from './components/HeadTop'
import SiderBar from './components/SiderBar'
import Foot from './components/Foot'
export default {
  name: 'App',
  components: {
    HeadTop,
    SiderBar,
    Foot
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
  line-height: 60px;
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
  height: calc(100vh - 120px);
  overflow-y: auto;
}
</style>
