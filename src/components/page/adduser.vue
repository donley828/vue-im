<template>
  <section>
    <h1><i class="el-icon-back" @click="back"> 返回</i>添加好友</h1>
    <div class="demo-input-suffix">
      <el-input placeholder="请输入对方用户名" prefix-icon="el-icon-search" v-model="username" @change="fetchFriends"></el-input>
      <ul class="result-friend" v-loading="loading">
        <h2 v-show="isHaveUser">无此用户...</h2>
        <li v-for="(item, index) in friendLists">
          <img src="https://avatars1.githubusercontent.com/u/19424162?s=400&u=298843c1bade0f1b8fbfeb4222d60c9e769db4b6&v=4" alt="头像">
          <span>{{ item.username }}</span>
          <el-button size="mini" type="primary" round>加为好友</el-button>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      friendLists: [],
      loading: false
    }
  },
  methods: {
    back() {
      this.$router.go(-1)
    },
    fetchFriends() {
      let that = this
      this.friendLists = []
      this.loading = true
      this.$http
        .post('http://localhost:3100/user/searchUser', {
          username: that.username
        })
        .then(response => {
          setTimeout(() => {
            that.loading = false
            let data = response.data.data
            for (let i = 0; i < data.length; i++) that.friendLists.push(data[i])
          }, 1000)
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  computed: {
    isHaveUser() {
      if (this.friendLists.length > 0) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
<style scoped>
section {
  background-color: #f9fbfd;
}
h1 {
  text-align: center;
  height: 50px;
  background-color: #202225;
  color: #ffffff;
  line-height: 50px;
  font-weight: normal;
}
h1 > i {
  float: left;
  height: 50px;
  line-height: 50px;
  margin-left: 10px;
  font-size: 20px;
  cursor: pointer;
}
h2 {
  color: #8b8e93;
  font-weight: normal;
  text-align: center;
}
.demo-input-suffix {
  padding: 20px;
}
.result-friend {
  list-style-type: none;
  margin-top: 20px;
}
.result-friend li {
  margin-top: 10px;
  cursor: pointer;
}
.result-friend > li:hover {
  background-color: #ffffff;
}
.result-friend img {
  width: 80px;
  height: 80px;
  vertical-align: middle;
  border-radius: 40px;
}
.result-friend span {
  font-size: 25px;
  margin-left: 10px;
}
.result-friend button {
  margin-left: 50px;
}
</style>


