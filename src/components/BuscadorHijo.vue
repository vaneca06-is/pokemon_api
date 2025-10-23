<template>
    <div>
        <input type="text" name="buscador" id="searchBuscador" v-model="nameToSearch" />
        <button @click="$emit('sendNameToFind', nameToSearch)">Buscar</button>

    </div>


</template>
<script setup>
import { ref } from 'vue';

const nameToSearch = ref("");


</script>