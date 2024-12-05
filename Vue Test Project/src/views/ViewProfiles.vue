<script setup>
import { useRoute } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import { RouterLink } from 'vue-router';

const route = useRoute()
const ProfileView = route.params.id
const view = +ProfileView
const storeData = useUserStore()
const users = storeData.users


let user = users.find((item) => item.id === view)

</script>

<template>
 <div v-if = "user" class="Profiles">
     <p> <b> Hello {{user.firstName }} ! </b> </p>
     <h2> Here Are your profile Details :</h2>
     <br>
      <p> <b>Fullname:  </b> {{user.firstName}} {{user.lastName }}</p>
     <p> <b>Email:</b> {{user.email }}</p>
     <p> <b>Payment Status:</b> {{ user.status }}</p>
     <p> <b>User Status:</b> {{ user.userStatus }}</p>
     <p><b>Payment Date:</b> {{user.payDateStatus }}</p>
     <p> <b>Amount Paid:</b> ${{ user.amount }}</p>

      <RouterLink  :to = "'/editUser/' + view">
      <button>
         Edit user
      </button>
      </RouterLink>
     

     </div>

   
</template>

<style scoped>
.description{
   line-height: 1.5rem;
}

.Profiles {
  background-color: #6E6893;
  padding: 30px;
  width: 40%; 
  margin: 10rem auto; 
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  color: #fff; 
  font-weight: bold;
  position: relative;
}
.Profiles p{
   padding: 10px 0;
}
.Profiles h2{
   font-weight: 100;
}
.toggle{
   margin-top: -1rem;
   padding-bottom: 1rem;
   color: #8089ff;
   cursor: pointer;
}

button {
  padding: 11px 13px;
  border-radius: 5px;
  background-color: #fff;
  color: #fff;
  border: none;
  cursor: pointer;
  color: #6E6893;
  position: absolute;
  right: 40px;
  bottom: 30px;
  font-size: 1.05rem;
}
</style>