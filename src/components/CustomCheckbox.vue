<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps<{
    title?: string
    name: string
}>()

const { value } = useField<boolean>(() => props.name)
</script>

<template>
    <label class="customRadioLabel flex-row gap-5">
        <input v-model="value" :name="name" class="customCheckbox b2" type="checkbox" />
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
    color: var(--surface);
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
