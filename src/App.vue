<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './components/CustomButton.vue'
import CustomModal from './components/CustomModal.vue'
import CustomInput from './components/CustomInput.vue'
import CoinIcon from './components/Icons/CoinIcon.vue'

const isModalOpen = ref(false)

function openModal() {
    isModalOpen.value = true
}

function closeModal() {
    isModalOpen.value = false
}
</script>

<template>
    <main>
        <CustomButton @click="openModal">Создать промокод</CustomButton>

        <CustomModal v-if="isModalOpen" @close="closeModal">
            <template #header>
                <p class="h4">Создание промокода</p>
            </template>

            <template #default>
                <CustomInput title="Название промокода" placeholder="Введи название" required />
                <CustomInput title="Заголовок" placeholder="Введи заголовок" required />

                <CustomInput
                    title="Сопроводительный текст"
                    placeholder="Например: «Ты попал в число счастливчиков! Дарим 300 баллов»"
                />

                <CustomInput title="Укажи количество баллов" placeholder="100" required>
                    <template #left>
                        <CoinIcon />
                    </template>
                </CustomInput>
            </template>

            <template #footer>
                <div class="modalActions">
                    <CustomButton @click="closeModal" variant="secondary" fill>Отмена</CustomButton>
                    <CustomButton fill>Далее</CustomButton>
                </div>
            </template>
        </CustomModal>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.modalActions {
    display: inline-flex;
    gap: 0.75rem;
}
</style>
