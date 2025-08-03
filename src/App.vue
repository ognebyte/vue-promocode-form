<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from './components/CustomButton.vue'
import CustomModal from './components/CustomModal.vue'
import TabOne from './TabOne.vue'
import TabTwo from './TabTwo.vue'
import CustomTabs from './components/CustomTabs.vue'

const isModalOpen = ref(false)
const currentTab = ref(0)

const tabs = [
    { name: 'Шаг 1: Основное', tab: TabOne },
    { name: 'Шаг 2: Настройки промокода', tab: TabTwo },
]

function goToTab(index: number) {
    currentTab.value = index
}

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
                <div class="flex-column gap-10">
                    <p class="h4">Создание промокода</p>

                    <CustomTabs :tabs="tabs" :activeTab="currentTab" @click="goToTab" />
                </div>
            </template>

            <template #default>
                <component :is="tabs[currentTab].tab" />
            </template>

            <template #footer>
                <div class="modalActions">
                    <CustomButton v-if="currentTab === 0" @click="closeModal" variant="secondary" fill>
                        Отмена
                    </CustomButton>
                    <CustomButton v-else @click="goToTab(currentTab - 1)" variant="secondary" fill>
                        Назад
                    </CustomButton>

                    <CustomButton v-if="currentTab !== tabs.length - 1" @click="goToTab(currentTab + 1)" fill>
                        Далее
                    </CustomButton>
                    <CustomButton v-else fill>Создать</CustomButton>
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
    width: 100%;
    gap: 0.75rem;
}
</style>
