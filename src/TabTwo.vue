<script setup lang="ts">
import PromocodeDeadline from './PromocodeDeadline.vue'
import CustomInputField from './components/CustomInputField.vue'
import CustomRadioGroup from './components/CustomRadioGroup.vue'

const radio = [
    {
        name: 'promocode-receive',
        title: 'Создать промокод без отправки',
    },
    {
        name: 'promocode-receive',
        title: 'Отправить промокод всем пользователям',
    },
]
</script>

<template>
    <div class="flex-column gap-12">
        <PromocodeDeadline title="Срок действия промокода" required />

        <div class="divider"></div>

        <CustomInputField title="Введите лимит активаций (шт.)" placeholder="1000" required />

        <CustomRadioGroup title="Настроить получение промокода" :items="radio" />
    </div>
</template>

<style scoped></style>
