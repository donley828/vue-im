<template>
  <el-main>
    <h1>注册账号</h1>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm2.username"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="name">
        <el-input v-model="ruleForm2.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>

  </el-main>
</template>
<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('昵称不能为空'))
      } else {
        callback()
      }
    }
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
        username: '',
        name: ''
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: 'blur', required: true }],
        checkPass: [
          { validator: validatePass2, trigger: 'blur', required: true }
        ],
        username: [
          { validator: checkUsername, trigger: 'blur', required: true }
        ],
        name: [{ validator: checkName, trigger: 'blur', required: true }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      let that = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$http
            .post('http://localhost:3100/signup', {
              username: that.ruleForm2.username,
              name: that.ruleForm2.name,
              password: that.ruleForm2.pass
            })
            .then(response => {
              switch (response.data.status) {
                case 1:
                  that.$message(response.data.msg)
                  break
                case 2:
                  that.$message(response.data.msg)
                  setTimeout(() => {
                    that.$router.push('/Signin')
                  }, 500)
                  break
                case 3:
                  that.$message(response.data.msg)
                  break
                default:
                  that.$message('未知错误!')
              }
            })
            .catch(error => {
              console.log(error)
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
.el-form {
  margin-top: 20px;
}
.el-main {
  flex: 0.4;
  background-color: #edf2fc;
  border-radius: 10px;
}
@media screen and (max-width: 600px) {
  .el-main {
    flex: 1;
  }
}
</style>


