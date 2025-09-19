<script setup lang="ts">
import TextField from '@/components/TextField.vue'
import EditTextFieldModal from '@/components/EditTextFieldModal.vue'
import { onMounted, provide, useTemplateRef } from 'vue'
import { type Field, useFieldStore } from '@/stores/field.ts'
import { getElementPosition } from '@/utils/DOMUtils.ts'

const editTextFieldModal = useTemplateRef('editTextFieldModal')

const fieldStore = useFieldStore()

function getElementPosition(element: HTMLElement): { x: number; y: number } {
  const rect = element.getBoundingClientRect()
  return {
    x: rect.left + window.scrollX,
    y: rect.top + window.scrollY,
  }
}

function openEditTextFieldModal(field: Field, event: Event): void {
  fieldStore.setActiveField(field)
  const elementPosition = getElementPosition(event.target as HTMLElement)
  editTextFieldModal.value?.openModal(elementPosition)
}

onMounted(() => {
  document.addEventListener('mousemove', () => {
    if (document.activeElement?.classList.contains('field')) {
      ;(document.activeElement as HTMLTextAreaElement).blur()
    }
  })
})

provide('openEditTextFieldModal', openEditTextFieldModal)
</script>

<template>
  <main class="cv">
    <div class="personal-info">
      <TextField class="field" v-for="field in fieldStore.fields" :key="field.id" :field="field">
      </TextField>
    </div>
    <div class="experiences"></div>
  </main>
  <EditTextFieldModal ref="editTextFieldModal"></EditTextFieldModal>
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
  --card-border: 1px solid hsl(0, 0%, 50%);
  --button-shadow: 0 2px 2px hsla(0, 0%, 0%, 0.15), 0 4px 4px hsla(0, 0%, 0%, 0.05);

  --modal-shadow: 0 4px 10px hsla(0, 0%, 0%, 0.2);
  --modal-border: 1px solid hsl(0, 0%, 60%);

  --cv-background: white;
  --cv-primary: #175dc8;

  --positive: #008e5c;
  --positive-dark: #006846;
  --negative: #e83829;
  --negative-dark: #ac2b1f;

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
