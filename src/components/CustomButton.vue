<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
    variant?: 'primary' | 'secondary'
    type?: 'submit' | 'reset' | 'button'
    fill?: boolean
    disabled?: boolean
}>()

const emit = defineEmits<{
    (e: 'click', event: MouseEvent): void
}>()

const handleClick = (event: MouseEvent) => {
    emit('click', event)
}

const buttonClass = computed(() => {
    return ['customButton', `customButton--${props.variant || 'primary'}`, props.fill && 'customButton--fill']
})
</script>

<template>
    <button :class="buttonClass" @click="handleClick" :disabled="disabled" :type="type || 'button'">
        <slot>Кнопка</slot>
    </button>
</template>

<style>
.customButton {
    height: var(--button-height);
    border: none;
    border-radius: 1rem;
    padding-inline: 1rem;
    cursor: pointer;
    transition: 0.2s ease;
    transition-property: color, background-color, transform;

    font-weight: 600;
    font-size: 14px;
}

.customButton:disabled {
    opacity: 0.6;
    pointer-events: none;
}

.customButton:active {
    transform: scale(0.95);
}

.customButton--fill {
    width: 100%;
}

.customButton--primary {
    background-color: var(--surface);
    color: var(--text-color-0);
}

.customButton--primary:hover {
    background-color: var(--active-color);
}

.customButton--secondary {
    background-color: var(--surface-2);
    color: var(--text-color-2);
}

.customButton--secondary:hover {
    color: var(--active-color);
}
</style>
