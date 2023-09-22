<template>
    <div>
        <div class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/learn/spring" class="nav-link">
              <font-awesome-icon icon="home" /> Spring
            </router-link>
          </li>

          <div class="w3-sidebar w3-collapse" id="sidenav">
            <div id="leftmenuinner">
              <div id="leftmenuinnerinner">
                <h2 class="left"><span class="left_h2">Spring</span> Tutorial</h2>
                <a target="_top" href="/learn/spring/home">SPRING HOME</a>
              </div>
            </div>
          </div>

          <div class="w3-main w3-light-grey" id="belowtopnav" style="margin-left:220px;">
            <div class="w3-row w3-white">
              <router-view name="springHome" />
            </div>
          </div>

      </div>
    </div>
</template>
  
<script>


export default {
  computed: {
    isValid () {
      if (this.$route.fullPath.indexOf("/learn/spring") != -1 ) {
        console.log("A");
      }
      return false
    }
  }


}

</script>
  
<style scoped>
.w3-sidebar {
  /* height: 100%; */
  width: 200px;
  background-color: #fff;
  position: fixed!important;
  z-index: 1;
  overflow: auto;
}
#leftmenuinner {
  margin-top: 87px;
  position: fixed;
  top: 0;
  padding-bottom: 0;
  height: 100%;
  width: 220px;
  background-color: transparent;
}
#leftmenuinnerinner {
  height: 100%;
  width: 100%;
  background-color: #E7E9EB;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 20px;
}
#sidenav h2 {
  font-size: 21px;
  padding-left: 16px;
  margin: -4px 0 4px 0;
  width: 204px;
}
#sidenav a {
  font-family: "Segoe UI",Arial,sans-serif;
  text-decoration: none;
  display: block;
  padding: 2px 1px 1px 16px;
}
#sidenav a.active {
  background-color: #04AA6D!important;
  color: #ffffff!important;
}
</style>
  