<script setup lang="ts">
import CalendarIcon from './Icons/CalendarIcon.vue'
import { computed, useTemplateRef } from 'vue'

const modelDate = defineModel<string>('modelDate')
const modelTime = defineModel<string>('modelTime')
const props = defineProps<{
    nameDate: string
    nameTime: string
    dateError?: string
    timeError?: string
}>()

const hasErrorDate = computed(() => !!props.dateError)
const hasErrorTime = computed(() => !!props.timeError)

const inputDateRef = useTemplateRef('dateRef')

function openDatePicker() {
    inputDateRef.value?.showPicker()
}
</script>

<template>
    <div class="flex-row gap-2">
        <label class="customDateTimePickerLabel" :class="{ error: hasErrorDate }">
            <button class="customDateTimePicker" @click="openDatePicker" type="button">
                <CalendarIcon />
            </button>
            <div>
                <p class="c2">Дата</p>
                <input
                    v-model="modelDate"
                    :name="nameDate"
                    ref="dateRef"
                    class="customDateTimePickerInput b2"
                    type="date"
                    max="9999-12-31"
                    width="86px"
                />
            </div>
        </label>

        <label class="customDateTimePickerLabel" :class="{ error: hasErrorTime }">
            <input v-model="modelTime" :name="nameTime" class="customDateTimePickerInput b2" type="time" width="44px" />
        </label>
    </div>
</template>

<style scoped>
.customDateTimePickerLabel {
    position: relative;
    display: inline-flex;
    align-items: center;
    width: 100%;
    height: var(--input-height);
    padding-inline: 0.75rem;
    gap: 0.5rem;
    border-radius: 0.75rem;
    background-color: var(--surface-3);
    color: var(--text-color-3);
    cursor: text;
}

.customDateTimePickerLabel:focus-within {
    outline: auto black;
}

.customDateTimePickerLabel.error {
    outline-color: var(--error-color);
    border: 1px solid var(--error-color);
}
.customDateTimePicker {
    display: flex;
    border: none;
    outline: none;
    background-color: transparent;
}

.customDateTimePickerInput {
    border: none;
    outline: none;
    background-color: transparent;
    color: var(--text-color);
}

.customDateTimePickerInput::-webkit-calendar-picker-indicator {
    display: none;
    /* position: absolute;
    display: block;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    background: transparent;
    outline: none; */
}
</style>
