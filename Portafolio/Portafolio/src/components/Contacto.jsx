import { Form, Container, Button } from "react-bootstrap"


export const Contacto = () => {
  return (
    <Container className="my-5"> {/* Container para centrar y añadir padding */}
      <h1 className="text-center mb-4">Contacto</h1>
      
      <Form>
        <Form.Group controlId="formNombre" className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>

        <Form.Group controlId="formApellidos" className="mb-3">
          <Form.Label>Apellidos</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tus apellidos" />
        </Form.Group>

        <Form.Group controlId="formEmail" className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="email@ejemplo.com" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu email con nadie más.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formMensaje" className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={5} placeholder="Escribe tu mensaje..." />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Mensaje
        </Button>
      </Form>
    </Container>
  )
}
