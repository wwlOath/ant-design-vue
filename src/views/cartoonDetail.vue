<template id="myiframe">
  <div>
    <iframe :src="baseUrl" frameborder="0" width="100%" style="height: 580px"></iframe>
  </div>
</template>

<style lang="less">

</style>

<script>
  export default {
    name: '',
    data() {
      return {
        baseUrl: '',
        screenHeight: 0
      }
    },
    methods: {},
    mounted() {
      this.baseUrl = this.$route.query.url;
      this.screenHeight = document.body.clientHeight
      window.onresize = () => {
        return (() => {
          this.screenHeight = document.body.clientHeight
        })()
      }
    }
  }

</script>
