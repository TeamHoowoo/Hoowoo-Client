import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faStar, faXmark} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Review() {
    let review = useSelector((state) => state.review)

    const showStars = (len) => {
        let stars = []
        for(let i=0; i<len; i++) {
            stars.push(<FontAwesomeIcon icon={faStar}  style={{color: '#E5655A'}}/>)
        }
        return stars.map((a,i) => a)
    }

    return(
        review.map((a, i) => 
            <Wrapper className="position-relative" style={{borderBottom: '1px solid rgb(220, 220, 220)'}}>
            <div className="p-3" style={{height: '115px', borderBottom: '1px solid rgb(220, 220, 220)'}}>
                <img src="http://www.cakenalda.co.kr/shopimages/cakenalda/0640120000132.jpg?1609835682" alt="cake_img" style={{width: '80px', height: '80px'}}/>
                <span className="d-inline">{review[i].item_id}</span>
                <span>{review[i].regDate}</span>
                <p>{review[i].totalPrice} 원</p>
            </div>
            <div  className="p-3">
                <div style={{marginBottom: '10px'}}>
                    {showStars(review[i].star)}
                    <span style={{marginLeft: '5px', fontWeight: 'bold'}}>{review[i].star}</span>
                </div>
                <div style={{width: '450px'}}>{review[i].content}</div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlN8N0AeXBIOde6cBUd5g3aF42fa7zeHlQ9g&usqp=CAU" alt="" style={{width: '120px', height: '120px'}}/>
                <Button style={{backgroundColor: '#413F3F', borderRadius: '0px'}}>수정하기</Button>
                <FontAwesomeIcon icon={faXmark} className="icon"/>
            </div>
        </Wrapper>
        )
    )
}

const Wrapper = styled.div`

    div:nth-of-type(1) {
        img {
            transform: translate(-10%, 0);
            float: left;
        }

        span:nth-of-type(1) {
            font-size: 15px;
            font-weight: bold;
        }

        span:nth-of-type(2) {
            font-size: 12px;
            font-weight: bold;
            color: #a19a9a;
            margin-left: 10px;
        }

        p {
            margin-top: 10px;
            font-size: 15px;
        }
    }

    div:nth-of-type(2) {
        position: relative;
        height: 150px;

        img {
            position: absolute;
            top: 10%;
            left: 60%;
        }

        Button {
            position: absolute;
            top: 40%;
            right: 10%;
            cursor: pointer;
        }

        .icon {
            position: absolute;
            top: 5%;
            right: 1%;
            font-size: 25px;
            color: #938E8E;
            cursor: pointer;
        }
    }
`