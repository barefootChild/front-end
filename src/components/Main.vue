<template>
  <div class="root_page">
    {{msg}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: 'hello my baby!'
    }
  },
  mounted () {
    console.log(this.message.msg)
  }
}
</script>
<style>
.root_page {
  height: 1800px;
}
</style>
