import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faTicket,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

// test
import mydata from '../Mydata';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function UserCard() {
  let data = useSelector((state) => { return state })

  return (
    <>
      <Wrapper className="container-fluid">
        <div className="row justify-content-center">
          <p><Link to='/mypage' style={{textDecoration: 'none', color: '#716D6D'}}>My page</Link></p>

          <div className="col-11 d-flex position-relative" id="user_info">
            <div className="user_img position-absolute">
              {/* <img src='/img/루피.jpeg' style={{}}/> */}
            </div>

            <span>
              {/* user에 따라 다른 주문 내역 */}
              {data.user[0].user_id}님
              <span style={{fontSize: '18px', marginLeft: '10px'}}>안녕하세요</span>
              <span><Link to='/mypage/myinfo' style={{textDecoration: 'none', color: '#787878'}}>회원정보변경</Link></span>
            </span>

            <div className="d-flex position-absolute">
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faCartShopping} className="icon" />
                <span className="mt-3" style={{font: 'bold 16px "sans-serif"', color: '#79716E'}}>장바구니</span>
                <span className='mt-2' style={{font: 'bold 30px "sans-serif"', cursor: 'pointer'}}><Link to='/cart' style={{textDecoration: 'none', color: 'black'}}>{data.order.length}</Link></span>
              </div>
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faTicket} className="icon" />
                <span className="mt-3" style={{font: 'bold 16px "sans-serif"', color: '#79716E'}}>쿠폰</span>
                <span className='mt-2' style={{font: 'bold 30px "sans-serif"', cursor: 'pointer'}}><Link to='/mypage/coupon' style={{textDecoration: 'none', color: 'black'}}>{data.coupon.length}</Link></span>
              </div>
              <div className="sub_nav d-flex flex-column text-center">
                <FontAwesomeIcon icon={faPenToSquare} className="icon" />
                <span className="mt-3" style={{font: 'bold 16px "sans-serif"', color: '#79716E'}}>후기</span>
                <span className='mt-2' style={{font: 'bold 30px "sans-serif"', cursor: 'pointer'}}><Link to='/mypage/review' style={{textDecoration: 'none', color: 'black'}}>{data.review.length}</Link></span>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .row {
    p {
      font: bold 25px 'sans-serif';
      transform: translate(6%, 7px);
      letter-spacing: 1px;
    }

    #user_info {
      height: 300px;
      border-radius: 20px;
      background-color: #D3CFCF;

      .user_img {
        left: 8%;
        top: 20%;
        width: 150px;
        height: 150px;
        background-color: #fff;
        border-radius: 50%;
        border: 3px solid #8E8380;
        background-image: url('/img/루피.jpeg');
        background-position: center;
        background-size: contain;

        .icon {
          transform: translate(55%, 35%);
          color: #737171;
        }
      }

      > span:nth-of-type(1) {
        position: absolute;
        top: 36%;
        left: 23%;
        font: bold 20px 'sans-serif';

        span:nth-of-type(2) {
          display: inline-block;
          font-size: 16px;
          transform: translate(-135px, 40px);

          &:hover {
            text-decoration: underline;
          }
        }
      }

      > div {
        top: 30%;
        right: -3%;

        .sub_nav {
          margin-right: 140px;

          &::after {
            content: "";
            display: block;
            width: 1.5px;
            height: 120px;
            transform: translate(120px, -120px);
            background-color: #B7AEAE;
          }

          &:last-child::after {
          display: none;
          }

          .icon {
            font-size: 40px;
            color: #737171;
          }
        }
      }
    }
  }
`;
