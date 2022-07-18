<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

export interface RowProps {
  tag?: string | Component;
  reverse?: boolean;
}

const props = withDefaults(defineProps<RowProps>(), {
  tag: 'div',
  reverse: false,
});

const dynamicClasses = computed(() => ({
  reverse: props.reverse,
}));
</script>

<template lang="pug">
component.row(:is="props.tag" :class="dynamicClasses")
  slot
</template>

<style scoped lang="sass"></style>