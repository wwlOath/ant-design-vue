<template>
  <div>
    <a-layout id="layout-default" class="layout-default">

      <DefaultHeader></DefaultHeader>

      <a-layout-content>
        <router-view />
      </a-layout-content>

      <DefaultFooter></DefaultFooter>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<style lang="less">

</style>

<script>
  import DefaultHeader from '@/components/headers/defaultHeader';
  import DefaultFooter from '@/components/footers/defaultFooter';

  export default {
    name: '',
    data() {
      return {

      }
    },
    components: {
      DefaultHeader,
      DefaultFooter
    },
    methods: {},
    mounted() {

    }
  }

</script>
