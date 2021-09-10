<template>
  <section>
    Example
    <SubComponent />
  </section>
</template>
<script>
import SubComponent from './component/SubComponent'
export default {
  components: {
    SubComponent
  }
}
</script>
<style lang="scss">
@import './css/styles.scss';
</style>
