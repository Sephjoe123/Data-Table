<script setup>
import { useUserStore } from '@/stores/userStore';
import router from '@/router';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import {onMounted, reactive, ref } from 'vue';


const storeData = useUserStore().users

const userIds = ref([])

onMounted(() =>{
userIds.value = storeData.map(user => user.id) 

});

const form = reactive({
firstname: "",
lastname: "",
email: "",
userStatus: "",
paymentStatus: "",
amount: "",
})

const addUser = () =>{
const newId = userIds.value.length ? Math.max(...userIds.value) + 1 : 1;

const newUserInfo = {
id: newId,
firstName: form.firstname,
lastName: form.lastname,
email: form.email,
userStatus: form.userStatus,
status: form.paymentStatus,
amount: form.amount,
payDateStatus: form.payDateStatus,
 lastLogin: "14/APR/2024",
 payDateStatus: "15/APR/2024",
 selected: false,
}
storeData.push(newUserInfo)
const toast = useToast()
toast.success('User Created Successfully')
router.push(`/viewProfiles/${newUserInfo.id}`)


}

</script>


<template>
<section class = "first">
<div class="container flex">
<form @submit.prevent = "addUser">
            <h2>Create New User</h2>

            <div>
              <label class="labels"
                >FirstName </label
              >
              <input
                v-model = "form.firstname"
                type="text"
                name="name"
                placeholder="firstName"
                required
              />
            </div>
            <div>
              <label class="labels"
                >LastName </label
              >
              <input
                v-model = "form.lastname"
                type="text"
                name="name"
                placeholder="lastName"
                required
              />
            </div>

             <div class="">
              <label for="company" class="labels"
                >Email</label
              >
              <input
                v-model = "form.email"
                type="email"
                id="company"
                name="company"
                class=""
                placeholder="Email"
              />
            </div>

             <div>
              <label for="type" class="labels"
                >User Status</label
                   >
              <select
                v-model = "form.userStatus"
                id="type"
                name="type"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>

             <div>
              <label for="type" class="labels"
                >Payment Status</label
                   >
              <select
                v-model = "form.paymentStatus"
                id="type"
                name="type"
                required
              >
                <option value="paid">Paid</option>
                <option value="unpaid">Unpaid</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>


            <div>
              <label class="labels">
                Amount
              </label>
              <input
                 v-model = "form.amount"
                type="number"
                id="location"
                name="location"
        
                placeholder="Amount"
                required
              />
            </div>


            <div>
              <button
                class=""
                type="submit"
              >
                Submit Details
              </button>
            </div>
          </form>
           </div>
          </section>
         
</template>

<style scoped>
.first{
   background-color: rgb(241, 239, 239);
}
h2{
   text-align: center;
   padding: 15px 0;
   font-size: 1.5rem;
}
h3{
   padding-bottom: 1rem;
}
::placeholder{
   font-family: poppins;
   font-size: 1rem;
}
.container {
  font-family: 'poppins';
  color: #000;  
  padding: 150px 0;
}
label{
   font-weight: bold;
   font-size: 1.15rem;
}
select{
  font-size: 1.1rem;
}


form {
  width: 35%;  
  padding: 20px;
  border-radius: 10px; 
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); 
  background-color: #fff; 
}

.labels {
  display: block;
  margin-bottom: 8px;
}

input, select {
  width: 100%;  
  padding: 15px;
  margin-bottom: 15px;  
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;  
  outline: none;
  font-size: 1rem;
  font-family: 'poppins'
}

button {
  padding: 15px 30px;
  background-color: #6E6893;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  display: block;
  margin: auto;
  width: 40%;
  font-size: 1.2rem;
  margin-top: 1rem;
}

button:hover {
  background-color: #6E6893; 
}



</style>