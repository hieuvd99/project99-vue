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
import Sidebar from '@/components/admin/SidebarAdmin.vue'
  
  export default {
    name: "Admin",
    components: {
        Sidebar
    }
  }
  </script>

<style>
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
  