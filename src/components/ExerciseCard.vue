<template>
  <div id='exerciseCard'>
    <h2 id='title' v-on:click='show()'>{{name}}</h2>
    <p v-if='isActive'>{{description}}</p>
    <p @click='go()'>Start</p>
  </div>
</template>

<script>
export default {
  name: 'ExerciseCard',
  props: {
    id: {
      type: String
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    difficulty: {
      type: Number
    }
  },
  data() {
    return {
      isActive: false
    }
  },
  created() {},
  methods: {
    show: function() {
      if (this.isActive) {
        this.isActive = false
      } else {
        this.isActive = true
      }
    },
    go: function() {
      this.$router.push({ name: 'Start', params: { id: `${this.id}` } })
    }
  }
}
</script>

<style scoped>
#exerciseCard {
  display: block;
  border-style: solid;
  border-color: var(--base01);
  border-radius: 15px;
  border-width: 1px;
  max-width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2em;
  -webkit-box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 30px -15px rgba(0, 0, 0, 0.75);
  text-align: center;
}

#title {
  font-size: 1.2em;
}
</style>
