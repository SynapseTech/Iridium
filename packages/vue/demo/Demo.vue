<script setup lang="ts">
import IrToolbar from '../src/components/toolbar/IrToolbar.vue';
import IrToolbarItem from '../src/components/toolbar/IrToolbarItem.vue';
import IrToolbarBrand from "../src/components/toolbar/IrToolbarBrand.vue";
</script>

<template>
  <ir-toolbar>
    <template v-slot:start>
      <ir-toolbar-brand>
        Demo App
      </ir-toolbar-brand>
    </template>
    <ir-toolbar-item active>Home</ir-toolbar-item>
    <ir-toolbar-item>About</ir-toolbar-item>
  </ir-toolbar>
</template>


<style scoped></style>