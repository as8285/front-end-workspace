<template>
  <div>
    <a href="#">영화 목록</a>
    <a href="/create">영화 정보 추가</a>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
};
</script>
<style scoped>
div {
  width: 900px;
  margin: auto;
  margin-top: 20pxe;
  display: flex;
  justify-content: space-evenly;
}
</style>
