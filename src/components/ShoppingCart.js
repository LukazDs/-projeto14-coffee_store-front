import styled from "styled-components";

function ShoppingCart() {
    
    return (
        <Container>
            {/* ///Topo */}
            <Products>
                <Product>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNaLi3i99JqpK-gELW1vERwVRUpT9MA9l9w&usqp=CAU" />
                    <span>
                        Café Especial Santo Grão Descafeinado em Grãos 500g
                    </span>
                    <p>
                        Data: 07/07
                    </p>
                    <Total>
                        TOTAL: <b>R$ 102,50</b>
                    </Total>
                </Product>
                <Product>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNaLi3i99JqpK-gELW1vERwVRUpT9MA9l9w&usqp=CAU" />
                    <span>
                        Café Especial Santo Grão Descafeinado em Grãos 500g
                    </span>
                    <p>
                        Data: 07/07
                    </p>
                    <Total>
                        TOTAL: <b>R$ 102,50</b>
                    </Total>
                </Product>
                <Product>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNaLi3i99JqpK-gELW1vERwVRUpT9MA9l9w&usqp=CAU" />
                    <span>
                        Café Especial Santo Grão Descafeinado em Grãos 500g
                    </span>
                    <p>
                        Data: 07/07
                    </p>
                    <Total>
                        TOTAL: <b>R$ 102,50</b>
                    </Total>
                </Product>
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
