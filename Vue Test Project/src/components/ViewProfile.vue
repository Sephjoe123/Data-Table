<script setup>

</script>

<template>
<div class="manageProfile">
    
    <div class="cancel">
        <p v-bind:style="{'cursor': 'pointer'}" @click = "$emit('closeModal')">
          x
        </p>
       
    </div>
    <ul>
        <li>
        Edit  
        </li>
        <li>
         View Profile
        </li>
        <li v-bind:style="{'color': '#007F00','padding-bottom': '0.5rem'}">
         Activate User
        </li>
        <hr>
        <li v-bind:style="{'color': '#D30000'}">
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