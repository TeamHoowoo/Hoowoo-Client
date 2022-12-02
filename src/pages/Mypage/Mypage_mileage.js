import { Table, Container, Row, Col} from 'react-bootstrap';
import UserCard from './main_content/UserCard';
import MypageNav from './main_content/MypageNav';

export default function MypageMileage() {
  return (
    <Container style={{marginTop: '100px'}}>
        <Row> <UserCard /> </Row>
        <Row style={{marginTop: '100px'}}>
            <Col md={3} className="d-sticky" style={{marginLeft: '30px'}}><MypageNav /></Col>
            <Col md={8}>
              <main>
                <section>
                  {/* userInfo */}
                  <div class="container container--1160">
                    {/* 마이페이지 lnb  */}
                    <p style={{font: 'bold 19px "sans=serif"', color: '#6C635F', letterSpacing: '1px', borderBottom: '1.5px solid black', height: '30px'}}>나의 마일리지</p>
                    <div class="mypage-content">
                      <form name="searchForm" id="searchForm" action="?#subtitle">
                        <div className="mypage-article" >
                          <Table striped bordered hover className="text-center" style={{marginTop: '40px'}}>
                            <tbody>
                              <tr>
                                <th>
                                  <p>현재 마일리지</p>
                                </th>
                                <th>
                                  <p>사용한 마일리지</p>
                                </th>
                                <th>
                                  <p>소멸예정 마일리지</p>
                                </th>
                              </tr>
                              <tr>
                                <td>
                                  <p class="text-size-15 font-weight-black">3,000P</p>
                                </td>
                                <td>
                                  <p class="text-size-15 font-weight-black">0P</p>
                                </td>
                                <td>
                                  <p class="text-size-15 font-weight-black">0P</p>
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          <ul style={{transform: 'translate(-23px, 0)'}}>
                            <li>* 마일리지는 상품 구매 후 이벤트에 따라 적립됩니다.</li>
                            <li>* 500P이상 적립되신 시점부터 결제수단으로 사용 가능하며, 10P단위로 사용 가능합니다. (10P=10원)</li>
                            <li>* 적립된 마일리지의 사용기한은 적립일로부터 3년입니다.</li>
                          </ul>
                        </div>

                        <div class="mypage-article">
                          <div
                            class="mileage__wrap"
                            data-tab="true"
                            data-tab-order="0"
                            data-tab-active="on"
                            data-tab-index="0"
                            data-css="true"
                          >
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </section>
                {/* 주문 내역에 따라 마일리지 내역 보여주기 */}
              </main>
            </Col>
          </Row>
      </Container>
  );
}
