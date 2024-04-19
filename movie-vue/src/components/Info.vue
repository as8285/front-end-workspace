<template>자식에서 보여줌:{{ data }}</template>
<script>
export default {
  name: "InfoComponent",
  props: {
    data: Object,
  },
  data() {
    return {
      childMessage: "하위 컴포넌트에서 상위 컴포넌트로!",
    };
  },
  // <info :data="movie" @child="childHandler" /> 로  app에 상위에 저장을 시켜줘야함
  created() {
    // 상위에서 올라올때 sendParent를 호출 시킴
    this.sendParent();
  },
  // 하위 ->상위
  methods: {
    sendParent() {
      // $ -> (부모, 그리고 하위 )
      this.$emit("child", this.childMessage);
    },
  },
};
</script>
<style></style>
