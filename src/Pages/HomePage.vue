<template>
<BuscadorHijo @sendNameToFind="loadNames"></BuscadorHijo>
<ResumenHijo :pokemon-found="list" ></ResumenHijo>
</template>
<script setup>
import BuscadorHijo from '../components/BuscadorHijo.vue';
import { ref } from 'vue';
import ResumenHijo from '../components/ResumenHijo.vue';

const list = ref([]);
const loadNames = async (nameToSearch) => {
    console.log('Cargando datos...');
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nameToSearch}`);
        console.log('First response: ', response.value)
        if (!response.ok) {
            throw new Error(`HTTP error status, ${response.status}`);
        }
        list.value = await response.json();
        console.log('Show data', list.value)
    } catch (error) {
        console.error('Comunication error:', error)
    }
}

</script>