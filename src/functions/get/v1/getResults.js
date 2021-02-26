  'use strict'
  const response = require('../../common/jsonResponse')
  const data = require('../../../../resources/sampleData.json')
  
  module.exports.handler = async event => {
      const {ok,serverError} = response
      try {
          const messages = data.map(entry => entry.message)
      return ok(messages)  
      } catch (error) {
          console.log(error)
          return serverError(error)
      }
  }
  