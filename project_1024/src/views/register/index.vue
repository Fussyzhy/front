<template>
   <div class="body">
    <div class="window">
      <div style="display: inline-block;">
        <p style="font-size: 40px; margin: 10px 10px 0px; color: #3460d8;">使用Gitgle</p>
        <p style="font-size: 40px; margin: 0px 10px 80px; color: #3460d8;">查看开发者信息</p>
        <div style="text-align: left;">
          <p style="font-size: 30px; margin: 0px 10px 60px; color: #5a6373;">
          <van-icon name="user-circle-o"  color="#3460d8"/>
          注册您的昵称并设置您的个人资料
        </p>
        <p style="font-size: 30px; margin: 0px 10px 60px; color: #5a6373;">
          <van-icon name="search"  color="#3460d8"/>
          精准查找你所需要了解的开发者
        </p>
        <p style="font-size: 30px; margin: 0px 10px 60px; color: #5a6373;">
          <van-icon name="like-o"  color="#3460d8"/>
          关注您最喜欢的开发者信息
        </p>
        <p style="font-size: 30px; margin: 0px 10px 60px; color: #5a6373;">
          <van-icon name="chart-trending-o"  color="#3460d8"/>
          图标数据分析更加详细
        </p>
        </div>

      </div>
      <div style="display: inline-block; width: 300px;">

      </div>
      <div style="display: inline-block;">
        <p style="font-size: 60px; margin: 120px 0px 80px; color: #5a6373;">欢迎回来</p>
        <div class="username">
          <van-icon name="user-circle-o"  size="35px" style="position:absolute; left: 10px; top: 10px;"/>
          <input type="text" placeholder="请输入用户名或邮箱">
        </div><br>
        <div class="username">
          <van-icon :name="showPass"  size="35px" style="position:absolute; left: 10px; top: 10px;" @click="changePass"/>
          <input :type="type" placeholder="请输入密码">
        </div><br>
        <div style="margin-top: 90px;"></div>
        <van-button type="primary" color="#5098d5" round="true" style="width: 500px; font-size: 25px; height: 50px;">登录</van-button>
        <div style="margin-top: 10px;"></div><br>
        <div class="bottom">已有账号？<a @click="$router.push('/login')">登录</a></div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'registerIndex',
  data () {
    return {
      showPass: 'closed-eye',
      type: 'password'
    }
  },
  methods: {
    changePass () {
      if (this.showPass === 'eye-o') {
        this.showPass = 'closed-eye'
        this.type = 'password'
      } else {
        this.showPass = 'eye-o'
        this.type = 'text'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.body {
    width: 100%;
    min-height: 100vh;
    background-color: #646464;
    padding: 170px;
  }

  .window {
    width: 1500px;
    height: 800px;
    background-color: #f5f5f5;
    margin: auto;
    border-radius: 40px;
    text-align: center;
    padding: 1px;
    box-shadow: 20px 20px 100px rgb(44, 42, 42);

  }

  .username{
    width: 490px;
    height: 50px;
    margin: 10px auto;
    border: 0px;
    border-radius: 50px;
    background-color: #fff;

    position:relative;
  }

  .window input {
    width: 380px;
    height: 50px;
    font-size: 30px;
    border:0px;

    outline: none;
  }
  .bottom {
    font-weight: bolder;
    font-size: 17px;
  }

  .body a{
    color: #3460d8;
  }

  .body a:hover{
    color: #5098d5;
  }
</style>
