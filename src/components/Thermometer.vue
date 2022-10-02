<script setup lang="ts">
import { ref } from 'vue';
import sensorApi from '../api/sensorApi';
const sensor = ref({
  humidity: 0,
  temperature: 0
});

const getSensorData = async () => {
  setInterval( async() => {
    const { data } = await sensorApi.get('');
    sensor.value = data;
    console.log( data );
  } , 1000);
};
getSensorData();
</script>

<template>
<div class="container text-light">
  <div class="row">
    <div class="col-12">
      <h1>{{ sensor.temperature }} °C</h1>
      <h1>{{ sensor.humidity }} %</h1>
    </div>
  </div>
</div>
</template>
