<template>
  <div>
    <nav class="navbar navbar-expand navbar-dark bg-dark header">
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <div class="current-time-area">
            <font-awesome-icon icon="clock"/><span id="current-time">{{currentTime}}</span>
          </div>
        </li>
      </div>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link img-logo">
            <img src="@/assets/image/common/logo/logo.png" title="Home">
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/learn" class="nav-link">
            <font-awesome-icon icon="book-open" /> Learn
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ml-auto user-handle">
        <li v-if="showAdminBoard" class="nav-item">
          <router-link to="/admin" class="nav-link">Admin Board</router-link>
        </li>

        <div v-if="!currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/register" class="nav-link">
              <font-awesome-icon icon="user-plus" /> Sign Up
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link">
              <font-awesome-icon icon="sign-in-alt" /> Login
            </router-link>
          </li>
        </div>

        <div v-if="currentUser" class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/profile" class="nav-link">
              <font-awesome-icon icon="user" />
              {{ currentUser.username }}
            </router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click.prevent="logOut">
              <font-awesome-icon icon="sign-out-alt" /> LogOut
            </a>
          </li>
        </div>
      </div>
    </nav>

    <div class="content-router-app">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: new Date().toLocaleTimeString()
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  },
  created() {
    setInterval(() => {
      this.currentTime = new Date().toLocaleTimeString();
    }, 1000);

  }
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.footer {
  background-color: #000;
}
.copyright {
  color: #fff;
}
.content-router-app {
  margin-top: 55px;
}
.current-time-area {
  color: rgba(255, 255, 255, 0.55);
  font-size: 22px;
  padding: 0 10px;
}
.current-time-area span {
  padding-left: 10px;
}
.user-handle {
  justify-content: flex-end;
  flex-grow: 1;
}
.nav-link.img-logo {
  padding: 0;
}
.nav-link.img-logo img {
  height: 40px;
}
</style>