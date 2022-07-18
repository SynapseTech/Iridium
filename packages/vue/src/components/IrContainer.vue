<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

export interface ContainerProps {
  tag?: string | Component;
  fluid?: boolean;
}

const props = withDefaults(defineProps<ContainerProps>(), {
  tag: 'div',
  fluid: false,
});

const dynamicClasses = computed(() => ({
  fluid: props.fluid,
}));
</script>

<template lang="pug">
component.container(:is="props.tag" :class="dynamicClasses")
  slot
</template>

<style scoped lang="sass"></style>
