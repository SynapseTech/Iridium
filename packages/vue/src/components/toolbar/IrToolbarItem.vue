<script setup lang="ts">
import { computed } from 'vue';

export interface ToolbarItemProps {
  active?: boolean;
}

const props = withDefaults(defineProps<ToolbarItemProps>(), {
  active: false,
});

const dynamicClasses = computed(() => ({
  active: props.active,
}));
</script>

<template lang="pug">
.item(:class="dynamicClasses")
  .activeIndicator
  slot
</template>

<style scoped lang="sass"></style>