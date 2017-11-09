<template>
  <el-main>
    <el-form ref="userinfo" :model="userinfo" status-icon :rules="ruleform" class="demo-ruleForm" label-width="80px">
      <el-form-item label="用户名" prop="username" required>
        <el-input v-model="userinfo.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="昵称" prop="nickname">
        <el-input v-model="userinfo.nickname" placeholder="昵称"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input type="password" v-model="userinfo.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPassword" required>
        <el-input type="password" v-model="userinfo.checkPassword" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSignup(userinfo)">提交</el-button>
        <el-button type="" @click="resetForm(userinfo)">重置</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>
<script>
export default {
  data() {
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
        if (this.userinfo.checkPassword !== '') {
          this.$refs.ruleform.validatePass2('checkPassword')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.userinfo.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      userinfo: {
        username: '',
        nickname: '',
        password: '',
        checkPassword: ''
      },
      ruleform: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        password: [{ validator: validatePass, trigger: 'blur' }],
        checkPassword: [{ validator: validatePass2, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitSignup(formName) {
      let _this = this
      let options = {
        username: formName.username,
        password: formName.password,
        nickname: formName.nickname,
        appKey: this.$WebIM.config.appkey,
        success: function() {
          _this.$message('注册成功！')
        },
        error: function(err) {
          console.log(err)
        },
        apiUrl: this.$WebIM.config.apiURL
      }
      this.$imConn.registerUser(options)
    },
    resetForm(formName) {
      this.userinfo = ''
    }
  }
}
</script>
<style scoped>
.el-main {
  width: 400px;
  background-color: #edf2fc;
  border-radius: 10px;
}
@media screen and (max-width: 600px) {
  .el-main {
    width: 100%;
  }
}
</style>


