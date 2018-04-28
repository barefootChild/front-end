<template>
  <div class="root_page">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="身高" prop="height">
        <el-input v-model="ruleForm.height"></el-input>
      </el-form-item>
      <el-form-item label="体重" prop="weight">
        <el-input v-model="ruleForm.weight"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="sex">
        <el-radio-group v-model="ruleForm.sex">
          <el-radio label="male"></el-radio>
          <el-radio label="female"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      ruleForm: {
        name: '',
        age: '',
        height: '',
        weight: '',
        sex: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入姓名', trigger: 'change' },
          { min: 3, message: '长度在 3 个字符以上', trigger: 'change' }
        ],
        age: [
          { required: true, message: '请输入年龄', trigger: 'change' }
        ],
        weight: [
          { required: true, message: '请输入体重', trigger: 'change' }
        ],
        height: [
          { required: true, message: '请输入身高', trigger: 'change' }
        ],
        sex: [
          { required: true, message: '请选择性别', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const params = {...this.ruleForm}
          const res = await axios.post('http://localhost:3001/data', params)
          const success = res.data.code === 1
          this.$message({
            message: success ? '提交成功！' : '提交失败！',
            type: success ? 'success' : 'error'
          })
        } else {
          this.$message({
            message: '请检查表单内容！',
            type: 'warning'
          })
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
