<script setup lang="ts">
import { defineProps, defineModel } from 'vue'

defineProps<{
    title?: string
}>()

const model = defineModel<boolean>()
</script>

<template>
    <label class="customRadioLabel flex-row gap-5">
        <input class="customCheckbox b2" type="checkbox" v-model="model" />
        <p class="b2">{{ title }}</p>
    </label>
</template>

<style scoped>
.customRadioContainer {
    color: var(--surface);
}

.customRadioTitle {
    font-weight: 600;
}

.customRadioLabel {
    align-items: center;
}

.customRadioLabel:focus-within {
    outline: auto;
    outline-offset: 4px;
}

.customCheckbox {
    appearance: none;
    position: relative;
    width: var(--checkmark-size);
    height: var(--checkmark-size);
    border-radius: 4px;
    outline: none;
    border: 1px solid var(--icon-color);
    transition: 0.1s ease;
    transition-property: border, background-color, opacity;
}

.customCheckbox:active {
    opacity: 0.6;
}

.customCheckbox:checked {
    background-color: var(--active-color);
    border: none;
}

.customCheckbox:checked::before {
    content: '✔';
    position: absolute;
    inset: 0;
    text-align: center;
    color: var(--text-color-0);
}
</style>
