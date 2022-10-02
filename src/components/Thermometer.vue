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
<div class="container text-light">
  <div class="row">
    <div class="col-12">
      <h1>{{ data.temperature }} °C</h1>
      <h1>{{ data.humidity }} %</h1>
    </div>
  </div>
</div>
</template>
