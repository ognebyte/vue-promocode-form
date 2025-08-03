<script setup lang="ts">
import PromocodeDeadline from './PromocodeDeadline.vue'
import CustomInput from './components/CustomInput.vue'
import CustomRadio from './components/CustomRadio.vue'

const radio = [
    {
        title: 'Создать промокод без отправки',
    },
    {
        title: 'Отправить промокод всем пользователям',
    },
]
</script>

<template>
    <div class="flex-column gap-12">
        <PromocodeDeadline title="Срок действия промокода" required />

        <div class="divider"></div>

        <CustomInput title="Введите лимит активаций (шт.)" placeholder="1000" required />

        <CustomRadio title="Настроить получение промокода" :items="radio" />
    </div>
</template>

<style scoped></style>
