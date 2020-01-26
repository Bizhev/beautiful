<template>
  <section>
    <div ref="box"></div>
  </section>
</template>
<script>
import app from './partials'

export default {
  name: 'TheSectionDust',
  mounted() {
    this.$refs.box.appendChild(app.app.view)
  }
}
</script>
<style lang="scss" scoped>
section {
  background-color: #ccc;
}
</style>
