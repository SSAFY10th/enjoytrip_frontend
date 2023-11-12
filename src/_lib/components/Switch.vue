<script setup>
/*
type Option = {
  key: string,
  value: string
}
*/
defineProps(['selectedOption', 'options', 'onChange'])
</script>

<template>
  <div class="toggle-container" v-for="option in options" :key="option.key">
    <input
      type="radio"
      class="toggle-input input"
      name="SwitchRadio"
      :id="option.key"
      :checked="selectedOption === option.key"
      :onChange="() => onChange(option.key)"
    />
    <label class="toggle-label" :for="option.key">{{ option.value }}</label>
  </div>
</template>

<style scoped>
.toggle {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 8px 16px;
  background-color: var(--color-primary);
}

.toggle-container {
  width: 100%;
  display: flex;
  align-items: center;
}

.toggle-input {
  display: none;
}

.toggle-label {
  width: 100%;
  cursor: pointer;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.toggle-input:checked + .toggle-label {
  background-color: var(--color-primary);
  color: #fff;
  font-weight: 800;
}
</style>
