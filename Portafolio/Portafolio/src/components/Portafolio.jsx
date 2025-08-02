

export const Portafolio = () => {
  return (
    <div className="container my-5 py-5">
      <h2 className="display-5 fw-bold text-center mb-4 animate__animated animate__fadeIn">Portafolio de Proyectos <span className="text-primary">Creativos e
        Innovadores</span></h2>
      <p className="text-center text-muted mb-5 animate__animated animate__fadeIn">
        Una seleccion de proyectos que reflejan mi compromiso con la calidad, eficiencia e innovacion tecnologica.
      </p>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 animate__animated animate__fadeInUp ">
        {/* Proyecto 1 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src="/images/corporativo.png" className="card-img-top" alt="Proyecto web Corporativo" />
            <div className="card-body">
              <h5 className="card-title text-primary">Proyecto Web Corporativo</h5>
              <p className="card-text text-muted">
                Desarrollo integral de una plataforma e-commerce con funcionalidades avanzadas y optimización de rendimiento.
              </p>
            </div>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src="/images/inventarios.png" className="card-img-top" alt="Sistema de Gestión Interna" />
            <div className="card-body">
              <h5 className="card-title text-primary">Sistema de Gestión Interna</h5>
              <p className="card-text text-muted">
                Implementación de un sistema de administración de inventario con integración de base de datos en tiempo real.
              </p>
            </div>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src="/images/aplicaciones.jpg" className="card-img-top" alt="Aplicacion Movil Hibrida" />
            <div className="card-body">
              <h5 className="card-title text-primary">Aplicación Móvil Híbrida</h5>
              <p className="card-text text-muted">
                Creación de una aplicación móvil para servicios a domicilio, disponible en iOS y Android.
              </p>
            </div>
          </div>
        </div>
        {/* Proyecto 4 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src="/images/dashboardAdmin.png" className="card-img-top" alt="Dashboard Administrativo" />
            <div className="card-body">
              <h5 className="card-title text-primary">Dashboard Administrativo</h5>
              <p className="card-text text-muted">
                Plataforma interactiva para analisis de KPIs empresariales con graficos dinamicos y filtros personalizados.
              </p>
            </div>
          </div>
        </div>
        {/* Proyecto 5 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src="/images/reservas.png" className="card-img-top" alt="Sistema de Reservas" />
            <div className="card-body">
              <h5 className="card-title text-primary">Sistema de Reservas</h5>
              <p className="card-text text-muted">
                Aplicacion web para gestion de turnos y citas, con notificaciones automaticas y panel de administracion.
              </p>
            </div>
          </div>
        </div>
        {/* Proyecto 6 */}
        <div className="col">
          <div className="card h-100 shadow-sm border-0">
            <img src="/images/blog.png" className="card-img-top" alt="Blog Tecnologico" />
            <div className="card-body">
              <h5 className="card-title text-primary">Blog Tecnológico</h5>
              <p className="card-text text-muted">
                Desarrollo de un blog optimizado con SEO, CMS personalizado y secciones dinamicas de contenido.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
