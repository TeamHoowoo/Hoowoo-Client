import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'

import OrderList from './OrderList';
import { useSelector } from 'react-redux';

//test
import mydata from '../Mydata';

export default function OrderSearch() {
  let orders = useSelector((state) => { return state.user })

  return (
    <>
      <Header>
        <p>주문 내역</p>
        <div className='d-flex align-items-center position-relative w-100'>
          <span className='position-absolute'>상품정보</span>
          <span className='position-absolute'>주문번호</span>
          <span className='position-absolute'>주문상태</span>
        </div>
      </Header>
      <OrderList />
      {/* n개 이상이면 더보기로 처리하기 */}
      <div className="d-grid gap-2 mt-5 plus">
        <Button size="lg" style={{backgroundColor: '#F3F0EF', border: '.5px solid #776E6E', borderRadius: 0, color: '#776E6E', fontSize: '18px'}}>
          <FontAwesomeIcon icon={faSquarePlus} style={{marginRight: '15px', fontSize: '15px'}}/>
          더보기
        </Button>
    </div>
    </>
  );
}

const Header = styled.div`
  margin-top: 10%;

  > p {
    font-size: 18px;
  }

  div {
    height: 50px;
    border-top: 2px solid black;
    border-bottom: 1px solid #9b9393;

    span {
      font-size: 16px;
      font-weight: bold;

      &:nth-of-type(1) {
        left: 15%
      }

      &:nth-of-type(2) {
        left: 63%
      }

      &:nth-of-type(3) {
        left: 85%
      }
    }
  }
`;
