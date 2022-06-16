import React,{Component} from "react";
import './Registro.css';

class Registro extends Component{

    render(){
        return(
            <div>
                <section className="registro">
                    <h1>Registro de Usuario</h1>
                    <div className="container_registro">
                        <form className="form_registro">
                            <input type="text" name="name" placeholder="Ingrese su nombre" required/>
                            <input type="text" name="surname" placeholder="Ingrese su apellido" required/>
                            <input type="email" name="email" placeholder="Ingrese su correo electrónico" required/>
                            <input type="number" name="phone" placeholder="Ingrese su teléfono" required/>
                            <input type="password" name="password" placeholder="Ingrese una contraseña" required/>
                            <input type="password" name="password2" placeholder="Confirme su contraseña" required/>
                            <button type="submit" className="btn">Registrarme</button>
                        </form>

                    </div>
                </section>
            </div>

        )
    }
}
export default Registro