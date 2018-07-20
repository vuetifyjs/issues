<template>
  <core-card title="Issue Preview">
    <div class="mb-3 px-3 pt-3">
      <helpers-option
        :value="title || 'Preview'"
        title="Title"
      />

      <helpers-option
        :value="vuetifyVersion || 'Pending'"
        title="Vuetify version"
      />

      <helpers-option
        :value="vueVersion || 'Pending'"
        title="Vue version"
      />

      <helpers-option
        :value="browsers.join(', ')"
        title="Browsers"
      />

      <helpers-option
        :value="os.join(', ')"
        title="OS"
      />
    </div>

    <v-form>
      <v-container>
        <v-layout wrap>
          <v-flex
            py-0
            xs12
          >
            <v-text-field
              :hint="reproductionHint"
              :rules="[rules.validRepro]"
              background-color="primary lighten-3"
              color="black"
              flat
              label="Reproduction link"
              persistent-hint
              ref="reproductionLink"
              solo
            />
          </v-flex>
          <v-flex xs12 py-0>
            <v-checkbox
              label="This used to work"
              v-model="usedToWork"
            />
          </v-flex>
          <v-flex
            v-for="(item, i) in items"
            :key="i"
            xs12
            py-0
          >
            <v-textarea
              v-model="item.model"
              :label="item.label"
              :hint="markdownHint"
              :rules="item.rules"
              auto-grow
              background-color="primary lighten-3"
              color="black"
              flat
              persistent-hint
              solo
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>
    <v-divider />
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="primary"
        depressed
        @click="preview"
      >
        Preview
      </v-btn>
    </v-card-actions>
  </core-card>
</template>

<script>
  // Utilities
  import { mapState } from 'vuex'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    data () {
      const rules = {
        required: v => !!v || 'This field is required',
        requiredText: v => (v || '').trim().length || 'This field is required',
        requiredMultiple: v => !!v.length || 'This field is required',
        validRepro: v => /https?:\/\/.*(github|codepen|codesandbox)/.test(v) || 'Please only use Codepen, CodeSandbox or a github repo'
      }

      return {
        items: [
          {
            label: 'Expected Behavior',
            model: null,
            rules: [rules.requiredText]
          },
          {
            label: 'Actual Behavior',
            model: null,
            rules: [rules.requiredText]
          },
          {
            label: 'Reproduction Steps',
            model: null,
            rules: [rules.requiredText]
          },
          {
            label: 'Comments (optional)',
            model: null,
            rules: [rules.requiredText]
          }
        ],
        markdownHint: `You can use <a tabindex="-1" href="https://guides.github.com/features/mastering-markdown/" target="_blank">markdown</a>`,
        reproductionHint: `Please only use <a tabindex="-1" href="https://template.vuetifyjs.com/" target="_blank">Codepen</a>, <a href="https://codesandbox.io/s/vue" target="_blank">CodeSandbox</a> and if necessary, a github repository.`,
        rules,
        usedToWork: false
      }
    },

    computed: {
      ...mapState('issue', [
        'browsers',
        'os',
        'repository',
        'title',
        'type',
        'vuetifyVersion',
        'vueVersion'
      ])
    },

    mounted () {
      setTimeout(() => {
        this.$refs.reproductionLink.focus()
      }, 300)
    },

    methods: {
      preview () {
        //
      }
    }
  })
</script>
