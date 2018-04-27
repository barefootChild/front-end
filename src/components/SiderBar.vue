<template>
  <el-menu
    default-active="1"
    :collapse="true"
    :router="true"
    class="el-menu-vertical-demo">
    <el-menu-item index="1" :route="{path: 'main'}">
      <i class="el-icon-setting"></i>
      <span slot="title">录入信息</span>
    </el-menu-item>
    <el-menu-item index="2" :route="{path: 'list'}">
      <i class="el-icon-document"></i>
      <span slot="title">查看信息</span>
    </el-menu-item>
  </el-menu>
</template>
