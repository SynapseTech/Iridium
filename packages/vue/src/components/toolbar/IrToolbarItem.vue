<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

export interface ToolbarItemProps {
  tag?: string | Component;
  active?: boolean;
}

const props = withDefaults(defineProps<ToolbarItemProps>(), {
  tag: 'div',
  active: false,
});

const dynamicClasses = computed(() => ({
  active: props.active,
}));
</script>

<template lang="pug">
component.item(:is="props.tag" :class="dynamicClasses")
  .activeIndicator
  slot
</template>

<style scoped lang="sass"></style>
