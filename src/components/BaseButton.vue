<script setup lang="ts">
defineProps<{
  type: 'positive' | 'negative' | 'default'
  outlined?: boolean
}>()

const buttonTextColor = {
  positive: 'white',
  negative: 'white',
  default: 'white',
}
</script>

<template>
  <button :class="[type, { outlined }]" :style="!outlined ? { color: buttonTextColor[type] } : ''">
    <slot></slot>
  </button>
</template>

<style scoped>
button.outlined {
  background-color: white;
  color: var(--button-color);
}

button.negative {
  --button-color: var(--negative);
}

button.positive {
  --button-color: var(--positive);
}

button.default {
  --button-color: var(--text-muted);
  color: var(--text);
}

button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 0.8em;
  box-shadow: var(--button-shadow);
  transition:
    box-shadow 0.1s,
    transform 0.1s;
  background-color: var(--button-color);
  border: 1px solid var(--button-color);
}

button:hover,
button:focus {
  transform: translateY(-2px) scale(1.04);
  box-shadow:
    0 4px 4px hsla(0, 0%, 0%, 0.15),
    0 8px 8px hsla(0, 0%, 0%, 0.05),
    0 0 3px var(--button-color);
}

button:focus {
  outline: none;
}

button:active {
  transform: translateY(2px) scale(0.98);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.25);
}
</style>
