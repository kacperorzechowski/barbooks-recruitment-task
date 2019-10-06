import { extend } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

export default () => {
  extend('required', required)
  extend('email', email)
}
