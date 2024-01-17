<template>
    <div class="container-course">
      <div class="content">
        <li>
          <router-link to="/learn/blog">
            <img class="image-course" src="@/assets/image/learns/blog/blog.png">
            <p class="text-course">Blog</p>
          </router-link>
        </li>
        <li>
          <router-link to="/learn/java">
            <img class="image-course" src="@/assets/image/learns/java/java.png">
            <p class="text-course">Java</p>
          </router-link>
        </li>
        <li>
          <router-link to="/learn/spring" >
            <img class="image-course" src="@/assets/image/learns/spring/spring.png">
            <p class="text-course">Spring</p>
          </router-link>
        </li>
        <li>
          <router-link to="/learn/vuejs">
            <img class="image-course" src="@/assets/image/learns/vuejs/vuejs.png">
            <p class="text-course">VueJS</p>
          </router-link>
        </li>
      </div>
      <div class="content">
        <li>
          <router-link to="/learn/sql">
            <img class="image-course" src="@/assets/image/learns/sql/sql.png">
            <p class="text-course">SQL</p>
          </router-link>
        </li>
      </div>
    </div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
.container-course {
  max-width: 1201px;
  padding-top: 20px;
  margin: auto;
}
li {
  display: block;
  width: 25%;
  margin: 0 10px;
}
a {
  text-decoration: none;
}
.container-course .content {
  display: flex;
}
.container-course .image-course {
  width: 100%;
  aspect-ratio: 1 / 0.8;
}
.container-course .text-course {
  text-align: center;
  margin-top: 10px;
  color: #000;
  font-weight: 600;
  font-size: 20px;
}
</style>
  