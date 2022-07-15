<script setup lang="ts">
import { computed } from 'vue';

export interface ToolbarProps {
  sidebarLeft?: boolean;
}

const props = withDefaults(defineProps<ToolbarProps>(), {
  sidebarLeft: false,
})

const dynamicClasses = computed(() => ({
  sidebarLeft: props.sidebarLeft,
}));
</script>

<template lang="pug">
.toolbar(:class="dynamicClasses")
  slot(name="start")
  .items
    slot
  slot(name="end")
</template>

<style scoped lang="sass">
</style>