<template>
  <section>
    示例组件
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
