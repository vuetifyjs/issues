<template>
  <core-card title="Bug Report">
    <template slot="actions">
      <v-divider class="mx-3" />
      <v-chip
        v-for="(chip, i) in chips"
        :key="i"
        small
      >
        <v-avatar :color="chip.color">
          <v-img
            v-if="chip.src"
            :height="chip.height"
            :src="require(`@/assets/${chip.src}`)"
            contain
          />
          <v-icon
            v-else-if="chip.icon"
            class="white--text"
            v-text="chip.icon"
          />
        </v-avatar>
        <span v-text="chip.text" />
      </v-chip>
    </template>
    <v-form>
      <v-container fluid>
        <v-layout wrap>
          <v-flex
            py-0
            xs12
          >
            <v-text-field
              ref="reproductionLink"
              :hint="reproductionHint"
              :rules="[rules.validRepro]"
              flat
              label="Reproduction link"
              persistent-hint
              box
            />
          </v-flex>
          <v-flex xs12 py-0>
            <v-checkbox
              v-model="usedToWork"
              label="This used to work"
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
              flat
              persistent-hint
              box
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
        validRepro: v =>
          /https?:\/\/.*(github|codepen|codesandbox)/.test(v) ||
          'Please only use Codepen, CodeSandbox or a github repo'
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
      ]),
      chips () {
        return [
          {
            color: 'red',
            icon: 'mdi-bug',
            text: 'Bug'
          },
          {
            color: 'blue darken-4',
            height: 18,
            src: 'v-alt.svg',
            text: this.vuetifyVersion
          },
          {
            color: 'green lighten-5',
            height: 32,
            src: 'vue.png',
            text: this.vueVersion
          }
        ]
      }
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
