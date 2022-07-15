<script setup lang="ts">
import '@iridium-design/styles/src/components/toolbar';
import {computed} from "vue";

export interface ToolbarItemProps {
  active?: boolean;
}

const props = withDefaults(defineProps<ToolbarItemProps>(), {
  active: false,
});

const dynamicClasses = computed(() => ({
  active: props.active,
}))
</script>

<template lang="pug">
.item(:class="dynamicClasses")
  slot
</template>

<style scoped lang="sass"></style>