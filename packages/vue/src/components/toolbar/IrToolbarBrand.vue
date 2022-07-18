<script setup lang="ts">
import type { Component } from 'vue';

export interface ToolbarBrandProps {
  tag?: string | Component;
}

const props = withDefaults(defineProps<ToolbarBrandProps>(), {
  tag: 'div',
});
</script>

<template lang="pug">
component.brand(:is="props.tag")
  slot
</template>

<style scoped lang="sass"></style>
