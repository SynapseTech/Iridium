<script setup lang="ts">
import IrToolbar from '../src/components/toolbar/IrToolbar.vue';
import IrToolbarItem from '../src/components/toolbar/IrToolbarItem.vue';
import IrToolbarBrand from '../src/components/toolbar/IrToolbarBrand.vue';
import IrContainer from '../src/components/IrContainer.vue';
import IrButton from '../src/components/IrButton.vue';
import IrSidebar from '../src/components/IrSidebar.vue';

import { ref } from 'vue';

const sidebarOpen = ref<boolean>(false);
</script>

<template>
  <div class="demoLayout">
    <ir-sidebar
      tag='aside'
      :open="sidebarOpen"
      @closed="sidebarOpen = false"
      off-canvas
      close
    />
    <main>
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
        <h2>Buttons</h2>

        <ir-button>
          Default Button
        </ir-button>

        <ir-button color='primary'>
          Primary Button
        </ir-button>

        <h2>Sidebar</h2>
        <ir-button color='primary' @click="sidebarOpen = true">
          Open Offcanvas Sidebar
        </ir-button>
      </ir-container>
    </main>
  </div>
</template>


<style scoped lang="sass">
.demoLayout
  display: flex
  height: 100vh

  main
    flex-grow: 1
    background: #eee

    :global(.container)
      background: #fff
</style>