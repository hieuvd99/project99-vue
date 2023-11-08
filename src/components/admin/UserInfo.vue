<template>
    <div>
    <h2>Update User</h2>
    <form @submit.prevent="onUserUpdate">  
        <div class="form-row"> 
            <div class="form-group ">
                <label for="firstName" class="control-label" col-lg-6>User Name</label>        
                <input type=text class="form-control" v-model="userInfo.username"> 
            </div>
            <div class="form-group">
                <label>Email</label>
                <input type=email class="form-control" v-model="userInfo.email">
            </div>
            <div class="form-group">
                <label>City</label>
                <input type=text class="form-control" v-model="userInfo.city">
            </div>
            <div class="form-group">
                <label>Country</label>
                <input type=text class="form-control" v-model="userInfo.country">
            </div>
            <div class="form-group">
                <label>ROLE</label>
                <select class="form-control" v-model="userInfo.role">
                    <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                    <option value="ROLE_USER">ROLE_USER</option>
                </select>
            </div>    
        
            <button type="submit" class="mt-3">Update</button>
        </div>
    </form>
    <div v-if="message">
        {{ message }}
    </div>
    </div>
</template>

<script>
import AdminService from "@/services/admin.service";

export default {
    data() {
        return {           
            id: '',            
            userInfo: {},
            message: "",
        };
    }, 
    methods: {
        onUserUpdate() {
            AdminService.updateUser(this.userInfo).then(
                (response) => {
                    this.message = response.data.message;
                }
            );
        }
    },
    created() {
        this.id = this.$route.params.id
        AdminService.getUserById(this.id).then(
            (response) => {
                this.userInfo = response.data
            }
        );
    }
}

</script>

<style scoped>
.control-label{
text-align: left !important;
}
</style>