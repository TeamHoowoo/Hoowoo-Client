import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';


export default function OrderList() {
  let order = useSelector((state) => { return state.order })
  console.log(order)

  return (
    <>
    {
      order.map((a, i) => 
        <List className='d-flex felx-column'>
          <div className='p-4 d-flex'>
            <div>
              <img style={{width: '140px', height: '140px'}}
                src="http://www.cakenalda.co.kr/shopimages/cakenalda/0640120000132.jpg?1609835682"
                alt="cake_img"
              />
              <span style={{ font: 'bold 17px "sans-serif"'}}>{order[i].item_id}</span>
              <span className='m-2' style={{font: 'bold 14px "sans-serif"', color: '#a19a9a'}}>{order[i].regDate}</span>
              <p className='mt-2'>{}</p>
              <div style={{width: '330px', height: '100px', marginLeft: '140px'}}>
                  {order[i].letteringColor +' ' + order[i].creamColor}
              </div>
            </div>
            <span style={{ font: 'bold 17px "sans-serif"', margin: '70px 0 0 20px'}}>{order[i].order_id}</span>
            <span style={{ font: 'bold 17px "sans-serif"', margin: '70px 0 0 90px'}}>입금확인</span>
          </div>
        </List>
      )
    }
    </>
  );
}

const List = styled.div`
  border-bottom: 1px solid #9b9393;

  >div {

    >div {
      img {
        float: left;
        transform: translate(-15%, 0);
      }
    }
  }
`;
