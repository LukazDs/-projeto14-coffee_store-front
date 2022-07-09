import styled from "styled-components";
import logo from "../assets/images/caf.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import Loading from "../loaders/Loading";

function SignUp() {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");
    
    const [isLoading, setIsLoading] = useState(false)

    return (
        <Container>
            <Logo src={logo} alt={logo} />
            <Forms>
                <input type="text"
                    onChange={e => setName(e.target.value)}
                    value={name}
                    disabled={isLoading}
                    placeholder='Name'
                    required />
                <input type="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    disabled={isLoading}
                    placeholder='Email'
                    required />

                <input type="password"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    disabled={isLoading}
                    placeholder='Senha'
                    required />

                <input type="password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    disabled={isLoading}
                    placeholder='Confirmar senha'
                    required />

                <button disabled={isLoading}>
                    {isLoading ? <Loading /> : "Cadastrar"}
                </button>
            </Forms>

            <Link to={"/login"}>
                Já tem uma conta? Entre agora!
            </Link>
        </Container>
    )
}

export default SignUp;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;

    a {
        width: 283px;
        height: 23px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        color: #414040;
    }
`;

const Logo = styled.img`
    width: 98px;
    height: 76px;
    object-fit: cover;
`

const Forms = styled.form`
    width: 312px;
    height: 338px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    
    input {
        width: 312px;
        height: 58px;
        background: rgba(217, 217, 217, 0.5);
        border: 1px solid #000000;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        color: rgba(0, 0, 0, 0.5);
    }

    button {
        width: 316px;
        height: 58px;
  
        background: #808080;
        border: 1px solid #000000;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        color: rgba(0, 0, 0, 0.7);
    }
`;
