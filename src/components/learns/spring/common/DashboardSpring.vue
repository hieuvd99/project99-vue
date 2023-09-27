<template>
    <div class="dashboard">
        <Sidebar/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/components/learns/spring/common/SidebarSpring.vue'

export default {
    name: 'home',

    components: {
        Sidebar
    }
}
</script>

<style>
.dashboard {
    display: flex;
    background-color: teal;
    height: calc(100vh - 56px);
    width: 100vw;
}

.content {
    background-color: white;
    width: calc(100% - 250px);
    padding-left: 30px;
}
</style>