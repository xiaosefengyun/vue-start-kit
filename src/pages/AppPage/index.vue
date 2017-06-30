<template>
  <div>
    {{ $t('lang.hello') }}
    <Hello></Hello>
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
</style>
