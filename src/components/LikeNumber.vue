<template>
<div>
  <p> いいね（{{totalNumber/2}}）</p>
  <button @click="increment"> +1</button>
</div>
</template>

<script>
export default{
  props: ['totalNumber'],

  data: function(){
    return{
      number: 5
    }
  },
  methods: {
    increment(){
     this.$emit("my-click", this.totalNumber + 1 );
    }
  }
}
</script>

<style scoped>
div{
  border: solid red 1px;
}
</style>


