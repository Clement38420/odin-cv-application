<script setup lang="ts"></script>

<template>
  <div class="field" tabindex="0">
    <p class="content">
      <slot></slot>
    </p>
    <div class="edit-message">
      <span class="material-icons edit-icon">edit</span>
    </div>
  </div>
</template>

<style scoped>
.field {
  position: relative;

  --border-radius: min(0.7em, 8px);
  --edit-message-transition-time: 0.15s;
  --edit-message-color: hsla(0, 0%, 70%, 0.8);
}

.field:hover {
  cursor: pointer;
}

.field:active {
  --edit-message-color: hsla(0, 0%, 62%, 0.8);
}

.edit-message {
  opacity: 0;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--edit-message-color);
  transition: opacity var(--edit-message-transition-time);
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  translate: 5px -5px;
  height: calc(100% + 10px);
  padding: 0 5px;
}

.field:hover .edit-message,
.field:focus .edit-message {
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
  border-radius: var(--border-radius);
  box-shadow: 0 0 0 0 transparent;
  pointer-events: none;
  transition: box-shadow var(--edit-message-transition-time);
}

.field:hover::after,
.field:focus::after {
  box-shadow: 0 0 0 1px var(--edit-message-color);
}

.edit-icon {
  font-size: min(1em, 1rem);
}

.field:focus {
  outline: none; /* Supprime le contour de focus par défaut */
}
</style>
