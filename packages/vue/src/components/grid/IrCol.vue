<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

export interface ColProps {
  tag?: string | Component;
  reverse?: boolean;
}

const props = withDefaults(defineProps<ColProps>(), {
  tag: 'div',
  reverse: false,
});

const dynamicClasses = computed(() => ({
  reverse: props.reverse,
}));
</script>

<template lang="pug">
component.col(:is="props.tag" :class="dynamicClasses")
  slot
</template>

<style scoped lang="sass"></style>