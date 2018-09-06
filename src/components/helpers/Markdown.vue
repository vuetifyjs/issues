<script>
// Libs
  import marked from 'marked'

  // Types
  import Vue from 'vue'

  export default Vue.extend({
    functional: true,

    props: {
      source: {
        type: String,
        default: ''
      }
    },

    render (h, ctx) {
      let code = ctx.props.source

      if (ctx.children) {
        const text = ctx.children[0].text || ''
        code = text
      }

      return h('div', {
        domProps: { innerHTML: marked(code) },
        ...ctx.data
      })
    }
  })
</script>
