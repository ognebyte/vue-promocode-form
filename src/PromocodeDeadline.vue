<script setup lang="ts">
import { defineProps } from 'vue'
import CustomInputContainer from './components/CustomInputContainer.vue'
import CustomDatePicker from './components/CustomDatePicker.vue'

defineProps<{
    title?: string
    required?: boolean
}>()
</script>

<template>
    <CustomInputContainer :title="title" :required="required">
        <div class="promocodeDates">
            <div class="promocodeDate">
                <p class="titleDatePicker b2">Дата начала</p>
                <CustomDatePicker />
            </div>

            <div class="promocodeDate">
                <p class="titleDatePicker b2">Дата конца</p>
                <CustomDatePicker />
            </div>
        </div>
    </CustomInputContainer>
</template>

<style scoped>
.customInputContainer {
    gap: 0.75rem;
}

.promocodeDates {
    display: inline-flex;
    gap: 1.25rem;
}

.promocodeDate {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.titleDatePicker {
    color: var(--text-color-1);
}
</style>
