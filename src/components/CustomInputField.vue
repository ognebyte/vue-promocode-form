<script setup lang="ts">
import { defineProps, computed } from 'vue'
import CustomInputContainer from './CustomInputContainer.vue'

const props = defineProps<{
    type?: 'input' | 'textarea'
    title?: string
    placeholder?: string
    required?: boolean
    maxlength?: number
}>()

const isTextarea = computed(() => props.type === 'textarea')
const max = computed(() => props.maxlength ?? 250)
</script>

<template>
    <CustomInputContainer :title="title" :required="required">
        <div class="flex-column gap-2" v-if="isTextarea">
            <textarea class="customTextarea b2" :placeholder="placeholder" :maxlength="max" />
            <p class="customTextareaLength c2">0/{{ max }}</p>
        </div>

        <label v-else class="customInputLabel">
            <slot name="left" />
            <input class="customInput b2" :placeholder="placeholder" />
            <slot name="right" />
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

.customTextareaLength {
    margin-left: auto;
    color: var(--text-color-3);
}
</style>
