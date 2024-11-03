<template>
  <div>

    <div class="changelogin">
      <p>换绑Github用户</p>
      <input placeholder="请输入换绑的Github用户名" type="text" v-model="changegit"><br>
      <button @click="handlelogin">确认换绑</button>
    </div>

    <div class="changepass">
      <p>修改密码</p>
      <input placeholder="输入旧密码" type="text" v-model="oldpass"><br>
      <input placeholder="输入新密码" type="text" v-model="newpass"><br>
      <input placeholder="确认新密码" type="text" v-model="newrepass"><br>
      <button @click="handlepass">确认修改</button>
    </div>

    <br>

    <div class="exit">
      <button @click="handleExit">退出登录</button>
    </div>

  </div>
</template>

<script>
import { changePassword, getUserinfomation, userexit } from '@/api/login'
import { changegitlogin } from '@/api/user'

export default {
  name: 'EditInfo',
  data () {
    return {
      changegit: '',
      oldpass: '',
      newpass: '',
      newrepass: '',
      personData: []
    }
  },
  methods: {
    async handlelogin () {
      if (this.changegit !== '') {
        const res = await changegitlogin(this.changegit, this.personData.email, this.personData.email)
        console.log(res)
        if (res.code === 200) {
          this.$router.push('/perhome')
          location.reload()
        }
      }
    },
    async handlepass () {
      if (this.newpass === this.newrepass) {
        if (this.oldpass !== '' && this.newpass !== '' && this.newrepass !== '') {
          const res = await changePassword(this.oldpass, this.newpass)
          console.log(res)
          if (res.code === 200) {
            this.handleExit()
            await localStorage.removeItem('Gitgle_UserInfo')
            this.$router.push('/')
            location.reload()
          }
        }
      }
    },
    async handleExit () {
      await userexit()
      await localStorage.removeItem('Gitgle_UserInfo')

      this.$router.push('/home')
      location.reload()
    }
  },
  async created () {
    const res = await getUserinfomation()
    console.log(res)
    this.personData = res.data
  }
}
</script>

<style lang="less" scoped>

  .changelogin {
    padding-top: 1px;
    background-color: #fff;
    text-align: center;
    width: 800px;
    margin: 80px auto;
    height: 350px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

  }

  .changelogin p {
    margin: 50px;
    font-size: 40px;
    color: #7a7b8c;
  }

  .changelogin input {
    height: 40px;
    width: 300px;
    margin: 0px 0px 50px;
    padding: 0px 20px;
    border-radius: 20px;
  }

  .changelogin button {
    height: 40px;
    width: 200px;
    border-radius: 20px;
    border: 0px;
    background-color: #3460d8;
    font-weight: bold;
    color: #fff;
    transition: 0.5s ease;
  }

  .changelogin button:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .changepass {
    padding-top: 1px;
    background-color: #fff;
    text-align: center;
    width: 800px;
    margin: auto;
    height: 550px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .changepass p {
    margin: 50px;
    font-size: 40px;
    color: #7a7b8c;
  }

  .changepass input {
    height: 40px;
    width: 300px;
    margin: 0px 0px 50px;
    padding: 0px 20px;
    border-radius: 20px;
  }

  .changepass button {
    height: 40px;
    width: 200px;
    border-radius: 20px;
    border: 0px;
    background-color: #3460d8;
    font-weight: bold;
    color: #fff;
    transition: 0.5s ease;
  }

  .changepass button:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .exit {
    padding-top: 1px;
    // background-color: #fff;
    text-align: center;
    width: 800px;
    margin: 80px auto;
    border-radius: 30px;
  }

  .exit button {
    height: 60px;
    width: 400px;
    border-radius: 20px;
    border: 0px;
    background-color: #3460d8;
    font-weight: bold;
    font-size: 20px;
    color: #fff;
    transition: 0.5s ease;
  }

  .exit button:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

</style>
