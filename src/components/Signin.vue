<template>
  <el-main>
    <h1>登录</h1>
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm2.username" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')" :loading="isLoading">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
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
        callback()
      }
    }
    return {
      isLoading: false,
      ruleForm2: {
        password: '',
        username: ''
      },
      rules2: {
        password: [{ validator: validatePass, trigger: 'blur' }],
        username: [{ validator: checkUsername, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm(formName) {
      let that = this
      this.$refs[formName].validate(valid => {
        if (valid) {
          that.$http
            .post('http://localhost:3100/signin', {
              username: that.ruleForm2.username,
              password: that.ruleForm2.password
            })
            .then(response => {
              switch (response.data.status) {
                case 0:
                  that.$message(response.data.msg)
                  break
                case 1:
                  console.log(response.data.data)
                  that.ImConnect(
                    response.data.data.token,
                    that.ruleForm2.username
                  )
                  that.$message(response.data.msg)
                  that.$router.push({
                    path: `/index/${that.ruleForm2.username}`
                  })
                  break
                case 2:
                  that.$message(response.data.msg)
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
    },
    ImConnect(token, userId) {
      let that = this
      that.$RongIMLib.RongIMClient.init(that.$AppKey)
      that.$RongIMClient.getInstance().hasRemoteUnreadMessages(token, {
        onSuccess(hasMessage) {
          if (hasMessage) {
            console.log(hasMessage)
          } else {
            // 没有未读的消息
            console.log('没有')
          }
        },
        onError(err) {
          // 错误处理...
          console.log(err)
        }
      })
      that.$RongIMClient.connect(token, {
        onSuccess(userId) {
          console.log('connect successfully.' + userId)
        },
        onTokenIncorrect() {
          console.log('无效token')
        },
        onError(errorCode) {
          let info = ''
          switch (errorCode) {
            case that.$RongIMLib.ErrorCode.TIMEOUT:
              info = '超时'
              break
            case that.$RongIMLib.ErrorCode.UNKNOWN_ERROR:
              info = '未知错误'
              break
            case that.$RongIMLib.ErrorCode.UNACCEPTABLE_PaROTOCOL_VERSION:
              info = '不可接受的协议版本'
              break
            case that.$RongIMLib.ErrorCode.IDENTIFIER_REJECTED:
              info = 'appkey不正确'
              break
            case that.$RongIMLib.ErrorCode.SERVER_UNAVAILABLE:
              info = '服务器不可用'
              break
          }
          console.log(errorCode)
        }
      })
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


