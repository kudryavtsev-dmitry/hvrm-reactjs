import * as Yup from 'yup'
import { loginRegExp, passRegExp } from 'utils/validation/regExps'

const authSchema = Yup.object().shape({
  login: Yup.string()
    .matches(loginRegExp, 'Only text, numbers, and - _ symbols')
    .required('Enter login')
    .min(3, 'Must be longer than 2 characters')
    .max(16, 'Nice try, nobody has a login that long'),
  password: Yup.string()
    .required('Enter password')
    .min(3, 'Password is too short - should be 3 chars minimum.')
    .matches(passRegExp, 'Only a-z A-Z 0-9'),
})
export default authSchema
