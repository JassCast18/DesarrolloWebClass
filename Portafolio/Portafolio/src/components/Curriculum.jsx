import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap'; // Importar componentes de React-Bootstrap
import { Link } from 'react-router-dom';

export const Curriculum = () => {
  return (
    <Container className="my-5 py-5 animate_animated animate_fadeIn">
      {/* Título Principal */}
      <h1 className="display-4 fw-bold text-center text-primary mb-5 animate_animated animate_fadeInDown">
        Mi Trayectoria: <span className="text-secondary">Habilidades y Experiencia</span>
      </h1>

      {/* Sección de Experiencia Profesional */}
      <section className="mb-5 pb-4 border-bottom animate_animated animate_fadeInUp">
        <h2 className="fs-2 fw-bold text-dark mb-4 text-center">
          <i className="bi bi-briefcase-fill text-primary me-3"></i> Experiencia Profesional
        </h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {/* Elemento de Experiencia 1 */}
            <Card className="mb-4 shadow-sm border-0">
<Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h5 fw-bold text-dark mb-0">Desarrollador Full Stack</h3>
                  <span className="badge bg-primary text-white">Ene 2022 - Actual</span>
                </div>
                <h4 className="h6 text-muted mb-2">Super Sistemas S.A</h4>
                <p className="text-muted mb-0">
                  Desarrollo y mantenimiento de aplicaciones web robustas utilizando React para el frontend y SpringBoot para el backend. 
                  Lideré la integración de APIs RESTful, optimización de bases de datos y la implementación de nuevas funcionalidades que mejoraron 
                  la eficiencia operativa en un 95%.
                </p>
                <ul className="list-unstyled mt-2">
                  <li className="text-sm text-gray-700"><i className="bi bi-check-circle-fill text-success me-2">
                    </i> Diseñé y desarrollé módulos clave para la gestión de clientes.
                  </li>
                  <li className="text-sm text-gray-700"><i className="bi bi-check-circle-fill text-success me-2">
                    </i> Colaboré en la mejora continua de la arquitectura de software.
                  </li>
                </ul>
              </Card.Body>
            </Card>

            {/* Elemento de Experiencia 2 (si tienes más) */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h5 fw-bold text-dark mb-0">Desarrollador Frontend Junior</h3>
                  <span className="badge bg-secondary text-white">Mar 2020 - Dic 2021</span>
                </div>
                <h4 className="h6 text-muted mb-2">PC Soluiciones S.A</h4>
                <p className="text-muted mb-0">
                  Participé en el desarrollo de interfaces de usuario interactivas con tecnologías Web, asegurando la responsividad y accesibilidad. 
                  Contribuí en la implementación de componentes reutilizables y en la resolución de bugs en producción.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

    {/* Sección de Conocimientos / Habilidades */}
      <section className="mb-5 pb-4 border-bottom animate_animated animatefadeInUp animate_delay-1s">
        <h2 className="fs-2 fw-bold text-dark mb-4 text-center">
          <i className="bi bi-tools text-primary me-3"></i> Habilidades Técnicas
        </h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <div className="d-flex flex-wrap justify-content-center">
              {/* Ejemplo de Habilidades*/}
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">JavaScript ES6+</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">React.js</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">Node.js</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">Express.js</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">Python</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">Django / Flask</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">SQL (PostgreSQL, MySQL)</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">NoSQL (MongoDB)</span>
<span className="badge bg-light text-dark border border-secondary p-2 m-2">HTML5 & CSS3</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">Bootstrap 5</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">Git / GitHub</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">RESTful APIs</span>
              <span className="badge bg-light text-dark border border-secondary p-2 m-2">AWS / Google Cloud (básico)</span>
            </div>
          </Col>
        </Row>
      </section>

      {/* Sección de Educación */}
      <section className="mb-5 pb-4 border-bottom animate_animated animatefadeInUp animate_delay-1-5s">
        <h2 className="fs-2 fw-bold text-dark mb-4 text-center">
          <i className="bi bi-mortarboard-fill text-primary me-3"></i> Educación
        </h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            {/* Elemento de Educación 1 */}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
<div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h5 fw-bold text-dark mb-0">Ingeniería en Sistemas / Desarrollo de Software</h3>
                  <span className="badge bg-primary text-white">2013 - 2019</span>
                </div>
                <h4 className="h6 text-muted mb-2">Universidad Mariano Gálvez</h4>
                <p className="text-muted mb-0">
                  Enfoque en desarrollo de software, algoritmos, bases de datos y metodologías ágiles.
                </p>
              </Card.Body>
            </Card>
            {/* Elemento de Educación*/}
            <Card className="mb-4 shadow-sm border-0">
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h3 className="h5 fw-bold text-dark mb-0">Curso Avanzado de React y Node.js</h3>
                  <span className="badge bg-secondary text-white">2021</span>
                </div>
                <h4 className="h6 text-muted mb-2">EDteam</h4>
                <p className="text-muted mb-0">
                  Profundización en desarrollo full-stack con énfasis en React Hooks, Context API, Express.js y MongoDB.
                </p>
              </Card.Body>
</Card>
          </Col>
        </Row>
      </section>

      {/* Sección de Proyectos Personales*/}
      <section className="mb-5 pb-4 border-bottom animate_animated animatefadeInUp animate_delay-2s">
        <h2 className="fs-2 fw-bold text-dark mb-4 text-center">
          <i className="bi bi-code-square text-primary me-3"></i> Proyectos Personales
        </h2>
        <p className="lead text-center text-muted mb-4">
          Mis proyectos personales son el reflejo de mi curiosidad y dedicación, donde exploro nuevas tecnologías y consolido mis habilidades.
        </p>
        <div className="text-center">
          <Link to="/portafolio" className="btn btn-outline-primary btn-lg rounded-pill shadow-sm">
            Explora mi Portafolio <i className="bi bi-box-arrow-up-right"></i>
          </Link>
        </div>
      </section>

      {/* Sección de Reconocimientos*/}
      <section className="mb-5 pb-4 border-bottom animate_animated animatefadeInUp animate_delay-2-5s">
<h2 className="fs-2 fw-bold text-dark mb-4 text-center">
          <i className="bi bi-award-fill text-primary me-3"></i> Reconocimientos y Certificaciones
        </h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="mb-3 shadow-sm border-0">
              <Card.Body>
                <h3 className="h5 fw-bold text-dark mb-1">Certificación en Aplicación Estratégica en el uso de herramientas IA para la Enseñanza</h3>
                <p className="text-muted mb-0">Emitido por CITE-UMG, 2023</p>
              </Card.Body>
            </Card>
            
          </Col>
        </Row>
      </section>

      {/* Sección Otros*/}
      <section className="animate_animated animatefadeInUp animate_delay-3s">
        <h2 className="fs-2 fw-bold text-dark mb-4 text-center">
          <i className="bi bi-info-circle-fill text-primary me-3"></i> Información Adicional
        </h2>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0">
 <Card.Body>
                <h3 className="h5 fw-bold text-dark mb-2">Idiomas</h3>
                <ul className="list-unstyled mb-3">
                  <li className="text-muted"><i className="bi bi-translate me-2"></i> Español (Nativo)</li>
                  <li className="text-muted"><i className="bi bi-translate me-2"></i> Inglés (Intermedio)</li>
                </ul>
                <h3 className="h5 fw-bold text-dark mb-2">Intereses</h3>
                <ul className="list-unstyled mb-0">
                  <li className="text-muted"><i className="bi bi-lightning-charge-fill me-2"></i> Inteligencia Artificial y Machine Learning</li>
                  <li className="text-muted"><i className="bi bi-controller me-2"></i> Desarrollo de Videojuegos</li>
                  <li className="text-muted"><i className="bi bi-book-fill me-2"></i> Lectura sobre nuevas tecnologías</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};