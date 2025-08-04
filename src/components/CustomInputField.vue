<script setup lang="ts">
import { computed, type InputTypeHTMLAttribute } from 'vue'
import { useField } from 'vee-validate'
import CustomInputContainer from './CustomInputContainer.vue'

const props = defineProps<{
    type?: InputTypeHTMLAttribute | 'textarea'
    name: string
    title?: string
    placeholder?: string
    required?: boolean
    maxlength?: number
    autocomplete?: 'on' | 'off'
}>()

const { value, errorMessage } = useField<string | number | null>(() => props.name)

const isTextarea = computed(() => props.type === 'textarea')
const max = computed(() => props.maxlength ?? 250)
const length = computed(() => (typeof value.value === 'string' ? value.value.length : 0))
const hasError = computed(() => !!errorMessage.value)
</script>

<template>
    <CustomInputContainer :title="title" :required="required">
        <div class="flex-column gap-2">
            <div v-if="isTextarea" class="flex-column gap-2">
                <textarea
                    v-model="value"
                    :name="name"
                    class="customTextarea b2"
                    :class="{ error: hasError }"
                    :placeholder="placeholder"
                    :maxlength="max"
                />
                <p class="customTextareaLength c2" :class="{ error: hasError }">{{ length }}/{{ max }}</p>
            </div>

            <label v-else class="customInputLabel" :class="{ error: hasError }">
                <slot name="left" />
                <input
                    v-model="value"
                    :type="type || 'text'"
                    :name="name"
                    class="customInput b2"
                    :placeholder="placeholder"
                    :autocomplete="autocomplete"
                    :maxlength="maxlength"
                />
                <slot name="right" />
            </label>

            <p class="errorMessage c2" v-if="errorMessage">{{ errorMessage }}</p>
        </div>
    </CustomInputContainer>
</template>

<style scoped>
.customTextarea,
.customInputLabel {
    display: flex;
    width: 100%;
    padding-inline: 0.75rem;
    gap: 0.5rem;
    border: none;
    border-radius: 0.75rem;
    background-color: var(--surface-3);
    cursor: text;
}

.customInputLabel {
    flex-direction: row;
    align-items: center;
    height: var(--input-height);
}

.customInputLabel:focus-within {
    outline: auto;
}

.customInput {
    flex: 1;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
}

.customInput::placeholder {
    color: var(--text-color-2);
}

.customTextarea {
    flex-direction: column;
    height: var(--textarea-height);
    padding-block: 1rem;
    resize: vertical;
}

.customTextarea::placeholder {
    color: var(--text-color-4);
}

.customTextareaLength {
    margin-left: auto;
    color: var(--text-color-3);
}

.customTextareaLength.error {
    color: var(--error-color);
}

.customInputLabel.error,
.customTextarea.error {
    border: 1px solid var(--error-color);
    outline-color: var(--error-color);
}
</style>
