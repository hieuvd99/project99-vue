<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
            <br/><br/><br/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/learns/blog/common/SidebarBlog.vue'

export default {
    name: 'home',

    components: {
        Sidebar
    }
}
</script>

<style scoped>
.dashboard {
    display: flex;
    margin-top: 55px;
    width: 100vw;
}

.content {
    width: 100%;
    background-color: #fff;
    margin-left: 250px;
}
</style>