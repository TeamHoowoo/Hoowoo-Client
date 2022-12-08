import styled from "styled-components"
import { Container, Row, Col, Tabs, Tab, Table } from "react-bootstrap"

import MypageNav from "./main_content/MypageNav"
import UserCard from "./main_content/UserCard"
import Review from "./main_content/Review"
import DateSelect from "./main_content/DateSelect"

export default function MyReview() {

    return (
        <>
        <Container style={{marginTop: '100px'}}>
        <Row> <UserCard /> </Row>
        <Row style={{marginTop: '100px'}}>
            <Col md={3} className="d-sticky" style={{marginLeft: '30px'}}><MypageNav /></Col>
            <Col md={8}>
            <p style={{font: 'bold 19px "sans=serif"', color: '#545454', letterSpacing: '1px'}}>상품 후기</p>

            <DateSelect />

            <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3" fill>
            <Tab eventKey="profile" title="작성가능한 상품평">
                {/* 작성가능한 리뷰가 없을 때 -> 알림창, 작성가능한 리뷰 있을 때 출력 */}
                <Table striped bordered hover>
                    <thead>
                        <tr style={{borderBottom: '1px solid black'}}>
                        <th>상품정보</th>
                        <th>구매/ 구매확정일</th>
                        <th>후기작성</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        </tr>
                    </tbody>
                    </Table>
            </Tab>
            <Tab eventKey="home" title="작성한 상품평">
                <div className=".cancel_list d-flex flex-column mt-5">
                    <div style={{borderTop: '2px solid black', borderBottom: '1px solid black', height: '35px', fontWeight: 'bold', lineHeight: '35px'}}>
                        <span style={{font: 'bold 17px "sans-serif"', marginLeft: '10px'}}>리뷰 목록</span>
                    </div>
                    <Review />
                </div>
            </Tab>
            </Tabs>


            </Col>
          </Row>
        </Container>
        </>
    )
}

function CanReview() {


}


// const ValidReview = styled`
//     Table {

//         thead {
//             border-bottom: 1px solid black;
//         }
//     }
// `