<script setup lang="ts">
import CustomInputField from './components/CustomInputField.vue'
import CoinIcon from './components/Icons/CoinIcon.vue'
</script>

<template>
    <div class="flex-column gap-10">
        <CustomInputField title="Название промокода" placeholder="Введи название" required />
        <CustomInputField title="Заголовок" placeholder="Введи заголовок" required />

        <CustomInputField
            type="textarea"
            title="Сопроводительный текст"
            placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»"
            :maxlength="250"
        />

        <CustomInputField title="Укажи количество баллов" placeholder="100" required>
            <template #left>
                <CoinIcon />
            </template>
        </CustomInputField>
    </div>
</template>

<style scoped></style>
