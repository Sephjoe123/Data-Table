<script setup>
import Table from '../components/Table.vue'
import { useUserStore } from '@/stores/userStore';


</script>

<template>
    <Table :status="'paid'"/>
</template>
