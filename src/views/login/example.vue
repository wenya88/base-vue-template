<template>
  <section>
    {{ value }}

    {{ $attrs }}
  </section>
</template>
<script>
export default {
  props: {
    value: {
      default: null
    }
  }
}
</script>
