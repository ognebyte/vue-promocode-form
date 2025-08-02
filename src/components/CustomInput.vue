<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    title?: string
    placeholder?: string
    required?: boolean
}>()
</script>

<template>
    <div class="customInputContainer">
        <p v-if="title" class="b2">{{ title }}<span v-if="required" class="redAsterisk">*</span></p>

        <label class="customInputLabel">
            <slot name="left"></slot>
            <input class="customInput" :placeholder="placeholder" />
            <slot name="right"></slot>
        </label>
    </div>
</template>

<style scoped>
.customInputContainer {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.redAsterisk {
    color: var(--error-color);
}

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

.customInput {
    flex: 1;
    border: none;
    background-color: transparent;
}

.customInput::placeholder {
    color: var(--text-color-2);
}
</style>
