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

            <slot v-if="$slots.header" name="header" />
            <slot name="default" />
            <slot v-if="$slots.footer" name="footer" />
        </div>
    </div>
</template>

<style scoped>
.customModalBackdrop {
    position: fixed;
    inset: 0;
    display: flex;
    padding: 1.5rem;
    background-color: var(--modal-backdrop);
    z-index: 10;
    overflow: auto;
}

.customModal {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    width: 100%;
    max-width: 516px;
    margin: auto;
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

@media (width < 600px) {
    .customModalBackdrop {
        padding: 0;
    }

    .customModal {
        max-width: 100%;
        min-height: 100vh;
        height: max-content;
        margin: 0;
        padding: 1rem;
        border-radius: 0;
    }
}
</style>
