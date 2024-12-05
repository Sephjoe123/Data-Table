<script setup>
import { useUserStore } from '@/stores/userStore';
import TabLinks from './TabLinks.vue';

const storeData = useUserStore()
const payableAmount = storeData.totalPayableAmount

defineProps({
    display: {
        type: Boolean,
        default: true
    }
})

</script>

<template >
<section v-if = display class = "main-table">
 <div class="table-heading ">
    <h4>
        TABLE HEADING
    </h4>

<div class="tab-section">
 <TabLinks/>
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