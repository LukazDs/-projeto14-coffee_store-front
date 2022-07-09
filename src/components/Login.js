import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/caf.jpg";
import Loading from "../loaders/Loading";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [token, setToken] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault()

        setIsLoading(true)

        const URL = `${process.env.REACT_APP_API_BASE_URL}/login`;
        const body = { password, email }

        const promise = axios.post(URL, body)

        promise.then((res) => {
            setToken(res.data.token);
            setIsLoading(false);
            navigate("/registers")
        })

            .catch(err => {
                setIsLoading(false);
                alert(err.response.statusText)
            })
    }

    return (
        <Container>
            <InfoLogo>
                <img src={logo} alt={logo} />
                <span>CoffeeStore</span>
            </InfoLogo>
            <Forms onSubmit={login}>
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
                <button disabled={isLoading}>
                    {isLoading ? <Loading /> : "Entrar"}
                </button>
            </Forms>
            <Link to={"/login"}>
                Primeira vez? Cadastre-se!
            </Link>
        </Container>
    )
}

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

const InfoLogo = styled.div`
    width: 312px;
    height: 58px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    img {
        width: 98px;
        height: 76px;
        object-fit: cover;
    }

    span {
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 35px;
        line-height: 44px;

        color: #000000;
    }
`;

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
        display: flex;
        justify-content: center;
        align-items: center;
  
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

export default Login;