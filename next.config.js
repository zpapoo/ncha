const path = require('path')

module.exports = {
  webpack(config, options) {
    const { alias } = config.resolve

    alias['api'] = path.join(__dirname, 'api')
    alias['utils'] = path.join(__dirname, 'utils')
    alias['hooks'] = path.join(__dirname, 'hooks')
    alias['components'] = path.join(__dirname, 'components')
    alias['features'] = path.join(__dirname, 'features')
    alias['__tests__'] = path.join(__dirname, '__tests__')

    return config
  },
}
