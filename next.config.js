const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['api'] = path.join(__dirname, 'api')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['features'] = path.join(__dirname, 'features')
    config.resolve.alias['__tests__'] = path.join(__dirname, '__tests__')

    return config
  },
}
