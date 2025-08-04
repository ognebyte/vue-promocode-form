<script setup lang="ts">
import { defineProps, ref } from 'vue'
import CustomInputContainer from './components/CustomInputContainer.vue'
import CustomDatePicker from './components/CustomDatePicker.vue'
import CustomCheckbox from './components/CustomCheckbox.vue'

defineProps<{
    title?: string
    required?: boolean
}>()

const withoutDateEnd = ref(false)
</script>

<template>
    <CustomInputContainer :title="title" :required="required">
        <div class="flex-column gap-5">
            <div class="promocodeDates">
                <div class="promocodeDate">
                    <p class="titleDatePicker b2">Дата начала</p>
                    <CustomDatePicker />
                </div>

                <div class="promocodeDate" v-if="!withoutDateEnd">
                    <p class="titleDatePicker b2">Дата конца</p>
                    <CustomDatePicker />
                </div>
            </div>
            <CustomCheckbox title="Без даты конца" v-model="withoutDateEnd" />
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
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.titleDatePicker {
    color: var(--text-color-1);
}
</style>
