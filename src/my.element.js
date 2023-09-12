import { LitElement, html } from "lit-element";

export class MyElement extends LitElement {
  createRenderRoot(){
    return this
  }
  render(){
    return html  `
    <style>
    @import "src/css/login.css"
    </style>
       <main>
        <div id="login">
            <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
                <div class="card text-light">
                    <div class="card-header" style="background-color: #ff0404;">
                        <h3 class="text-center">PUMAS DC</h3>
                    </div>
                    <div class="card-body w-100">
                        <form name="login" action="" method="post">
                            <div class="mb-3">
                                <input type="email" class="form-control" id="email" placeholder="Usuario">
                            </div>
                            <div class="mb-3">
                                <input type="password" class="form-control" id="password" placeholder="Password">
                            </div>
        
                            <div class="form-group mt-3 justify-content-center" style="display: flex;">
                                <a href="dashboard.html" class="btn bg-pumas text-white w-50">Ingresar</a>
                            </div>
                            <div class="text-center pt-3">

                                <a href="" class="text-center text-dark">¿Olvidó su contraseña?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>`
    
  }
}
  


customElements.define('my-element', MyElement);