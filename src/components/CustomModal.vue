<script setup lang="ts">
import CloseIcon from './Icons/CloseIcon.vue'

const emit = defineEmits(['close'])

const close = () => {
    emit('close')
}
</script>

<template>
    <div class="customModalBackdrop">
        <div class="customModal">
            <button class="customModalClose" @click="close">
                <CloseIcon />
            </button>

            <div v-if="$slots.header">
                <slot name="header" />
            </div>

            <div>
                <slot name="default" />
            </div>

            <div v-if="$slots.footer">
                <slot name="footer" />
            </div>
        </div>
    </div>
</template>

<style scoped>
.customModalBackdrop {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--modal-backdrop);
    z-index: 10;
}

.customModal {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
    max-width: 516px;
    padding: 1.5rem;
    border-radius: 1rem;
    background-color: var(--surface-0);
}

.customModalClose {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    display: flex;
    border: none;
    background: transparent;
    color: var(--icon-color);
    cursor: pointer;
    transition: 0.2s ease color;
}

.customModalClose:hover {
    color: var(--active-color);
}
</style>
