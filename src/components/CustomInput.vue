<script setup lang="ts">
import { defineProps } from 'vue'
import CustomInputContainer from './CustomInputContainer.vue'

defineProps<{
    title?: string
    placeholder?: string
    required?: boolean
}>()
</script>

<template>
    <CustomInputContainer :title="title" :required="required">
        <label class="customInputLabel">
            <slot name="left"></slot>
            <input class="customInput b2" :placeholder="placeholder" />
            <slot name="right"></slot>
        </label>
    </CustomInputContainer>
</template>

<style scoped>
.customInputLabel {
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: var(--input-height);
    padding-inline: 0.75rem;
    gap: 0.5rem;
    border-radius: 0.75rem;
    background-color: var(--surface-3);
    cursor: text;
}

.customInputLabel:focus-within {
    outline: auto;
}

.customInput {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
}

.customInput::placeholder {
    color: var(--text-color-2);
}
</style>
