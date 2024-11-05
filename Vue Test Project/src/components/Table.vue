<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import TableBody from './TableBody.vue';
import PageSort from './PageSort.vue';
import RadioBtn from './RadioBtn.vue';
import SearchInput from './SearchInput.vue';

const showDropdown = ref(false);
const searchValue = ref('');
const sortValue = ref("")

const openDropdown = () => {
  showDropdown.value = true;
};



const handleClickOutside = (event) => {
  const dropdown = document.querySelector('.dropdown');
  if (dropdown && !dropdown.contains(event.target)) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});



const props = defineProps({
  status: {
    type: String,
    required: true,
  },
  searchValue: {
    type: String,
  },
  sortValue: {
    type: String,
  }
});

const searcByInput = (search) => {
  searchValue.value = search;
};

const sortByOptions = (sort) =>{
  sortValue.value = sort;

} 
</script>

<template>
  <section>
    <div class="searchSection">
      <div @click.stop="openDropdown" id="filter">
        <font-awesome-icon :icon="['fas', 'filter']" class="filter-icon" />
        <h4>Filter</h4>
        <div v-if="showDropdown" class="dropdown" @click.stop>
          <RadioBtn @sort = "sortByOptions" />
        </div>
      </div>
      
      <SearchInput @search="searcByInput" />

      <div>
        <button @click="markSelectedAsPaid">PAY DUES</button>
      </div>
    </div>

    <table>
      <thead>
        <tr>
          <th>
            <label for="checkbox">
              <input type="checkbox" />
            </label>
          </th>
          <th></th>
          <th>Name</th>
          <th>User Status</th>
          <th>Payment Status</th>
          <th>Amount</th>
          <th></th>
          <th @click="showDetails">
            <font-awesome-icon :icon="['fas', 'ellipsis-v']" class="ellipsis"/>
          </th>
        </tr>
      </thead>
      <TableBody :status="status" :searchValue="searchValue" :sortValue = "sortValue"  v-model:selectedUsers="selectedUsers"/>
    </table>
    
    <PageSort />
  </section>
</template>

<style scoped>
section {
  max-width: 90%;
  margin-left: 5rem;
  margin-top: 2rem;
  background-color: #fff;
  height: auto;
  padding-top: 2%;
  border: 1px solid #f8f7f7;
  border-radius: 10px;
}
thead {
 background-color: #F4F2FF; 
 width: 100%;
 z-index: -999;
}


h4 {
  font-weight: 200;
}

.searchSection {
  display: flex;
  gap: 5rem;
  position: relative;
  padding: 0 5rem;
}


button {
  padding: 11px 13px;
  border-radius: 5px;
  background-color: #6D5BD0;
  color: #fff;
  position: absolute;
  right: 35px;
  border: none;
  cursor: pointer;
}

button:hover{
  transform: scale(1.03);
  transition: all ease-in-out .2s;
}
table {
  width: 100%;
  border-collapse: collapse; 
  margin-top: 1rem;
  
}
thead th{
  color: #6E6893;
  font-size: 12px;
}
input[type = "checkbox"]{
   width: 20px;
   height: 20px;
   
}

th {
  padding: 10px 30px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 0.75rem;
  text-align: left;
}
#filter{
 width: 50px;
 padding: 5px 30px;
 padding-left: 20px;
 border: 1px solid #c7c4da;
 border-radius: 5px;
 display: flex;
 gap: 0.5rem;
 cursor: pointer;

}
.filter-icon{
font-size: 1.2rem;
color: #6E6893;
margin-top: 0.1rem;
}
.dropdown {
  position: absolute;
  top: 100%; 
  left: 20;
  width: 200px; 
  background-color: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 1000;
  padding: 0 20px;
}
.ellipsis{
  font-size: 1rem;
}


</style>
