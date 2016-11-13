// import {copy} from 'cerebral/operators'

import getCache from '../../../factories/getCache'

// import loadData from '../actions/loadData'

export default [
  // loadData,
  getCache('https://api.github.com'), {
    success: [

    ],
    error: [

    ]
  }
]
