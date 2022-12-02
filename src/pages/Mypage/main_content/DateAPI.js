import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export default function DateAPI() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const DATE_FORMAT = 'yyyy/MM/dd';
  const DATE_FORMAT_CALENDAR = 'yyyy년 MM월';

  return (
    <>
      <Wrapper className='p-2'  style={{width:'270px', height: '45px', backgroundColor: 'white'}}>
        <div className="dateBox" style={{width: '125px', height: '40px'}}>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()} // 과거 날짜 제외
            className="picker"
            dateFormat={DATE_FORMAT}
            dateFormatCalendar={DATE_FORMAT_CALENDAR}
          />
          <FontAwesomeIcon icon={faCaretDown} className='arrow'/>
        </div>

        <div className='bar mt-3' style={{width: '15px', height: '1.5px', backgroundColor: '#757070', marginRight: '5px'}}/>

        <div className="dateBox" style={{width: '125px', height: '40px'}}>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="picker"
            dateFormat={DATE_FORMAT}
            dateFormatCalendar={DATE_FORMAT_CALENDAR}
          />
          <FontAwesomeIcon icon={faCaretDown} className='arrow'/>
        </div>
      </Wrapper>
      <Button className='my-2' style={{height: '30px', borderRadius: '5px', backgroundColor: '#CEC8C8', color: 'white', fontWeight: 'bold'}}>조회</Button>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  border-radius: 10px;

  .dateBox {
    display: flex;
    position: relative;
    transform: translate(0, -8px);

    .picker {
      position: absolute;
      width: 110px;
      border: none;
      border-radius: 0%;
      transform: translate(0, -10px);
      font-size: 14px;
    }

    .arrow{
      color: #978F88;
      transform: translate(-5px, 13px);
    }
  }

`;
