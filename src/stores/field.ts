import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface Field {
  id: number
  name: string
  type: string
  value: string
}

export type FieldsGroup = {
  [key: string]: Field | FieldsGroup
}

export const useFieldStore = defineStore('fields', () => {
  let nextId = 0
  function generateField(name: string, type: string, value: string): Field {
    return { id: nextId++, name, type, value }
  }

  // Initial fields in the cv
  const fields = ref<FieldsGroup>({
    name: generateField('Full Name', 'text', 'Full Name'),
    contact: {
      email: generateField('Email', 'text', 'exemple@gmail.com'),
      phone: generateField('Phone', 'text', '+1 234 567 890'),
      address: generateField('Address', 'text', '123 Main St, City, Country'),
    },
    summary: generateField('Summary', 'text', 'A brief summary about yourself.'),
  })

  // Active field for editing
  const activeField = ref<Field>(fields.value.name)

  function setActiveField(field: Field) {
    activeField.value = { ...field }
  }

  function updateActiveFieldValue(value: string) {
    if (!activeField.value) return

    Object.values(fields.value).find((field) => field.id === activeField.value.id).value = value
  }

  return {
    fields,
    activeField,
    setActiveField,
    updateActiveFieldValue,
  }
})
