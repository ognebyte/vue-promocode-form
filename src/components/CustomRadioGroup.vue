<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
    title?: string
    required?: boolean
    items?: {
        name?: string
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
            <label
                v-for="(item, index) in items"
                :key="item.name + '-' + index"
                class="customRadioLabel flex-row gap-5"
            >
                <input class="customRadio b2" :name="item.name" type="radio" />
                <span class="checkmark" tabindex="0"></span>
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
    display: none;
}

.checkmark {
    width: var(--checkmark-size);
    height: var(--checkmark-size);
    border-radius: 50%;
    border: 1.5px solid var(--stroke-color-3);
    outline: none;
    transition: 0.1s ease;
    transition-property: border, opacity;
}

.customRadio:checked + .checkmark {
    border-width: 5px;
    border-color: var(--active-color);
}

.customRadio:active + .checkmark {
    opacity: 0.6;
}
</style>
