<template>
  <div>
    <div class="card-grid">
      <div v-for="(item,index) in prodata" :key="index" class="card" @click="$router.push(`/prodetail/${login}/${item.name}`)">
        <div class="name">
          <div class="circle"></div>
          {{ item.name }}
        </div>
        <div class="desc">
          {{ item.description }}
        </div>
        <hr>

        <ul>
          <li>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-star mr-2">
                <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
            </svg>
            {{item.starsCount}} stars
          </li>
          <li>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-repo-forked mr-1">
                <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            {{item.forksCount}} forks
          </li>
          <li>
            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-eye mr-2">
                <path d="M8 2c1.981 0 3.671.992 4.933 2.078 1.27 1.091 2.187 2.345 2.637 3.023a1.62 1.62 0 0 1 0 1.798c-.45.678-1.367 1.932-2.637 3.023C11.67 13.008 9.981 14 8 14c-1.981 0-3.671-.992-4.933-2.078C1.797 10.83.88 9.576.43 8.898a1.62 1.62 0 0 1 0-1.798c.45-.677 1.367-1.931 2.637-3.022C4.33 2.992 6.019 2 8 2ZM1.679 7.932a.12.12 0 0 0 0 .136c.411.622 1.241 1.75 2.366 2.717C5.176 11.758 6.527 12.5 8 12.5c1.473 0 2.825-.742 3.955-1.715 1.124-.967 1.954-2.096 2.366-2.717a.12.12 0 0 0 0-.136c-.412-.621-1.242-1.75-2.366-2.717C10.824 4.242 9.473 3.5 8 3.5c-1.473 0-2.825.742-3.955 1.715-1.124.967-1.954 2.096-2.366 2.717ZM8 10a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 10Z"></path>
            </svg>
            {{item.watchersCount}} watching
          </li>
        </ul>

      </div>

    </div>
  </div>
</template>

<script>
import { getUserdetail } from '@/api/user'
import { getUserinfomation } from '@/api/login'
export default {
  name: 'perhomeIndex',
  data () {
    return {
      prodata: [],
      login: ''
    }
  },
  async created () {
    const ress = await getUserinfomation()
    this.login = ress.data.login
    const res = await getUserdetail(this.login)
    this.prodata = res.data.githubReposList
  }
}
</script>

<style lang="less" scoped>

  .circle {
    height: 8px;
    width: 8px;
    background-color: black;
    margin-right: 10px;
    border-radius: 20px;
    background-color: rgb(129, 192, 127);
  }

  .card-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 50px;
  }

  .card-grid .card {
    height: 200px;
    width: 500px;
    background-color: #ffffff;
    margin: 20px 0px;
    border-radius: 30px;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: 0.5s ease;
    position: relative;

  }

  .card-grid .card:hover {
    box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.2);
  }

  .card .name {
    margin: 20px 40px 10px;
    font-size: 20px;
    display: flex;
    width: 85%;
    overflow:hidden ;
    white-space: nowrap;
    align-items: center;
    // background-color: #000;
  }

  .card .name span {
    // margin: 20px 20px;
    padding-top:18px ;
    font-size: 15px;
    float: right;
    color: #9198a1;
  }

  .card ul {
    display: flex;
    color: #9198a1;
    padding: 0px 20px;
    position:absolute;
    top: 160px;
    width: 500px;
    justify-content: space-between;
  }

  ul .pagebtn {
    cursor: pointer;
    transition: 0.5s ease;
  }

  ul .pagebtn:hover {
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  }

  .card .desc {
    padding: 20px;
    color: #9198a1;
    height: 90px;
    overflow: hidden;
  }

  .card .foot {
    margin: 30px 20px 0px;
    display: flex;
    align-items: center;
  }

  .card .foot img {
    height: 30px;
    border-radius: 50px;
    margin: 0px 10px 0px 20px;
  }

  .card .foot span {
    margin: 0px 0px 0px 130px;
    font-size: 15px;
    float: right;
    color: #9198a1;
  }
</style>
