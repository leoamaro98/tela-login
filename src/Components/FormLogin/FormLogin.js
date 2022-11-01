import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import ErroLogin from "../ErroLogin/ErroLogin";
import "./FormLogin.css"

const FormLogin = () => {


    function erroLogin() {
        const usrInput = document.querySelector("#input-user").value
        const ambiente = document.querySelector("#select-ambiente").value
        const element = <ErroLogin  ambiente={ambiente} user={usrInput}/>

        ReactDOM.render(element)
    }
    return (<div className="form-login">
        <div className="container-login">
            <Form>
                <FormGroup>
                    <Label
                        for="input-user"
                    >
                        Usuário
                    </Label>
                    <Input
                        id="input-user"
                        name="user"
                        placeholder="Digite seu usuário"
                    />
                </FormGroup>
                {' '}
                <FormGroup>
                    <Label
                        for="input-pw"
                    >
                        Senha
                    </Label>
                    <Input
                        id="input-pw"
                        name="password"
                        placeholder="Digite sua Senha"
                        type="password"
                    />
                </FormGroup>

                {' '}

                <FormGroup>
                    <Label for="select-ambiente">
                        Ambiente
                    </Label>
                    <Input
                        id="select-ambiente"
                        name="select"
                        type="select"
                    >
                        <option>CDG</option>
                        <option>NSG</option>
                        <option>SPG</option>
                        <option>GAUSS</option>
                    </Input>
                </FormGroup>
                <Button onClick={erroLogin}>
                    Login
                </Button>
            </Form>
        </div>
     
    </div>);
}

export default FormLogin;