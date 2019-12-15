const path = require('path')

module.exports = {
  webpack(config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['features'] = path.join(__dirname, 'features')

    return config
  },
}