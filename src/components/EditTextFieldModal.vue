<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { useFieldStore } from '@/stores/field.ts'
import BaseButton from '@/components/BaseButton.vue'

const fieldStore = useFieldStore()

const modal = useTemplateRef('modal')

const editedValue = ref('')

function saveField(): void {
  fieldStore.updateActiveFieldValue(editedValue.value)
}

function closeModal(): void {
  modal.value?.close()
}

function saveAndClose(): void {
  saveField()
  closeModal()
}

function openModal(): void {
  editedValue.value = fieldStore.activeField?.value
  modal.value?.showModal()
}

defineExpose({
  openModal,
  closeModal,
})
</script>

<template>
  <dialog class="modal" ref="modal">
    <h2>Edit {{ fieldStore.activeField.name }}</h2>
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
  background-color: hsla(222deg, 20%, 60%, 0.4);
}

.modal {
  border: var(--modal-border);
  outline: none;
  border-radius: 16px;
  box-shadow: var(--modal-shadow);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: white;
  padding: 16px;
}

h2 {
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
  border-color: var(--cv-primary);
  box-shadow: 0 0 4px var(--cv-primary);
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
