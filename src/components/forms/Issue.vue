<script>
  export default {
    functional: true,

    render (h) {
      return [
        h('fields-version'),
        h('fields-operating-system'),
        h('fields-affected-browsers')
      ]
    }
  }
</script>
