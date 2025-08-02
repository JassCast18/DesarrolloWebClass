
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Servicios = () => {
  return (
    <Container className="my-5 py-5 animate_animated animate_fadeIn"> {/* Contenedor principal para centrar y añadir padding, con animación */}
      <h1 className="display-4 fw-bold text-center text-primary mb-5 animate_animated animate_fadeInDown">
        Mis Servicios: <span className="text-secondary">Transformando Ideas en Realidad Digital</span>
      </h1>

      <p className="lead text-center text-muted mb-5 animate_animated animate_fadeInUp">
        Ofrezco una gama completa de soluciones de desarrollo web, diseñadas para potenciar tu presencia en línea y optimizar tus operaciones.
        Mi objetivo es convertir tus visiones en productos digitales funcionales y atractivos.
      </p>

      <Row xs={1} md={2} lg={3} className="g-4 justify-content-center animate_animated animatefadeInUp animate_delay-1s">
        {/* Cuadrícula responsiva de tarjetas con espacio entre ellas, centrada */}
        {/* Servicio 1: Diseño Web (UX/UI) */}
        <Col className="d-flex"> {/* Usar d-flex para que las tarjetas tengan la misma altura */}
          <Card className="shadow-lg border-0 h-100 flex-fill"> {/* Sombra, sin borde, altura 100%, ocupa todo el espacio disponible */}
            <Card.Body className="text-center p-4">
              <i className="bi bi-palette-fill text-primary display-4 mb-3"></i> {/* Icono de Bootstrap Icons */}
              <Card.Title as="h2" className="fs-3 fw-bold text-dark mb-2">Diseño Web Impactante</Card.Title>
              <Card.Text className="text-muted">
                Creo interfaces de usuario (UI) atractivas y experiencias de usuario (UX) intuitivas que cautivan a tus visitantes desde el primer momento.
                Mi enfoque en el diseño centrado en el usuario asegura sitios web que no solo se ven bien, sino que son fáciles de navegar y usar.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Servicio 2: Desarrollo Web (Backend & Frontend) */}
        <Col className="d-flex">
          <Card className="shadow-lg border-0 h-100 flex-fill">
            <Card.Body className="text-center p-4">
              <i className="bi bi-code-slash text-success display-4 mb-3"></i> {/* Icono de Bootstrap Icons */}
              <Card.Title as="h2" className="fs-3 fw-bold text-dark mb-2">Desarrollo Web Completo</Card.Title>
              <Card.Text className="text-muted">
                Construyo tu presencia digital desde cero, desarrollando soluciones personalizadas tanto en el <strong>Backend</strong>
                (lógica del servidor, bases de datos) como en el <strong>Frontend</strong> (la interfaz interactiva).
                Implemento tecnologías modernas para asegurar funcionalidad, rendimiento y escalabilidad.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Servicio 3: Posicionamiento Web (SEO) */}
        <Col className="d-flex">
          <Card className="shadow-lg border-0 h-100 flex-fill">
            <Card.Body className="text-center p-4">
              <i className="bi bi-graph-up-arrow text-info display-4 mb-3"></i> {/* Icono de Bootstrap Icons */}
              <Card.Title as="h2" className="fs-3 fw-bold text-dark mb-2">Optimización para Buscadores (SEO)</Card.Title>
              <Card.Text className="text-muted">
                Me aseguro de que tu sitio web no solo exista, sino que sea <strong>visible</strong>.
                Implemento estrategias de SEO para mejorar tu posicionamiento en los motores de búsqueda como Google, atrayendo tráfico orgánico
                cualificado y conectando tu negocio con el público adecuado.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/*Sección de más Información */}
      <div className="text-center mt-5 animate_animated animate_fadeIn">
        <p className="fs-5 text-dark">
          ¿Listo para llevar tu proyecto al siguiente nivel?
        </p>
        <Link to="/contacto" className="btn btn-outline-primary btn-lg rounded-pill shadow-sm">
          Solicitar una Consulta <i className="bi bi-chat-dots"></i>
        </Link>
      </div>
    </Container>
  );
};