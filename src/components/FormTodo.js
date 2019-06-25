import React, {Component} from 'react';


class FormTodo extends Component {
    constructor(){
        super();
        this.handleInput = this.handleInput.bind(this);
    }
    handleInput(ev){
            console.log(ev.target.value);
        }
    manejaSubmit(e){
        alert('llamo')
    }
        render() {
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.manejaSubmit}>
                    <div className="form-group">
                        <input 
                        type="text"
                        name="title"
                        onChange= {this.handleInput}
                        className="form-control"
                        placeholder="title"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                        type="text"
                        name="description"
                        className="form-control"
                        placeholder="descripcion"
                        />
                    </div>

                    <div className="form-group">
                        <input 
                        type="text"
                        name="responsable"
                        className="form-control"
                        placeholder="responsable"
                        />
                    </div>
                </form>
            </div>
        )
        }
    }

export default FormTodo;