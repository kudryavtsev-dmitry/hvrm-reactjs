import * as Yup from 'yup'
import { loginRegExp, onlyTextRegExp, passRegExp } from 'utils/validation/regExps'

const registrationSchema = Yup.object().shape({
  login: Yup.string()
    .matches(loginRegExp, 'Only text, numbers, and - _ symbols')
    .required('Enter login')
    .min(3, 'Must be longer than 2 characters')
    .max(16, 'Nice try, nobody has a login that long'),

  password: Yup.string()
    .required('Enter password')
    .min(3, 'Password is too short - should be 3 chars minimum.')
    .matches(passRegExp, 'Only a-z A-Z 0-9'),

  email: Yup.string().required('Enter email').email('Invalid email address'),

  firstName: Yup.string()
    .required('Enter first name')
    .min(2, 'first name should be 2 chars minimum.')
    .matches(onlyTextRegExp, 'Only text'),

  lastName: Yup.string()
      .required('Enter last name')
    .min(3, 'last name should be 3 chars minimum.')
    .matches(onlyTextRegExp, 'Only text'),
})
export default registrationSchema
