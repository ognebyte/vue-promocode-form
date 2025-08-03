<script setup lang="ts">
import CustomInput from './components/CustomInput.vue'
import CustomTextarea from './components/CustomTextarea.vue'
import CoinIcon from './components/Icons/CoinIcon.vue'
</script>

<template>
    <div class="flex-column gap-10">
        <CustomInput title="Название промокода" placeholder="Введи название" required />
        <CustomInput title="Заголовок" placeholder="Введи заголовок" required />

        <CustomTextarea
            title="Сопроводительный текст"
            placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»"
        />

        <CustomInput title="Укажи количество баллов" placeholder="100" required>
            <template #left>
                <CoinIcon />
            </template>
        </CustomInput>
    </div>
</template>

<style scoped></style>
