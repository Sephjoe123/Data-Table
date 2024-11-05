<script setup>
import { useUserStore } from '@/stores/userStore';
import ViewProfile from './ViewProfile.vue';
import OverdueDetails from './OverdueDetails.vue';
import { computed } from 'vue';

import { ref } from 'vue';

const props = defineProps({
  status: String,
  searchValue: String,
  sortValue: String,
  selectedUsers: Array
});

const storeData = useUserStore();
const activeProfileId = ref(null);
const expandedUserId = ref(null);



const filteredUsers = computed(() => {
  
  let users = storeData.users.filter(user => {
    const matchesStatus =
      props.status === 'all' || user.status === props.status;

    const matchesSearch = props.searchValue
      ? user.firstName.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        user.lastName.toLowerCase().includes(props.searchValue.toLowerCase()) ||
        user.email.toLowerCase().includes(props.searchValue.toLowerCase())
      : true;

    return matchesStatus && matchesSearch;
  });

  
  if (props.sortValue) {
    users = users.sort((a, b) => {
      if(props.sortValue === 'firstname'){
        return a.firstName.localeCompare(b.firstName);
      }
      else if(props.sortValue === 'lastname'){
        return a.lastName.localeCompare(b.lastName)
      }
      else if(props.sortValue === 'dueDate'){
         return new Date(a.dueDate) - new Date(b.dueDate);
      }
      else if(props.sortValue === 'lastLogin'){
        return new Date(a.lastLogin) - new Date(b.lastLogin);
      }
      else if(props.sortValue === 'active'){
        return  a.userStatus === "active" ? -1 : 1;
      }
      else if(props.sortValue === 'inactive'){
        return  a.userStatus === "inactive" ? -1 : 1;
      }
      else{
        return 0;
      }
      
    });
  }

  return users;
});



const openProfile = (userId) => {
  activeProfileId.value = userId
}
const closeProfile = () =>{
  activeProfileId.value = null
}

const toggleDetails = (userId,userStatus) => {
  if (userId && userStatus === 'overdue') {
    expandedUserId.value = expandedUserId.value === userId ? null : userId;
  } else {
    expandedUserId.value = null;
    
  }
};

</script>

<template>
  <tbody v-for="user in filteredUsers" :key="user.id"> 
    <tr>
      
      <th>
        <label for="checkbox">
         <input 
            type="checkbox"
          />
          <span class="custom-checkbox"></span>
        </label>
      </th>

      <th>
        <font-awesome-icon @click = "toggleDetails(user.id,user.status)" :icon="['fas', 'circle-chevron-down']"  class="circle" />
      </th>

      <th class="name">
        {{ user.firstName }} {{ user.lastName }}
        <div class="user-email">
          {{ user.email }}
        </div>
      </th>

      <th class="user-Status">
        <div :class="{ 'active': user.userStatus === 'active', 'inactive': user.userStatus === 'inactive' }">
          {{ user.userStatus }}
        </div>
        <div class="lastLog">
          Last login: {{ user.lastLogin }}
        </div>
      </th>

      <th>
        <div :class="{ 'paid': user.status === 'paid', 'unpaid': user.status === 'unpaid', 'overdue': user.status === 'overdue' }">
          {{ user.status }}
        </div>
        <div class="pay-status">
          Paid On {{ user.payDateStatus }}
        </div>
      </th>

      <th class="amount">
        ${{ user.amount }}
        <div class = "usd">USD</div>
      </th>


      <th id="view">view more</th>

      <th @click="openProfile(user.id)">
        <font-awesome-icon :icon="['fas', 'ellipsis-v']" class="ellipsis" />
      </th>
       
      <div v-if="activeProfileId === user.id" class = "ViewProfile">
        <ViewProfile @closeModal = "closeProfile"/>
      </div>
    
    </tr>

    <tr v-if="expandedUserId === user.id && user.status === 'overdue'">
      <td colspan="10">
        <OverdueDetails :overdueDetails="user.overdueDetails" />
      </td>
    </tr>
  </tbody>

</template>
    

<style scoped>
table {
  width: 100%;
  border-collapse: collapse; 
  margin-top: 1rem;
}

.active, .inactive{
    color: #4A4AFF;
    font-size: 0.7rem;
    width: 2.5rem;
    padding: 2px 8px;
    border-radius: 50px;
    background-color: #c6c2de;
    font-size: 0.7rem;
}
.inactive{
   width: 3rem;
   background-color: #e1e1e6;
   color: #6E6893;
}

.paid, .unpaid, .overdue{
     background-color: #CCFFCC;
     color: #007F00;
     width: 2rem;
     padding: 2px 8px;
     border-radius: 50px;
}
.overdue{
    color: #D30000;
    background-color: #fda8a8;
    width: 3.5rem;
}
.unpaid{
    color:  #965E00;
    background-color:  #FFCC99;
    width: 3rem;
}
.lastLog{
    color: #939296;
    padding-top: 0.5rem;
}
.pay-status{
padding-top: 0.5rem;
}

th {
  padding: 10px 30px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
  
}
 tbody{
  position: relative;
}
tbody th{
  text-transform: capitalize;
  color: #6E6893;
  border-bottom: 1px solid#e5e4e9;
}

input[type = "checkbox"]{
   width: 20px;
   height: 20px;
  
}
#view{
   font-size: 0.7rem;
   text-transform: capitalize;
   position: relative;
   top: 0.2rem;
   
}
.user-email{
 font-size: 0.8rem;
 text-transform: lowercase;
 font-weight: 100;
  color: #6E6893; 
}
th{
    position: relative;
}
.amount{
    position: relative;
    left: 1.5rem;
    color: #000;
    font-size: 0.9rem;
    font-weight: bold;
}
.amount > div{
    margin-left: 0.4rem;
}
.usd{
  font-weight: 100;
}
.circle{
  font-size: 0.9rem;
  color: #939296;
  cursor: pointer;
  
}
.ellipsis{
  font-size: 1rem;
  color: #6E6893;
  cursor: pointer;
}
.ellipsis:hover{
  transform: scale(1.03);
  transition: all ease-in-out .2s;
}
.name{
    font-weight: bold;
    color: #000;
}
.user-Status{
width: 25%;
}
.ViewProfile{
  position: absolute;
  top: 10%; 
  right: -100px;
  z-index: 1000;
  padding: 0 20px;
}
</style>