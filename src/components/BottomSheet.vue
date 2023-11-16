<script setup>
import { useBottomSheet } from '../hooks/useBottomSheet'

const { isShowBottomSheet, handleOpenBottomSheet } = useBottomSheet()
</script>

<template>
  <div id="container">
    <div id="handleBar" @click="handleOpenBottomSheet">
      <div id="iconContainer">
        <div id="icon"></div>
      </div>
    </div>
    <div class="text-center rounded-xl">
      <v-bottom-sheet v-model="isShowBottomSheet">
        <v-card class="text-center" height="550">
          <v-card-text>
            <slot></slot>
          </v-card-text>
        </v-card>
      </v-bottom-sheet>
    </div>
  </div>
</template>

<style scoped>
#handleBar {
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
  height: 40px;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid var(--color-gray);
  cursor: pointer;
}

#iconContainer {
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
}

#icon {
  width: 60px;
  height: 10px;
  border-radius: 3px;
  background-color: var(--color-gray);
}
</style>
