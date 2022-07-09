import logo from "../assets/images/caf.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function InitialScreen () {

    const TIME_3S = 3000;

    const navigate = useNavigate();

    setTimeout(() => navigate("/login"), TIME_3S);

    return (
        <Container>
            <img src={logo} alt="logo"/>
        </Container>
    )
}

export default InitialScreen;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;

    img {
        width: 274px;
        height: 212px;
        object-fit: cover;
    }
`;
