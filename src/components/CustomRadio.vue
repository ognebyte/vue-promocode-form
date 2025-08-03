<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    title?: string
    required?: boolean
    items?: {
        title?: string
    }[]
}>()
</script>

<template>
    <div class="customRadioContainer flex-column gap-10">
        <p class="customRadioTitle b2">
            {{ title }}
        </p>
        <div class="flex-column gap-7">
            <label v-for="(item, index) in items" :key="'radio' + index" class="customRadioLabel flex-row gap-5">
                <input class="customRadio b2" name="radio" type="radio" />
                <p class="b2">{{ item.title }}</p>
            </label>
        </div>
    </div>
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

.customRadio {
    outline: none;
}
</style>
