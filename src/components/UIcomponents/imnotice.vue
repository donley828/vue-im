<template>
  <section class="im-notice">
    <div>
      <el-input class="my-input" prefix-icon="el-icon-search" size="medium" v-model="NoticeSearch" placeholder="请输入"></el-input>
    </div>
    <hr>
    <div class="list-group">
      <ul>
        <li>
          <div class="notice-list-header">新消息<i class="el-icon-arrow-up"></i></div>
          <ul>
            <li><div class="notice-list"><img src="../../assets/noticeIcon.png" alt="Notice Icon">新通知</div></li>
          </ul>
        </li>
        <li>
          <div class="notice-list-header">群组<i class="el-icon-arrow-up"></i></div>
        </li>
        <li>
          <div class="notice-list-header">联系人<i class="el-icon-arrow-up"></i></div>
        </li>
      </ul>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      NoticeSearch: ''
    }
  }
}
</script>
<style scoped>
.im-notice {
  height: 100%;
}
.im-notice > div:first-child {
  padding-left: 10px;
  padding-right: 10px;
}
.my-input {
  background-color: #26272b;
  margin-top: 20px;
}
hr {
  width: 100%;
  height: 2px;
  background-color: #202225;
  margin-top: 20px;
  border: 0;
}
.list-group ul{
  list-style-type: none;
}
.notice-list-header {
  height: 50px;
  background-color: rgba(79,84,92,.6);
  line-height: 50px;
  color: #ffffff;
  padding: 0 10px;
  border-radius: 5px;
}
.notice-list-header i {
  float: right;
  line-height: 50px;
}
.notice-list {
  display: table-cell;
  font-size: 18px;
  padding: 5px 10px;
  cursor: pointer;
  color: #ffffff;
}
.notice-list img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 20px;
}
</style>


