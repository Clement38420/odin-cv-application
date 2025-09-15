import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Field {
  id: number
  name: string
  type: string
  value: string
}

function generateField(id: number, name: string, type: string, value: string): Field {
  return { id, name, type, value }
}

export const useFieldStore = defineStore('fields', () => {
  // Initial fields in the cv
  const fields = ref<Field[]>([
    generateField(0, 'Full Name', 'text', 'Full Name'),
    generateField(1, 'Age', 'text', 'Age'),
  ])

  // Active field for editing
  const activeField = ref<Field>(fields.value[0])

  function setActiveField(field: Field) {
    activeField.value = { ...field }
  }

  function updateActiveFieldValue(value: string) {
    if (!activeField.value) return

    const index = fields.value.findIndex((f) => f.id === activeField.value!.id)
    if (index !== -1) {
      fields.value[index].value = value
    }
  }

  return {
    fields,
    activeField,
    setActiveField,
    updateActiveFieldValue,
  }
})
