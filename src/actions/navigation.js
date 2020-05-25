import {
  NAVCHANGE,
} from '../constants/counter'

export const onChange = (value) => {
  return {
    type: NAVCHANGE,
    value
  }
}

