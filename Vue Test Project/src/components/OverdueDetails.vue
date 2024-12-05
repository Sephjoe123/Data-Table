<script setup>
import { useUserStore } from '@/stores/userStore';
const storeData = useUserStore();
const userStore = storeData.users
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>DATE</th>
        <th>USER ACTIVITY</th>
        <th>DETAIL</th>
      </tr>
    </thead>
    <tbody>
   
      <template v-for="user in userStore" :key="user.id">
         <tr v-if="user.overdueDetails ">
          <td>{{ user.overdueDetails[0].date }}</td>
          <td>{{ user.overdueDetails[0].activity }}</td>
          <td>{{ user.overdueDetails[0].details }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<style scoped>
table {

  background-color: #F4F2FF;
  font-family: Arial, sans-serif;
   width: 100%;
   font-size: 0.9rem;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  color: #6E6893;
 
}
tr{
    border: 1px solid #e5e4e9;
    background-color: #F4F2FF; 
     
}

</style>


