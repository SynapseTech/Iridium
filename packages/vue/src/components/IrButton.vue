<script setup lang="ts">
import { Component } from 'vue';

interface ButtonProps {
  tag?: string | Component;
  color?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  tag: 'button',
});
</script>

<template lang="pug">
component.button(:is="props.tag")
  slot
</template>

<style scoped lang="sass"></style>