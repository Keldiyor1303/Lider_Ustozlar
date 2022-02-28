import React from 'react';
import styled from 'styled-components';
import headerImg from "../Images/headerImg.png"

const Home = () => {
    return (
        <Wrapper>
            <div className="info">
                <h2>Biz urushga <br /> qarshimiz!</h2>
                <p>Ayni vaqtda dunyoda va vatanimizda bo'layotgan <br /> yangiliklardan birinchilardan bo'lib xabar toping.</p>
                <button>Maqolaga kirish</button>
            </div>

            <img src={headerImg} alt={headerImg} />
        </Wrapper>
    );
}

export default Home;

const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 72px);
    background-color: #253131;
    padding: 0 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .info {
        h2{  
            font-family: Play;
            font-style: normal;
            font-weight: bold;
            font-size: 9rem;
            line-height: 9rem;
            color: #FFFFFF;
        }

        p {
            font-size: 2.5rem;
            line-height: 4.5rem;
            color: rgba(255, 255, 255, 0.6);
            margin-top: 2rem;
            margin-bottom: 9rem;

        }

        button {
            padding: 1rem 2rem;
            font-weight: 600;
            font-size: 2rem;
            line-height: 3rem;
            color: #253131;
            background: #FDC332;
            border: none;
            cursor: pointer;
            
            :hover{
                background-color: white;
            }
        }
    }

    img {
        width: 600px;
        height: 600px;
        border-radius: 3rem
    }
    
`