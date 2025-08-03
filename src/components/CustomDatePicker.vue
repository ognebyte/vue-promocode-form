<script setup lang="ts">
import { defineProps } from 'vue'
import CalendarIcon from './Icons/CalendarIcon.vue'

defineProps<{
    required?: boolean
}>()
</script>

<template>
    <div class="customDatePickerWrapper">
        <label class="customDatePickerLabel">
            <CalendarIcon />
            <div>
                <p class="c2">Дата</p>
                <input class="customDatePicker b2" type="date" />
            </div>
        </label>
        <label class="customDatePickerLabel">
            <input class="customDatePicker b2" type="time" />
        </label>
    </div>
</template>

<style scoped>
.customDatePickerWrapper {
    display: inline-flex;
    gap: 0.25rem;
}

.customDatePickerLabel {
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
    outline-color: red;
    cursor: text;
}

.customDatePickerLabel:focus-within {
    outline: auto 1px black;
}

.customDatePicker {
    flex: 1;
    border: none;
    outline: none;
    background-color: transparent;
}

.customDatePicker::-webkit-calendar-picker-indicator {
    display: none;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: transparent;
}
</style>
