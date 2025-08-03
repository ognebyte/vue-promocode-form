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
        <textarea class="customTextarea b2" :placeholder="placeholder" />
    </CustomInputContainer>
</template>

<style scoped>
.customTextarea {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: var(--textarea-height);
    padding-inline: 0.75rem;
    padding-block: 1rem;
    gap: 0.5rem;
    border: none;
    border-radius: 0.75rem;
    background-color: var(--surface-3);
    cursor: text;
    resize: vertical;
}

.customTextarea::placeholder {
    color: var(--text-color-4);
}
</style>
