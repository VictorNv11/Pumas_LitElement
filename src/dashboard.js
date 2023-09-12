import { LitElement, html } from "lit-element";

export class MyDash extends LitElement {
  createRenderRoot(){
    return this
  }
  render(){
    return html  `
    <style>
    @import "src/css/style.css"
    </style>
    <header>
        <div class="dashboard-header">

            <div class="userg">
                <div class="user">
                    <img class="img-user" src="img/pumas.png" alt="" width="100" height="100">
                    <div class="name-user">
                        <b>
                            Usuario
                        </b>
                    </div>
                </div>  
            </div>

            <div class="btn-burger">
                <button class="btn btn-dark"><i class="fa-solid fa-bars"></i></button>
            </div>

        </div>
    </header>

    <div class="container">

        
        <aside>
            <div class="menu">
                
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="dashboard.html" class="nav-link"><i class="fa-solid fa-football"></i>HOME</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>PRESIDENCIA</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>VICE-PRESIDENCIA</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>SECRETARIA</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>TESORERIA</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>REVISORIA-FISCAL</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>LISTA DE AFILIADOS</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>LISTA DE JUGADORES</a></li>
                    <li class="nav-item"><a href="" class="nav-link"><i class="fa-solid fa-football"></i>LISTA COACH'S</a></li>
                    <li class="nav-item"><a href="solicitudes.html" class="nav-link"><i class="fa-solid fa-football"></i>SOLICITUDES</a></li>
                </ul>
                
            </div>
        </aside>
        
        <main class="col-9">
            
            <div class="row g-5" style=" display: flex; justify-content: space-between; height: 45%; margin-bottom: 4%;">

                <div class="card text-center mb-3" style="width: 18rem; height: 100%;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Actas</b></h5>
                        <hr>
                        <img src="img/actas.png" class="card-img-top mt-1 mb-1" alt="..." style="height: 45%; width: 45%;">
                      <a href="actas.html" class="btn bg-pumas text-white w-75 mt-">Gestionar</a>
                    </div>
                </div>

                <div class="card text-center mb-3" style="width: 18rem; height: 100%;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Certificados</b></h5>
                        <hr>
                        <img src="img/certificado.png" class="card-img-top mt-1 mb-1" alt="..." style="height: 45%; width: 45%;">
                      <a href="#" class="btn bg-pumas text-white w-75 mt-">Gestionar</a>
                    </div>
                </div>

                <div class="card text-center mb-3" style="width: 18rem; height: 100%;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Reuniones</b></h5>
                        <hr>
                        <img src="img/reunion.png" class="card-img-top mt-1 mb-1" alt="..." style="height: 45%; width: 45%;">
                      <a href="#" class="btn bg-pumas text-white w-75 mt-">Gestionar</a>
                    </div>
                </div>
    
            </div>

            <div class="row g-5" style=" display: flex; justify-content: space-between; height: 45%; margin-top: 4%;">

                <div class="card text-center mb-3" style="width: 18rem; height: 100%;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Asistencia</b></h5>
                        <hr>
                        <img src="img/asistencia.png" class="card-img-top mt-1 mb-1" alt="..." style="height: 45%; width: 45%;">
                      <a href="#" class="btn bg-pumas text-white w-75 mt-">Gestionar</a>
                    </div>
                </div>

                <div class="card text-center mb-3" style="width: 18rem; height: 100%;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Comunicación</b></h5>
                        <hr>
                        <img src="img/comunicacion.png" class="card-img-top mt-1 mb-1" alt="..." style="height: 45%; width: 45%;">
                      <a href="#" class="btn bg-pumas text-white w-75 mt-">Gestionar</a>
                    </div>
                </div>

                <div class="card text-center mb-3" style="width: 18rem; height: 100%;">
                    <div class="card-body">
                        <h5 class="card-title"><b>Estado de cuenta</b></h5>
                        <hr>
                        <img src="img/comunicacion.png" class="card-img-top mt-1 mb-1" alt="..." style="height: 45%; width: 45%;">
                      <a href="#" class="btn bg-pumas text-white w-75 mt-">Gestionar</a>
                    </div>
                </div>
    
            </div>
    
        </main>

    </div>
    `
    
  }
}
  


customElements.define('my-dash', MyDash);