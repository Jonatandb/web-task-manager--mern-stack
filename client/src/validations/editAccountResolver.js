import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import roles from '../helpers/roles'

const schema = yup.object().shape({
  name: yup.string('El nombre debe ser un texto').required('Debe ingresar un nombre'),
  email: yup
    .string('El email debe ser un texto')
    .email('Debe ingresar un email válido')
    .required('Debe ingresar un email válido'),
  role: yup
    .string('El rol debe ser un texto')
    .oneOf(Object.keys(roles), 'El rol no es válido, elija otro'),
})

export default yupResolver(schema)
