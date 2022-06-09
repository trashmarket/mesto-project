import axios from 'axios';
import Promise from 'bluebird';
const methodsNoData = ['delete', 'get', 'head', 'options']
const methodsWithData = ['post', 'put', 'patch']

const axiosBluebird = {
  Promise,
}

methodsNoData.forEach(method => {
  axiosBluebird[method] = (url, params) => new Promise((fulfil, reject) => { // eslint-disable-line

    return axios
      [method](url, params)
      .then(fulfil)
      .catch(reject)
  })
})

methodsWithData.forEach(method => {
  axiosBluebird[method] = (url, params) => new Promise((fulfil, reject) => { // eslint-disable-line

    return axios
      [method](url, params)
      .then(fulfil)
      .catch(reject)
  })
})

export {axiosBluebird}