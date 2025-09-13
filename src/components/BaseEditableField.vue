<script setup lang="ts"></script>

<template>
  <div class="field">
    <p class="content">Clément Charbonnel</p>
    <div class="edit-message">
      <span class="material-icons edit-icon">edit</span>
      Click to edit
    </div>
  </div>
</template>

<style scoped>
.field {
  position: relative;
}

.field:hover {
  cursor: pointer;
}

.content {
  font-size: 2rem;
}

.edit-message {
  opacity: 0;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: hsla(0, 0%, 70%, 0.8);
  transition: opacity 0.2s;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  translate: -5px 5px;
  width: calc(100% + 10px);
}

.field:hover .edit-message {
  opacity: 1;
}

.field::after {
  content: '';
  position: absolute;
  display: inline-block;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  border-radius: 8px;
  box-shadow: 0 0 0 0 transparent;
  pointer-events: none;
  transition: box-shadow 0.2s;
}

.field:hover::after {
  box-shadow: 0 0 0 1px hsla(0, 0%, 70%, 0.8);
  border-radius: 8px;
}

.edit-icon {
  font-size: 1rem;
  translate: 0 13%;
  margin-right: 3px;
}
</style>
