import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCartShopping,
  faTicket,
  faPenToSquare,
  faCircleExclamation,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// test
import { useSelector } from 'react-redux';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';


export default function UserCard() {
  // redux
  let data = useSelector((state) => { return state })

  // 회원정보변경 -> modal
  function OpenModal() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const ValidPassword = () => {
      // input에 입력한 password 값이 유효하면 페이지 이동
      document.location.href('/')
      // 이걸 onclick으로 걸어주기
    }

    // react-form-hook
    const { register, handleSubmit, formState: { isSubmitting, isDirty, errors } } = useForm({ mode: "onChange" });
    const onError = (error) => {
      console.log(error);
    };
    const navigate = useNavigate();

    
    return (
      <>
        <span variant="primary" onClick={handleShow}>
          회원정보 변경
        </span>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <FontAwesomeIcon icon={faCircleExclamation} />
              비밀번호 입력
            </Modal.Title>

          </Modal.Header>
            <form
              onSubmit={handleSubmit(async (data) => {
                await new Promise((r) => setTimeout(r, 1000));
                alert(JSON.stringify(data));
                // form 제출 시 회원정보변경페이지로 이동
                // 근데 이걸 id랑 pw 유효성 검사로? 토큰 확인
                navigate('/mypage/myinfo')
              }, onError)}
            >
            <Modal.Body>
                <input
                  type="password"
                  placeholder="*********"
                  aria-invalid={!isDirty ? undefined : errors.password ? "true" : "false"}
                  {...register("password", {
                    required: "비밀번호는 필수 입력입니다.",
                    minLength: {
                      value: 8,
                      message: "8자리 이상 비밀번호를 사용하세요.",
                    },
                  })}
                />
                {errors.password && <small role="alert">{errors.password.message}</small>}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose} type="submit" disabled={isSubmitting}>
                입력
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </>
    );
  }
  

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
              <OpenModal />
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
