<script setup>
import { useUserStore } from '@/stores/userStore';
import { RouterLink } from 'vue-router';
import { useRoute } from 'vue-router';


const route = useRoute()
function ActiveTab(path){
return route.path === path;
}

const storeData = useUserStore()
const payableAmount = storeData.totalPayableAmount

</script>

<template>
<section class = "main-table">
 <div class="table-heading ">
    <h4>
        TABLE HEADING
    </h4>

<div class="tab-section">
  <div class="tab">
    <ul>

<li><RouterLink to="/" :class="{ 'active': ActiveTab('/') }">All</RouterLink></li>
<li><RouterLink to="/Paid" :class="{ 'active': ActiveTab('/Paid') }">Paid</RouterLink></li>
<li><RouterLink to="/Unpaid" :class="{ 'active': ActiveTab('/Unpaid') }">Unpaid</RouterLink></li>
<li><RouterLink to="/Overdue" :class="{ 'active': ActiveTab('/Overdue') }">Overdue</RouterLink></li>

    </ul>
   </div>
   
   <div class="payable-amount">
    <p> <span>Total payable amount: </span> 
        
    <span>
    ${{ payableAmount }}.00
    </span> USD </p>
   </div>
   
</div>

<div class="line">

 </div>
   

 </div>
</section>
</template>

<style scoped>
ul li{
    display: inline-flex;
    flex-direction: row;
    padding: 0px 10px;
    color: #6E6893;
    font-size: 0.85rem;
}
.table-heading{
    margin-top: 1.5rem;
    margin-left: 5rem;
    max-width: 90%;
}
.tab-section{
    display: flex;
    position: relative;
}
h4{
    padding-bottom: 1rem;
    color: #6E6893;
    font-weight: 700;
}
.payable-amount{
position: absolute;
right: 10px;
}
.payable-amount span:first-child{
    font-size: 0.85rem;
}
.payable-amount span:nth-child(2){
color: #4e54c8;
font-weight: bold;
}
.line{
    background-color: #ebe5e5;
    width: 100%;
    height: 1.5px;
   
}
.active{
    border-bottom: 3px solid #000;
    width: 100%    
   
}
</style>