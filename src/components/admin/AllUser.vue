<template>
  <div class="container">
      <h1 class="text-center">ALL USER</h1>
      <div class="form-group">
        <div v-if="message">
          {{ message }}
        </div>
      </div>
      <table class="table table-striped">
        <thead>
            <th>User Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>ROLE</th>
            <th>View/Edit</th>
            <th>Detele</th>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td><router-link :to="'/admin/user/'+ user.id">{{user.id}} </router-link></td> 
            <td>{{user.username}}</td>
            <td>{{user.email}}</td>
            <td>{{user.role}}</td>
            <td>
              <router-link :to="'/admin/user/'+ user.id">
                <button type="button">View/Edit</button>
              </router-link>
            </td>
            <td>
              <button type="button" @click="deleteUser(user.id)">Delete</button>
            </td>
          </tr>
        </tbody>

      </table>
      <br>
  </div>
</template>
<script>
import AdminService from "@/services/admin.service";

export default {
  name:'Employee',
  data() {
    return {
      users: [],
      message: "",
      
     
    };
  },
  methods: {
    getUsers() {
      AdminService.getAllUser().then (
        response => {
          this.users = response.data;
        }
      );
    },
    deleteUser(userId) {
      if(confirm('Are you sure want delete user?')) {
        AdminService.deleteUser(userId).then (
            (response) => {
              this.getUsers();
              this.message = response.data.message;
            }
        );
      }
    }
  },
  created() {
      this.getUsers()
  }
}

</script>



