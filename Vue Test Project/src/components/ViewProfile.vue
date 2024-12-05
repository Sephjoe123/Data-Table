<script setup>
import { RouterLink } from 'vue-router';
import { useUserStore } from '@/stores/userStore';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';


defineEmits(['closeModal']);

const { viewId } = defineProps({
  viewId: {
    type: Number,
    required: true,
  },
});

const storeData = useUserStore().users

const activateUser =  useUserStore().activateUser

let index = storeData.findIndex(item => item.id === viewId)

const deleteUser = () => {
storeData.splice(index,1)
const toast = useToast()
toast.success('User Removed Successfully');
};



</script>


<template>

<div  class="manageProfile" >
    
    <div class="cancel">
        <p v-bind:style="{'cursor': 'pointer'}" @click = "$emit('closeModal')">
          x
        </p>
       
    </div>
    <ul>
        <RouterLink :to = "'/editUser/' + viewId">
          <li>
         Edit  
        </li>
        </RouterLink>
        

        <RouterLink :to = "'/viewProfiles/' + viewId">
        <li>
         View Profile
        </li>
          </RouterLink>

        <li @click = "activateUser(viewId)" v-bind:style="{'color': '#007F00','padding-bottom': '0.5rem'}">
         Activate User
        </li>
        <hr>
        <li @click = "deleteUser" v-bind:style="{'color': '#D30000'}">
          Delete
        </li>
    </ul>
</div>
</template>

<style scoped>
.manageProfile{
    background-color: #fff;
    width: 120px;
    padding: 5px 10px;
    margin-left: 1rem;
    position: relative;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
}
ul li{
    list-style: none;
    padding: 3px;
    font-size: 0.9rem
}
ul li:hover{
    background-color: #F4F2FF;
}
hr{
width: 70%;
}
.cancel{
    background-color: #fff;
    position: absolute;
    left: 90%;
    top: -1rem;
    width: 5px;
    padding: 0 10px;
    border-radius: 50%;
    box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1);
}
.cancel p{
    font-size: 0.9rem;
}
</style>