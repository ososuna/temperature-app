<script setup lang="ts">
import { ref } from 'vue';
import sensorApi from '../api/sensorApi';
const data = ref({
  temperature: 0,
  humidity: 0
});

const getSensorData = async () => {
  setInterval( async() => {
    const { data } = await sensorApi.get('');
    console.log( data );
  } , 1000);
};

</script>

<template>
<h1>Hello world</h1>  
</template>
