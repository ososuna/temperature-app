<script setup lang="ts">
  import NavbarComponent from '../components/NavbarComponent.vue';
  import Thermometer from '../components/Thermometer.vue'
</script>
<template>
  <NavbarComponent />
  <div class="vh-100 bg-dark">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-6">
        <img src="../assets/logo.png" alt="logo">
      </div>
      <div class="col-6 d-flex align-items-center justify-content-center">
        <Thermometer />
      </div>
    </div>
  </div>
</template>
