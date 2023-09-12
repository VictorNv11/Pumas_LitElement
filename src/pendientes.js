import { LitElement, html } from "lit-element";

export class MyPendients extends LitElement {
  createRenderRoot(){
    return this
  }
  render(){
    return html  `
    <style>
    @import "src/css/style.css"
    </style>

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
    
    <div class="row g-5" style="gap: 5px; width: 100%; display: flex; justify-content: center; align-items: center;">

        
        <div class="card mb-3 col-3" style="max-width: 350px; margin-right: 10%; ">
            <a href="solicitudes.html">
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src="img/actas.png" class="img-fluid rounded-start" alt="..." width="100" height="100" style="margin-top: 40%;">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Solicitudes</h5>
                            <hr>
                        </div>
                    </div>
                </div>
            </a>
        </div>

        
        
        <div class="card mb-3 col-3" style="max-width: 350px; margin-right: 10%;">
            <a href="actas.html">
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src="img/actas.png" class="img-fluid rounded-start" alt="..." width="100" height="100" style="margin-top: 40%;">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">Actas</h5>
                        <hr>
                    </div>
                </div>
                </div>
            </a>
        </div>

        <div class="card mb-3 col-3" style="max-width: 350px;">
            <a href="pendientes.html">      
                <div class="row g-0">
                    <div class="col-md-3">
                        <img src="img/actas.png" class="img-fluid rounded-start" alt="..." width="100" height="100" style="margin-top: 40%;">
                    </div>
                    <div class="col-md-9">
                        <div class="card-body">
                            <h5 class="card-title">Pendientes</h5>
                            <hr>
                        </div>
                    </div>
                </div>
            </a>
        </div>

    </div>

    <section id="pendientes">
        <div class="titulo-pendientes mt-5">
            <h3 class="text-center">Pendientes</h3>
            <hr>
        </div>

        <div class="formulario-solicitudes">
            <div class="t-border">
                <table class="table table-bordered" style="margin: 2%;">
                    <thead>
                      <tr class="table-dark">
                        <th scope="col">N° Pendiente</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <th scope="row"></th>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
        </div>
    </section>

</main>
</div>
    `
    
  }
}
  


customElements.define('my-pendients', MyPendients);