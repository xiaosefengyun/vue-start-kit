<template>
  <div>
    {{ $t('lang.hello') }}
    <Hello></Hello>
    <el-button class="btn">Element按钮</el-button>
  </div>
</template>
<script>
import Hello from '../../components/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>
<style lang="scss">
  div {
    text-align: center;
    margin-top: 40px;
  }
  .btn {
    margin-top: 40px;
  }
</style>
