<template>
  <div>
    <h1>Page: {{id}}</h1>
    <div id='readme' v-html='readme'></div>
    <div id='code'>
      <PrismEditor
        class='code'
        v-model='code'
        :code='code'
        language='python'
        :line-numbers='lineNumbers'
      ></PrismEditor>
    </div>
    <button v-on:click='runCode()'>Run Code</button>
    <div id='output'>
      <PrismEditor :code='output' language='py'></PrismEditor>
    </div>
  </div>
</template>

<script>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import PrismEditor from 'vue-prism-editor'
import Api from '@/services/Api'

export default {
  name: 'Exercise',
  components: { PrismEditor },
  props: {
    id: { type: String }
  },
  data: function() {
    return {
      code: '',
      output: '',
      readme: '',
      lineNumbers: false
    }
  },
  created: function() {
    this.loadScript()
  },
  methods: {
    loadScript: function() {
      Api.loadScript(this.id).then(exercise => {
        this.code = exercise.script
        this.readme = exercise.readme
      })
    },
    runCode: function() {
      Api.runScript(this.code).then(data => {
        this.output = data.join('\n')
      })
    }
  }
}
</script>

<style scoped>
.code {
  max-height: 400px;
}
</style>
