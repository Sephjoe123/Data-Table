<script setup>
const emit = defineEmits(['search']);
 const searchValue = (e) =>{
    emit('search', e.target.value)
 }
</script>

<template>
<input @input="searchValue" type="text" placeholder="Search Users by Name, Email or Date" />
</template>

<style>
input {
  padding: 10px 20px;
  width: 25%;
  border-radius: 5px;
  outline: none;
  border: 1px solid #f3f3f7;
  background-color: #F4F2FF;
 
}
::placeholder{
   color: #6E6893;
}

</style>