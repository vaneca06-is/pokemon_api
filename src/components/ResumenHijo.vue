<template>
    <div>
        <h3>POKEMON ENCONTRADO</h3>
        <div>
            <p><strong>ID:</strong> {{ props.pokemonFound.id }}</p>
 
            <p><strong>NAME:</strong>{{ props.pokemonFound.name }}</p>

             <p><strong>WEIGHT:</strong>{{ props.pokemonFound.weight }}</p>

             <p><strong>HEIGHT:</strong>{{ props.pokemonFound.height }}</p>
            
            </div>

            <RouterLink to="/details">
                <button>VER DETALLES</button>
            </RouterLink>
        
    </div>

</template>
<script setup>
import { defineProps } from 'vue';

const props = defineProps (
    {
        pokemonFound:{
            type: Object,
        }
    }
);
</script>


// waight, id, height, name