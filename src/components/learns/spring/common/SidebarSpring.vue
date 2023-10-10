<template>
    <div class="sidebar">
        <div class="title">
            <router-link to="/learn/spring">Spring</router-link>
        </div>
        <div class="menu-items">
            <router-link to="/learn/spring/modules" active-class="active"  exact class="side-btn">
                <div class="link-container">Modules</div>
            </router-link>
            <router-link to="/learn/spring/mvc" active-class="active" exact class="side-btn">
                <div class="link-container">MVC</div>
            </router-link>
            <router-link to="/learn/spring/annotation" active-class="active" exact class="side-btn">
                <div class="link-container">Annotation</div>
            </router-link>
            <router-link to="/learn/spring/spring-jpa" active-class="active" exact class="side-btn">
                <div class="link-container">Spring JPA</div>
            </router-link>
            <router-link to="/learn/spring/relationship" active-class="active" exact class="side-btn">
                <div class="link-container">Relationship</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.sidebar {
    position: fixed;
    height: 100vh;
    width: 250px;
    background: linear-gradient(to bottom, #1a1a1a 0%, #373d52 100%);
}
.title {
    color: white;
    font-size: 24px;
    margin-top: 10px;
    text-align: center;
}
.menu-items {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
}
.side-btn {
    border: none;
    padding: 10px 0px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    color: white;
    background-color: transparent;
    text-decoration: none;
}
.side-btn:focus {
    outline: none;
}
.side-btn.active {
    position: relative;
    background-color: #fff;
    color: #000;
    font-weight: 600;
}
.side-btn.active::before {
    top: -30px;
}
.side-btn.active::after {
    bottom: -30px;
}
.side-btn .link-container {
    padding-left: 10px;
}
.side-btn.active .link-container::before {
    top: -60px;
}
.side-btn.active .link-container::after {
    bottom: -60px;
    z-index: 99;
}

</style>