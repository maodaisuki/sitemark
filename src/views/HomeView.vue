<script setup>
import FooterComponent from '../components/FooterComponent.vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import ContentComponent from '../components/ContentComponent.vue';
</script>

<template>
  <div class="main-layout">
    <a-layout style="width: 100%;">
      <a-layout-header><HeaderComponent/></a-layout-header>
      <a-layout-content><ContentComponent/></a-layout-content>
      <a-layout-footer><FooterComponent/></a-layout-footer>
    </a-layout>
  </div>
</template>

<style scoped>
.main-layout {
  background: #f3f3f3;
  width: clamp(300px, 70%, 750px);
  margin: 0 auto;
  padding: 20px 40px 30px 40px;
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
