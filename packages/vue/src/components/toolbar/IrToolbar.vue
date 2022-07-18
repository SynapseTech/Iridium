<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

export interface ToolbarProps {
  tag?: string | Component;
  sidebarLeft?: boolean;
}

const props = withDefaults(defineProps<ToolbarProps>(), {
  tag: 'div',
  sidebarLeft: false,
})

const dynamicClasses = computed(() => ({
  sidebarLeft: props.sidebarLeft,
}));
</script>

<template lang="pug">
component.toolbar(:is="props.tag" :class="dynamicClasses")
  slot(name="start")
  .items
    slot
  slot(name="end")
</template>

<style scoped lang="sass">
</style>