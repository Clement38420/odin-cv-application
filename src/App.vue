<script setup lang="ts">
import BaseEditableField from '@/components/BaseEditableField.vue'
</script>

<template>
  <main class="cv">
    <div class="personal-info">
      <BaseEditableField></BaseEditableField>
    </div>
    <div class="experiences"></div>
  </main>
</template>

<style>
:root {
  --bg: hsl(0, 0%, 95%);
  --bg-light: hsl(0, 0%, 100%);
  --bg-dark: hsl(0, 0%, 90%);

  --text: hsl(0, 0%, 5%);
  --text-muted: hsl(0, 0%, 40%);
  --text-light: hsl(0, 0%, 95%);

  --card-shadow: 0 2px 2px hsla(0, 0%, 0%, 0.15), 0 4px 4px hsla(0, 0%, 0%, 0.05);

  --cv-background: white;
  --cv-primary: #175dc8;

  font-family: sans-serif;
  color: var(--text);
}

body {
  background-color: var(--bg);
}

.cv {
  position: absolute;
  left: 50%;
  top: 50%;
  translate: -50% -50%;
  background-color: var(--cv-background);
  aspect-ratio: 1 / 1.414;
  height: 80vh;
  width: auto;
  box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.15);

  display: grid;
  grid-template-columns: 1fr 2fr;
}

.personal-info {
  background-color: var(--cv-primary);
  padding: 16px;
}

.personal-info * {
  color: var(--text-light);
}
</style>
