<script setup>
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';

const route = useRoute()
function ActiveTab(path){
return route.path === path;

}

</script>

<template>
 <div class="tab">
    <ul>
<li><RouterLink to="/" :class="{ 'active': ActiveTab('/') }">All</RouterLink></li>
<li><RouterLink to="/Paid" :class="{ 'active': ActiveTab('/Paid') }">Paid</RouterLink></li>
<li><RouterLink to="/Unpaid" :class="{ 'active': ActiveTab('/Unpaid') }">Unpaid</RouterLink></li>
<li><RouterLink to="/Overdue" :class="{ 'active': ActiveTab('/Overdue') }">Overdue</RouterLink></li>
    </ul>
   </div> 
</template>

<style scoped>
ul li{
    display: inline-flex;
    flex-direction: row;
    padding: 0px 10px;
    color: #6E6893;
    font-size: 0.85rem;
}

.active{
    border-bottom: 3px solid #000;
    width: 100%    
}
</style>