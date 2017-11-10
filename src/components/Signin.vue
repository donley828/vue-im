<template>
  <el-main>
    <h1>登录</h1>
    <el-form ref="signinForm" :model="signinForm" status-icon :rules="ruleform" label-width="80px">
      <el-form-item label="用户名" prop="username" required>
        <el-input v-model="signinForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" required>
        <el-input type="password" v-model="signinForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitSignin(signinForm)">登录</el-button>
        <el-button type="" @click="resetForm(signinForm)">重置</el-button>
      </el-form-item>
    </el-form>
  </el-main>
</template>
<script>
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名为空'))
      } else {
        callback()
      }
    }
    var checkPassword = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('密码为空'))
      } else {
        callback()
      }
    }
    return {
      signinForm: {
        username: '',
        password: ''
      },
      ruleform: {
        username: [{ validator: checkUsername, trigger: 'blur' }],
        password: [{ validator: checkPassword, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitSignin(formName) {
      let _this = this
      let options = {
        apiUrl: this.$WebIM.config.apiURL,
        user: formName.username,
        pwd: formName.password,
        appKey: this.$WebIM.config.appkey,
        success(token) {
          token = token.access_token
          _this.$WebIM.utils.setCookie('webim_' + formName.username, token, 1)
        },
        error() {}
      }
      this.$imConn.open(options)
    },
    resetForm(formName) {
      this.signinForm = ''
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
  flex: 0.3;
  background-color: #edf2fc;
  border-radius: 10px;
}
@media screen and (max-width: 600px) {
  .el-main {
    flex: 1;
  }
}
</style>


