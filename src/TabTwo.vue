<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useField } from 'vee-validate'

import CustomInputField from './components/CustomInputField.vue'
import CustomRadioGroup from './components/CustomRadioGroup.vue'
import CustomInputContainer from './components/CustomInputContainer.vue'
import CustomCheckbox from './components/CustomCheckbox.vue'
import CustomDateTimePicker from './components/CustomDateTimePicker.vue'

const radioOptions = [
    { value: 'create-only', title: 'Создать промокод без отправки' },
    { value: 'send-all', title: 'Отправить промокод всем пользователям' },
]

const { value: startDate, errorMessage: startDateError } = useField<string>('startDate')
const { value: startTime, errorMessage: startTimeError } = useField<string>('startTime')
const { value: endDate, errorMessage: endDateError } = useField<string>('endDate')
const { value: endTime, errorMessage: endTimeError } = useField<string>('endTime')
const { value: activationLimit } = useField<number>('activationLimit')
const { value: receiveType } = useField<string>('receiveType')
const { value: withoutEndDate } = useField<boolean>('withoutEndDate')

const formData = computed(() => ({
    startDate: startDate.value,
    startTime: startTime.value,
    endDate: endDate.value,
    endTime: endTime.value,
    activationLimit: activationLimit.value,
    receiveType: receiveType.value,
    withoutEndDate: withoutEndDate.value,
}))

const errorMessage = computed(
    () => startDateError.value || startTimeError.value || endDateError.value || endTimeError.value,
)

onMounted(() => {
    if (receiveType.value === undefined) receiveType.value = radioOptions[0].value
    if (withoutEndDate.value === undefined) withoutEndDate.value = false
})

defineExpose({ formData })
</script>

<template>
    <div class="flex-column gap-12">
        <CustomInputContainer class="gap-7" title="Срок действия промокода" required>
            <div class="flex-column gap-2">
                <div class="flex-column gap-5">
                    <div class="promocodeDates flex-row gap-7">
                        <div class="promocodeDate">
                            <p class="titleDate b2">Дата начала</p>
                            <CustomDateTimePicker
                                v-model:modelDate="startDate"
                                v-model:modelTime="startTime"
                                :dateError="startDateError"
                                :timeError="startTimeError"
                                nameDate="startDate"
                                nameTime="startTime"
                            />
                        </div>

                        <div class="promocodeDate" v-if="!withoutEndDate">
                            <p class="titleDate b2">Дата конца</p>
                            <CustomDateTimePicker
                                v-model:modelDate="endDate"
                                v-model:modelTime="endTime"
                                :dateError="endDateError"
                                :timeError="endTimeError"
                                nameDate="endDate"
                                nameTime="endTime"
                            />
                        </div>
                    </div>

                    <CustomCheckbox title="Без даты конца" name="withoutEndDate" />
                </div>
                <p class="errorMessage c2">
                    {{ errorMessage }}
                </p>
            </div>
        </CustomInputContainer>

        <div class="divider"></div>

        <CustomInputField
            name="activationLimit"
            type="number"
            title="Введите лимит активаций (шт.)"
            placeholder="Введите лимит активаций"
            required
        />

        <CustomRadioGroup name="receiveType" title="Настроить получение промокода" :items="radioOptions" />
    </div>
</template>

<style scoped>
.promocodeDates {
    flex-wrap: wrap;
}

.promocodeDate {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
}

.titleDate {
    color: var(--text-color-1);
}
</style>
