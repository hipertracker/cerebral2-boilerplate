// import {copy} from 'cerebral/operators'
// import getCache from '../../../factories/getCache'
// import loadData from '../actions/loadData'
import getHttp from '../../../factories/getHttp'

export default [
  getHttp('https://api.github.com'), {
    success: [

    ],
    error: [

    ]
  }
]
