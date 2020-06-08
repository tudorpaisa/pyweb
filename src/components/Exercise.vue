<template>
  <div>
    <v-row align='center' justify='center'>
      <v-col class='text-left'>
        <div id='readme' v-html='readme'></div>
        <div id='code'>
          <v-row>
            <v-col class='text-left'>
              <MonacoEditor
                v-model='code'
                height='300'
                :code='code'
                theme='vs-dark'
                :options='options'
                language='python'
              ></MonacoEditor>
            </v-col>
          </v-row>
        </div>
        <v-btn v-on:click='runCode()'>Run Code</v-btn>
        <div id='output'>
          <v-row>
            <v-col class='text-left'>
              <MonacoEditor
                v-model='output'
                height='300'
                :code='output'
                theme='vs-dark'
                language='python'
              ></MonacoEditor>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Api from '@/services/Api'
import MonacoEditor from 'monaco-editor-vue'

export default {
  name: 'Exercise',
  components: { MonacoEditor },
  props: {
    id: { type: String }
  },
  data: function() {
    return {
      code: '',
      output: '',
      readme: '',
      options: {
        tabCompletion: 'on'
      }
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
  },
  updated: function() {}
}
</script>

<style>
#code {
  text-align: left;
}
code {
  font-family: 'Roboto Mono', monospace;
  background-color: var(--base00) !important;
  color: var(--base06) !important;
}
</style>
