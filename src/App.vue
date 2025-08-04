<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import CustomButton from './components/CustomButton.vue'
import CustomModal from './components/CustomModal.vue'
import CustomTabs from './components/CustomTabs.vue'
import TabOne from './TabOne.vue'
import TabTwo from './TabTwo.vue'
import { validationSchema } from './utils/schemas'
import { useForm } from 'vee-validate'

const isModalOpen = ref(false)
const currentTab = ref(0)
const isValidating = ref(false)

const currentSchema = computed(() => {
    return validationSchema[currentTab.value]
})

const { validate, handleSubmit, handleReset } = useForm({
    validationSchema: currentSchema,
    keepValuesOnUnmount: true,
})

const tabs = [
    { name: 'Шаг 1: Основное', component: TabOne },
    { name: 'Шаг 2: Настройки промокода', component: TabTwo },
]

async function goToTab(index: number) {
    if (index === currentTab.value) return
    isValidating.value = true

    try {
        if (index > currentTab.value) {
            for (let i = currentTab.value; i < index; i++) {
                currentTab.value = i
                await nextTick()
                const result = await validate()
                if (!result.valid) return
            }
        }
        currentTab.value = index
    } finally {
        isValidating.value = false
    }
}

const submitForm = handleSubmit(async (formValues) => {
    const result = await validate()
    if (result.valid) {
        if (!isLastTab.value) {
            currentTab.value++
            return
        }

        if (formValues.withoutEndDate) {
            delete formValues.endDate
            delete formValues.endTime
        }
        console.log('Форма:', formValues)
        closeModal()
    }
})

function openModal() {
    isModalOpen.value = true
    currentTab.value = 0
    handleReset()
}

function closeModal() {
    isModalOpen.value = false
    currentTab.value = 0
    handleReset()
}

const isFirstTab = computed(() => currentTab.value === 0)
const isLastTab = computed(() => currentTab.value === tabs.length - 1)
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
                <form @submit="submitForm" class="form flex-column gap-12">
                    <component :is="tabs[currentTab].component" />

                    <div class="modalActions">
                        <CustomButton
                            @click="isFirstTab ? closeModal() : goToTab(currentTab - 1)"
                            variant="secondary"
                            fill
                            :disabled="isValidating"
                        >
                            {{ isFirstTab ? 'Отмена' : 'Назад' }}
                        </CustomButton>

                        <CustomButton type="submit" fill :disabled="isValidating">
                            {{ isLastTab ? 'Создать' : 'Далее' }}
                        </CustomButton>
                    </div>
                </form>
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
    display: flex;
    width: 100%;
    gap: 0.75rem;
}

.form {
    min-height: 300px;
}
</style>
