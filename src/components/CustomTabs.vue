<script setup lang="ts">
defineProps<{
    tabs: { name: string }[]
    activeTab: number
}>()

const emit = defineEmits<{
    (e: 'click', index: number): void
}>()

const handleClick = (index: number) => {
    emit('click', index)
}
</script>

<template>
    <div class="customTabs">
        <button
            v-for="(tab, index) in tabs"
            :key="'tab-' + index"
            :class="['customTab', 'b2', activeTab === index && 'customTab--active']"
            @click="handleClick(index)"
            type="button"
        >
            {{ tab.name }}
        </button>
    </div>
</template>

<style scoped>
.customTabs {
    display: inline-flex;
    padding-inline: 0.75rem;
    gap: 0.625rem;
    border-bottom: 1px solid var(--stroke-color-2);
}

.customTab {
    position: relative;
    flex: 1;
    height: var(--tab-height);
    border: none;
    outline-offset: 3px;
    margin-bottom: -1px;
    background-color: transparent;
    color: var(--text-color-3);
    transition: 0.2s ease color;
}

.customTab:hover,
.customTab--active {
    color: var(--active-color);
}

.customTab--active {
    font-weight: 600;
}

.customTab--active::after {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    content: '';
    background-color: var(--active-color);
    animation: slide-left 0.4s ease forwards;
}

@keyframes slide-left {
    from {
        width: 0;
    }

    to {
        width: 100%;
    }
}
</style>
