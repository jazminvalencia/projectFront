'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"http://localhost:5678/"',
  BROADCAST_DRIVER: '"ws://68.183.129.113:40001"'
})
