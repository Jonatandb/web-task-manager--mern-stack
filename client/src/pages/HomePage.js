import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import routes from '../helpers/routes'

export default function HomePage() {
  return (
    <Container>
      <Row className='mt-5'>
        <Col xs={{ span: 12 }} md={{ span: 6 }} className='mb-5'>
          <h2>Bienvenid@ a Gestor de tareas</h2>
          <p>¡Aquí podrás gestionar tus proyectos!</p>
          <p>Agrega tus tareas, márcalas como terminadas, actualízalas o elimínalas.</p>
          <div>
            <Link to={routes.login}>Ingresa</Link> o
            <Button as={Link} to={routes.register} className='ms-1'>
              Crea una cuenta
            </Button>
          </div>
        </Col>
        <Col>
          <img className='img-fluid' src='/img/task-manager.svg' alt='gestor-de-tareas' />
          <p>¡Gestiona tu tiempo, mejora tu proactividad!</p>
        </Col>
      </Row>
    </Container>
  )
}
