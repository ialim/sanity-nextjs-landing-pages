const sanityClient = require('@sanity/client')
const client = sanityClient({
  projectId: 'dm97i06z',
  dataset: 'production',
  token: '', // or leave blank to be anonymous user
  useCdn: false // `false` if you want to ensure fresh data
})

module.exports = client
