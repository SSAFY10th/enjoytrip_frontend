<template>
  <div id="container">
    <slot></slot>
  </div>
</template>

<style scoped>
#container {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 30px auto 0;
}
</style>
