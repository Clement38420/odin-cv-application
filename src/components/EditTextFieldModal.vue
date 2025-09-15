<script setup lang="ts">
import { ref, useTemplateRef } from 'vue'
import { useFieldStore } from '@/stores/field.ts'

const fieldStore = useFieldStore()

const modal = useTemplateRef('modal')

const editedValue = ref('')

function closeModal(): void {
  fieldStore.updateActiveFieldValue(editedValue.value)
  modal.value?.close()
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
    <input type="text" v-model="editedValue" />
    <button @click="closeModal">Valider</button>
  </dialog>
</template>

<style scoped>
.modal::backdrop {
  background-color: hsla(222deg, 47%, 11%, 0.4);
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
  width: 500px;
  height: 600px;
  background-color: white;
}
</style>
