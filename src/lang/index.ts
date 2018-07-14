const requireLang = require.context(
  '@/lang',
  true,
  /\.json$/
)

interface Messages {
  [name: string]: {}
}

const messages: Messages = {}

for (const file of requireLang.keys()) {
  if (file === './index.js') continue

  const path = file.replace(/(\.\/|\.json$)/g, '').split('/')

  path.reduce((o, s, i) => {
    o[s] = i + 1 === path.length
      ? requireLang(file)
      : {}

    return o[s]
  }, messages)
}

export default messages
