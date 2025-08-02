import React from 'react';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <div className="container my-5 py-5">
      {/* Sección de Bienvenida y Presentación */}
      <section className="text-center mb-5 pb-4 border-bottom">
        <h1 className="display-4 fw-bold text-primary mb-3 animate_animated animate_fadeInDown">
          ¡Hola! Soy <span className="text-secondary">Jaser Castellanos</span>, un Desarrollador Web
          <br className="d-none d-md-block" />
          con una Pasión por la Innovación.
        </h1>
        <p className="lead text-muted mb-4 animate_animated animate_fadeInUp">
          Como <strong>profesional experto en tecnologías de desarrollo</strong>, me especializo en la construcción de <strong>
            soluciones digitales robustas y escalables</strong>, abarcando tanto el <strong>Backend</strong> como el
          <strong>Frontend</strong>. Mi enfoque se centra en crear experiencias de usuario excepcionales y sistemas eficientes
          que impulsan el valor de negocio.
        </p>
        <p className="fs-5 text-dark animate_animated animate_fadeInUp">
          ¿Buscas potenciar tu negocio con tecnología?
          <br className="d-none d-md-block" />
          Te invito a explorar cómo puedo transformar tus ideas en realidad.
        </p>
        <div className="mt-4 animate_animated animatefadeInUp animate_delay-1s">
          <Link to="/contacto" className="btn btn-primary btn-lg rounded-pill shadow-sm">
            Hablemos de tu Proyecto <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </section>

      {/* Sección de "Algunos de mis Proyectos" */}
      <section className="last-works py-5">
        <h2 className="display-5 fw-bold text-center mb-4 animate_animated animate_fadeIn">
          Mi Experiencia en Acción: <span className="text-primary">Proyectos Destacados</span>
        </h2>
        <p className="text-center text-muted mb-5 animate_animated animate_fadeIn">
          A continuación, te presento una muestra de mi trayectoria, donde la creatividad se une a la funcionalidad para ofrecer
          soluciones de alto impacto.
        </p>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 animate_animated animatefadeInUp animate_delay-1s">
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <img src="/images/corporativo.png" className="card-img-top" alt="Proyecto Web Corporativo" />
              <div className="card-body">
                <h5 className="card-title text-primary">Proyecto Web Corporativo</h5>
                <p className="card-text text-muted">
                  Desarrollo integral de una plataforma e-commerce con funcionalidades avanzadas y optimización de rendimiento.
                </p>
                <Link to="/portafolio" className="btn btn-outline-primary btn-sm">Ver Detalles</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <img src="/images/inventarios.png" className="card-img-top" alt="Sistema de Gestión Interna" />
              <div className="card-body">
                <h5 className="card-title text-primary">Sistema de Gestión Interna</h5>
                <p className="card-text text-muted">
                  Implementación de un sistema de administración de inventario con integración de base de datos en tiempo real.
                </p>
                <Link to="/portafolio" className="btn btn-outline-primary btn-sm">Ver Detalles</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 shadow-sm border-0">
              <img src="/images/aplicaciones.jpg" className="card-img-top" alt="Aplicación Móvil Híbrida" />
              <div className="card-body">
                <h5 className="card-title text-primary">Aplicación Móvil Híbrida</h5>
                <p className="card-text text-muted">
                  Creación de una aplicación móvil para servicios a domicilio, disponible en iOS y Android.
                </p>
                <Link to="/portafolio" className="btn btn-outline-primary btn-sm">Ver Detalles</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="/portafolio" className="btn btn-outline-secondary btn-lg rounded-pill">
            Ver Todos mis Proyectos <i className="bi bi-box-arrow-up-right"></i>
          </Link>
        </div>
      </section>
    </div>
  );
};