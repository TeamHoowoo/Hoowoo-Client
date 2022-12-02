const user = [
    {
    user_id: 'aaa',
    user_name: 'wan',
    },
    {
    user_id: 'bbb',
    user_name: 'ebulsok',
    },
    {
    user_id: 'ccc',
    user_name: 'thals',
    },
    {
    user_id: 'ddd',
    user_name: 'ddingyul',
    }
]

const order = [
  {
    order_id: 1111,
    regDate: '2022.12.24',
    count: 2,
    delivery: '택배',
    pickupHour: 2022 - 12 - 29,
    letteringColor: ['red', 3000],
    creamColor: ['white', 1000],
    flavor: ['plain'],
    size: [1],
    price: 50000,
    lettering: 'hellow world',
    item_id: 'custom',
    user_id: 'wan',
    totalPrice: 0,
  },
  {
    order_id: 2222,
    regDate: '2022.12.30',
    count: 2,
    delivery: '픽업',
    pickupHour: 2022 - 12 - 29,
    letteringColor: ['black', 3000],
    creamColor: ['yellow', 1000],
    flavor: ['chock'],
    size: [2],
    price: 60000,
    lettering: 'hellow world',
    item_id: 'today',
    user_id: 'ebulsok',
    totalPrice: 0,
  },
  {
    order_id: 3333,
    regDate: '2022.12.25',
    count: 2,
    delivery: '퀵',
    pickupHour: 2022 - 12 - 29,
    letteringColor: ['black', 3000],
    creamColor: ['yellow', 1000],
    flavor: ['chock'],
    size: [2],
    price: 60000,
    lettering: 'hellow world',
    item_id: 'special',
    user_id: 'ddingyul',
    totalPrice: 0,
  },
];

// review_id, regDate, title, content, star, image_id, user_id, item_id
const review = [
  {
    review_id: 'wan',
    regDate: '2022.12.23',
    title: 'aaaaaa',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, ullam. Rerum architecto harum quaerat sed reiciendis quo, aut natus doloribus.',
    star: 3,
    image_id: 'wan',
    user_id: 'wan',
    item_id: 'special',
    totalPrice: 1111,
    review_ok: false,
  },
  {
    review_id: 'ebulsok',
    regDate: '2022.12.24',
    title: 'aaaaaa',
    content: 'hihihihihihihhdsihafihsisfahasdfihafs',
    star: 5,
    image_id: 'wan',
    user_id: 'ebulsok',
    item_id: 'custom',
    totalPrice: 2222,
    review_ok: false,
  },
];

// coupon_id, regDate, expDate, DCPrice, couponName, couponDetail, user_id
const coupon = [
    {
        coupon_id: '',
        regDate : '',
        expDate: '',
        DCPrice: '',
        couponName: '',
        couponDetail: '',
        user_id: '',
    }
]

let mydata = [user, order, review, coupon];
export default mydata;

