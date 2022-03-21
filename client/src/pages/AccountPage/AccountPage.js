import { useState } from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import useAuth from '../../auth/useAuth'
import DeleteModal from './components/DeleteModal'

export default function AccountPage() {
  const { user } = useAuth()
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
  const openDeleteModal = () => setIsOpenDeleteModal(true)
  const closeDeleteModal = () => setIsOpenDeleteModal(false)
  return (
    <>
      <Container>
        <Row>
          <Col xs={12} className='mt-3 text-center'>
            <img
              src='/img/male_avatar.svg'
              alt='profile'
              style={{ width: '200px', height: '200px', borderRadius: '50%', objectFit: 'cover' }}
            />
          </Col>
          <Col className='mt-4'>
            <Card style={{ maxWidth: '360px' }} className='mx-auto p-4'>
              <p className='text-center'>
                <b>Nombre: </b>
                {user.name}
              </p>{' '}
              <p className='text-center'>
                <b>Correo: </b>
                {user.email}
              </p>{' '}
              <p className='text-center'>
                <b>Rol: </b>
                {user.role}
              </p>
              <Button variant='warning'>Editar cuenta</Button>
              <Button variant='link' className='mt-1'>
                Cambiar contraseña
              </Button>
              <Button variant='link' className='mt-3 text-danger' onClick={openDeleteModal}>
                Eliminar cuenta
              </Button>
            </Card>
          </Col>
        </Row>
      </Container>
      <DeleteModal isOpen={isOpenDeleteModal} close={closeDeleteModal} />
    </>
  )
}
