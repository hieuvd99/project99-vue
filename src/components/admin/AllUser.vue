<template>
  <div class="container">
      <h1 class="text-center">ALL USER</h1>
      <div class="form-group">
        <div v-if="message">
          {{ message }}
        </div>
      </div>
      <h5>Số tài khoản: {{pages.totalElements}}</h5>

      <form @submit.prevent="onUserSearch">
        <input type="text"  placeholder="search" v-model="valueSearch">
        <input type="submit" value="Submit">
      </form> 

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
          <tr v-for="user in pages.content" :key="user.id">
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

        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center">
            <!-- First -->
            <li  class="page-item text-primary">
              <a href="/admin/all-user?page=1" v-bind:class="{disable: isDisablePrevious}" class="page-link" style="font-size: 14px;"> First </a>
            </li>
            <!-- Previous -->
            <li  class="page-item text-primary">
              <a v-bind:href="'/admin/all-user?page=' + ((pages.number > 1) ? (pages.number-1) : 1)" v-bind:class="{disable: isDisablePrevious}" class="page-link" style="font-size: 14px;">Previous </a>
            </li>
            <!-- Next -->
            <li class="page-item text-primary">
              <a v-bind:href="'/admin/all-user?page=' + (pages.number+2)" v-bind:class="{disable: isDisableNext}" class="page-link" style="font-size: 14px;">Next </a>
            </li>
            <!-- Last -->
            <li  class="page-item text-primary">
              <a v-bind:href="'/admin/all-user?page=' + ((pages.totalPages > 1) ? (pages.totalPages-1) : 1)" v-bind:class="{disable: isDisableNext}" class="page-link" style="font-size: 14px;">Last </a>
            </li>
          </ul>
        </nav>

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
      pages: [],
      message: "",
      isDisablePrevious: false,
      isDisableNext: false,
      valueSearch: "",
    };
  },
  methods: {
    getUsers(page) {
      AdminService.getAllUser(page).then (
        response => {
          this.pages = response.data;
          if (this.pages.number == 0) {
            this.isDisablePrevious = true;
          }
          if (this.pages.number + 1 == this.pages.totalPages) {
            this.isDisableNext = true;
          }
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
    },
    onUserSearch() {
      AdminService.searchUser(this.valueSearch).then(
          (response) => {
              this.message = response.data.message;
              this.pages = response.data;
              if (this.pages.number == 0) {
                this.isDisablePrevious = true;
              }
              if (this.pages.number + 1 == this.pages.totalPages) {
                this.isDisableNext = true;
              }
          }
      );
    }
  },
  created() {
    var paramPage = 1;
    if (this.$route.query.page != null) {
      paramPage = this.$route.query.page;
    }
    this.getUsers(paramPage - 1)

  }
}

</script>

<style scoped>
.disable {
  background-color: #dee2e6;
  pointer-events: none;
}
</style>


