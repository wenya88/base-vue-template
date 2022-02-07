<template>
  <section>
    登录
    <example-com v-model="name" />
  </section>
</template>
<script>
import exampleCom from './example'
console.log(process.env.NODE_ENV)
export default {
  components: {
    exampleCom
  },
  data() {
    return {
      name: 'ya'
    }
  }
}
</script>
