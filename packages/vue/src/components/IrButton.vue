<script setup lang="ts">
import type { Component } from 'vue';
import { computed } from 'vue';

interface ButtonProps {
  tag?: string | Component;
  color?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
});

const dynamicClasses = computed(() => ({
  ...(props.color ? {
    [props.color]: true,
  } : {}),
}))
</script>

<template lang="pug">
component.button(:is="props.tag" :class="dynamicClasses")
  slot
</template>

<style scoped lang="sass"></style>