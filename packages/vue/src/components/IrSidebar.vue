<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

const emit = defineEmits(['closed']);

export interface SidebarProps {
  tag?: string | Component;
  offCanvas?: boolean;
  floating?: boolean;
  close?: boolean;
  open?: boolean;
}

const props = withDefaults(defineProps<SidebarProps>(), {
  tag: 'div',
  offCanvas: false,
  floating: false,
  close: false,
  open: false,
});

const dynamicClasses = computed(() => ({
  offCanvas: props.offCanvas,
  floating: props.floating,
  open: props.open,
}));

function closeHandler() {
  emit('closed');
}
</script>

<template lang="pug">
component.sidebar(:is="props.tag" :class="dynamicClasses")
  button.closeButton(v-if="props.close" @click="closeHandler") &times;
  slot
</template>

<style scoped lang="sass"></style>