<script setup lang="ts">
import { computed } from 'vue'
import { useField } from 'vee-validate'

import CustomInputField from './components/CustomInputField.vue'
import CoinIcon from './components/Icons/CoinIcon.vue'

const { value: name } = useField<string>('name')
const { value: title } = useField<string>('title')
const { value: description } = useField<string>('description')
const { value: points } = useField<number>('points')

const formData = computed(() => ({
    name: name.value,
    title: title.value,
    description: description.value,
    points: points.value,
}))

defineExpose({ formData })
</script>

<template>
    <div class="flex-column gap-10">
        <CustomInputField
            name="name"
            title="Название промокода"
            placeholder="Введите название"
            required
            autocomplete="off"
            :maxlength="30"
        />

        <CustomInputField
            name="title"
            title="Заголовок"
            placeholder="Введите заголовок"
            required
            autocomplete="off"
            :maxlength="120"
        />

        <CustomInputField
            name="description"
            type="textarea"
            title="Сопроводительный текст"
            placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»"
            :maxlength="250"
        />

        <CustomInputField name="points" type="number" title="Укажите количество баллов" placeholder="100" required>
            <template #left>
                <CoinIcon />
            </template>
        </CustomInputField>
    </div>
</template>

<style scoped></style>
