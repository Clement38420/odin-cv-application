<script setup lang="ts">
import { onMounted, ref, useTemplateRef } from 'vue'
import { useFieldStore } from '@/stores/field.ts'
import BaseButton from '@/components/BaseButton.vue'

const fieldStore = useFieldStore()

const modal = useTemplateRef('modal')

const editedValue = ref('')
const modalPosition = ref({ left: '0', top: '0' })

function saveField(): void {
  fieldStore.updateActiveFieldValue(editedValue.value)
}

function closeModal(): void {
  modal.value?.classList.remove('shown')
  setTimeout(() => modal.value?.close(), 200)
}

function saveAndClose(): void {
  saveField()
  closeModal()
}

function openModal(position: { x: number; y: number }): void {
  editedValue.value = fieldStore.activeField?.value
  modalPosition.value = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  }
  modal.value?.showModal()
  modal.value?.classList.add('shown')
}

onMounted(() => {
  modal.value?.addEventListener('click', (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      e.stopPropagation()
      closeModal()
    }
  })
})

defineExpose({
  openModal,
  closeModal,
})
</script>

<template>
  <dialog class="modal" ref="modal" :style="modalPosition" @keydown.esc.prevent="closeModal">
    <textarea v-model="editedValue" />
    <div class="buttons-container">
      <BaseButton class="button" type="negative" @click="closeModal" outlined>
        <span class="material-icons">close</span> Quit
      </BaseButton>
      <BaseButton class="button" type="positive" @click="saveAndClose">
        <span class="material-icons">check</span> Save
      </BaseButton>
    </div>
  </dialog>
</template>

<style scoped>
.modal::backdrop {
  background-color: hsla(0, 0%, 0%, 0);
}

.modal {
  border: var(--modal-border);
  outline: none;
  border-radius: 16px;
  box-shadow: var(--modal-shadow);
  position: fixed;
  translate: 0 -50%;
  width: 300px;
  background-color: white;
  padding: 16px;
  transform-origin: center left;
  transform: translateX(0) scale(0);
  opacity: 0;
  transition:
    transform 0.2s,
    opacity 0.2s;
}

.modal.shown {
  transform: translateX(50%) scale(1);
  opacity: 1;
}

h2 {
  font-size: 1.2em;
  margin: 0 0 16px 0;
}

textarea {
  resize: none;
  display: block;
  width: 100%;
  height: 5em;
  padding: 4px 12px;
  border-radius: 12px;
  border: 1px solid var(--text-muted);
}

textarea:focus {
  border-color: var(--cv-color-background);
  box-shadow: 0 0 4px var(--cv-color-background);
  outline: none;
}

.buttons-container {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}

.button {
  height: 2em;
  width: 90px;
}
</style>
