<template>
  <div>
    {{ $t('lang.hello') }}
    <Hello></Hello>
    <el-button class="btn">Element按钮</el-button>
    <p>
      {{ count }}
      <el-button class="btn" @click="add">+</el-button>
      <el-button class="btn" @click="deleteItem">-</el-button>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Hello from '../../components/Hello';

export default {
  name: 'app',
  computed: {
    ...mapGetters({
      count: 'count',
    }),
  },
  methods: {
    add() {
      this.$store.commit('inc');
    },
    deleteItem() {
      this.$store.commit('dec');
    },
  },
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
