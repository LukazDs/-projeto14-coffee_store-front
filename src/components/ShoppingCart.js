import { useState } from "react";
import styled from "styled-components";

function ShoppingCart() {

    //const [isLoading, setIsLoading] = useState(false)
    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
        //setIsLoading(false);
        const URL = `${process.env.REACT_APP_API_BASE_URL}/shopping-cart`;
        const config = { headers: { "Authorization": `Bearer ${tokenValid}` } };
        const promise = axios.get(URL, config);

        promise
            .then(res => {
                setUserProducts(res.data);
            })
            .catch(err => {
                console.log(err.response.statusText);
            });
    }, [])

    function printProducts() {
        userProducts.map((v, i) =>
            <Product key={i}>
                <img src={v.image} />
                <span>
                    {v.description}
                </span>
                <p>
                    {v.date}
                </p>
                <Total>
                    TOTAL: <b>R$ {
                        (Number(v.value) * Number(v.quantity)).toFixed(2)}
                    </b>
                </Total>
            </Product>
        )
    }

    return (
        <Container>
            {/* ///Topo */}
            <Products>
                {printProducts}
            </Products>
            {/* ///Menu */}
        </Container>

    )
}

export default ShoppingCart;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(217, 217, 217, 0.5);
`;

const Products = styled.div`
    width: 100%;
    height: 73vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Product = styled.div`
    width: 341px;
    height: 387px;
    margin: 18px 0px;

    background: #FFFFFF;
    border: 2px solid #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    img {
        width: 110px;
        height: 80px;
        object-fit: cover;
    }

    span {
        width: 257px;
        height: 65px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 23px;
        text-align: center;

        color: #000000;
    }

    p {
        width: 183px;
        height: 31px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 31px;

        text-align: center;

        color: rgba(0, 0, 0, 0.6);
    }
`;

const Total = styled.div`
    width: 287px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
     font-family: 'Raleway';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 31px;

        color: #000000;
`;
