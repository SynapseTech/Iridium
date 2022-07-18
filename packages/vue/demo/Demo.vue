<script setup lang="ts">
import IrToolbar from '../src/components/toolbar/IrToolbar.vue';
import IrToolbarItem from '../src/components/toolbar/IrToolbarItem.vue';
import IrToolbarBrand from '../src/components/toolbar/IrToolbarBrand.vue';
import IrContainer from '../src/components/IrContainer.vue';
import IrButton from '../src/components/IrButton.vue';
</script>

<template>
  <ir-toolbar tag='nav'>
    <template v-slot:start>
      <ir-toolbar-brand>
        Demo App
      </ir-toolbar-brand>
    </template>
    <ir-toolbar-item tag='a' href='#' active>Home</ir-toolbar-item>
    <ir-toolbar-item>About</ir-toolbar-item>
  </ir-toolbar>

  <ir-container>
    <ir-button>
      Default Button
    </ir-button>

    <ir-button color='primary'>
      Primary Button
    </ir-button>
  </ir-container>
</template>


<style scoped lang="sass">
</style>