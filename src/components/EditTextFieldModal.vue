<script setup lang="ts">
import { useTemplateRef } from 'vue'

const modal = useTemplateRef('modal')

function closeModal(): void {
  modal.value?.close()
}

function openModal(): void {
  modal.value?.showModal()
}

defineExpose({
  openModal,
  closeModal,
})
</script>
Ò
<template>
  <dialog class="modal" ref="modal"></dialog>
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
