import { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'
import useAuth from '../../../auth/useAuth'

export default function ProfilePicModal({ isOpen, close }) {
  const [selectedFile, setSelectedFile] = useState(null)
  const { updateUser } = useAuth()

  const handleFileChange = e => {
    const [file] = e.target.files
    const SIZE_5MB = 5 * 1024 * 1024
    const isNameOfOneImageRegEx = /.(jpe?g|gif|png)$/i //Expresión regular para saber si el nombre de un archivo termina en .jpg, jpeg, gif, png

    if (file) {
      const isValidSize = file.size < SIZE_5MB
      const isValidType = isNameOfOneImageRegEx.test(file.name)

      if (!isValidSize) return toast.error('Imagen muy pesada, máximo 5Mb')

      if (!isValidType) return toast.error('Solo puedes subir imágenes (jpg, jpeg, gif, png)')

      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedFile(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleUpdateProfilePic = () => {
    if (!selectedFile) {
      toast.error('Debe seleccionar una nueva imagen')
      return
    }
    updateUser({ profilePic: selectedFile })
    close()
  }

  return (
    <Modal show={isOpen} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar foto de perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Control
              type='file'
              onChange={handleFileChange}
              accept='.jpg, .jpeg, .gif, .png'
              data-browse='Subir'
            />
          </Form.Group>
        </Form>
        {selectedFile && (
          <img className='img-fluid mt-2' src={selectedFile} alt='profile-preview' />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={close}>
          Cancelar
        </Button>
        <Button variant='primary' onClick={handleUpdateProfilePic}>
          Actualizar imagen
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
