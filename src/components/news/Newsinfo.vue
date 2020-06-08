<template>
  <div>
      {{id}}
      <comment></comment>   
  </div>
</template>

<script type="text/ecmascript-6">
import comment from "../subcomponents/comment.vue"
export default {
  data() {
    return {
        id:this.$route.params.id,
    }
  },
  components: {
      comment
  }
}
</script>

<style scoped lang="scss">
</style>
