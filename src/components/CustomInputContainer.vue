<script setup lang="ts">
defineProps<{
    title?: string
    required?: boolean
}>()
</script>

<template>
    <div class="customInputContainer">
        <p v-if="title" class="customInputContainerTitle b2">
            {{ title }}<span v-if="required" class="redAsterisk">*</span>
        </p>
        <slot />
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
</style>
