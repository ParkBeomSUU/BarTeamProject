import { useState, useEffect} from "react";
import Swal from 'sweetalert2'
import "./Recipt.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Table } from "react-bootstrap";
import axios from "axios";

//스타일
const temp = {
    width: "90%",
    height: "100%",
    margin: "5%",
    padding: "0",
    color: "black",
};

// Swal.fire({
//   icon: "warning",
//   title: "주문 확인",
//   text: `${tableNum}번 테이블 주문 완료!`,
//   confirmButtonText: "확인",
// })
//메뉴 받아오는 부분
const MenuCheckModal = ({
                            isOrderDone,
                            setOrderDone,
                            setBill,
                            setMenuText,
                            setVolume,
                            bill,
                            volume,
                            content,
                            menuText,
                            setForHyenoh,

                        }) => {
    const [show, setShow] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    //헤더 테이블
    const [sentCnt, setSentCnt] = useState(0)


//헤더 테이블
    const headerMeta = ["상품", "수량", "가격"];

    //모달 관리
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // 값 키 벨류 받아오고 토탈값 구하기
    useEffect(() => {
        let tp = 0;
        Object.keys(bill).forEach((bk) => {
            tp += bill[bk];
        });
        setTotalPrice(tp);
    }, [bill]);

    useEffect(() => {
        console.log("현재까지 계산된 총액은:", totalPrice);
    }, [totalPrice]);

    //확인버튼 클릭시 페이지 처음으로 돌리기
    const ClickReset = () => {
        setTotalPrice(0);
        setOrderDone(false);
        setBill({});
        setMenuText("");
        setVolume({
            //양주
            founder: 0,
            GlenDower: 0,
            Jagermeilter: 0,
            JimBeam: 0,
            Tina: 0,
            TheClass33: 0,
            Macallan12: 0,
            TellinfSingleMalt: 0,

            //음식
            cheeseBall: 0,
            FriedOjiCheese: 0,
            Gambas: 0,
            Gorgonzola: 0,
            Mellon: 0,
            Pepperoni: 0,
            Pineapple: 0,

            //전통주
            Dowon: 0,
            Hwang: 0,
            Lee: 0,
            mak: 0,
            Monkey: 0,
            Naru: 0,
            nimome: 0,
            OdiRang: 0,
            Omiza: 0,
            OneSoju: 0,
            Peach: 0,
            perpleJin: 0,
            Rye: 0,
            SuloCity: 0,

            //칵테일
            bloodyMary: 0,
            blueHawaii: 0,
            cosmopolitan: 0,
            margarita: 0,
            martini: 0,
            mojito: 0,
            oldFashioned: 0,
            rustyNail: 0,
            sangria: 0,
            tequilaSunrise: 0,
        });
    };
    const token =window.localStorage.getItem("userAccessToken")
    const [tableNum, setTableNum] =useState("");
    axios.get("https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/userOne",{headers:{'Content-Type': 'application/json','Authorization':"Bearer "+token}
    }).then(response=>{
        setTableNum(response.data['tableNum']);
    })

    const sendMenu = () => {
        console.log(`이전까지 주문 횟수는 ${sentCnt}번입니다`);

        // 내가 content, totalPrice
        if (sentCnt === 0) {
            axios
                .post(
                    'https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/create',
                    { content: menuText, totalPrice: totalPrice },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token,
                        },
                    }
                )
                .then((res) => {
                    console.log('성공했습니다.');
                    Swal.fire({
                        icon: 'success',
                        title: '주문 확인',
                        text: `${tableNum}번 테이블 주문 완료!`,
                        confirmButtonText: '확인',
                    });
                    setSentCnt(sentCnt + 1);
                })
                .catch((error) => {
                    console.log('실패', error);
                    window.location.href = '/jwtExpired';
                });
        } else {
            axios
                .put(
                    `https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/update/${tableNum}`,
                    { content: menuText, totalPrice: totalPrice },
                    {
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token,
                        },
                    }
                )
                .then((res) => {
                    console.log('성공했습니다.');
                    Swal.fire({
                        icon: 'success',
                        title: '추가 주문 확인',
                        text: `${tableNum}번 테이블 추가주문 완료!`,
                        confirmButtonText: '확인',
                    });
                    setSentCnt(sentCnt + 1);
                })
                .catch(() => {
                    // window.location.href='/jwtexpired'
                });
        }
    };

    useEffect(() => {
        console.log(`현재까지 주문 횟수는 ${sentCnt}번입니다`);
    }, [sentCnt]);

    return (
        <>
            <Button
                id="OrderCheck"
                size="lg"
                style={{color:"white", backgroundColor:"rgb(38 155 185)",border:"none"}}
                onClick={(e) => {
                    setOrderDone(!isOrderDone);
                    handleShow();
                }}
            >
                주문 하기
            </Button>

            <Modal style={temp} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title className="OrderList" style={{ textAlign: "center" }}>
                        주문확인
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body className="OrderList">
                    <Table bordered  className="center">
                        <thead>
                        <tr>
                            {headerMeta.map((i) => (
                                <th>{i}</th>
                            ))}
                        </tr>
                        </thead>

                        <tbody className="ReciptBody">
                        {Object.keys(bill).map((b) => {
                            return (
                                <>
                                    <tr>
                                        <td>{b}</td>
                                        <td>{volume[b]}</td>
                                        <td> {bill[b]}</td>
                                    </tr>
                                </>
                            );
                        })}
                        </tbody>

                        <tfoot className="ReciptFoot">
                        <th></th>
                        <th></th>
                        total : {totalPrice} 원
                        </tfoot>
                    </Table>
                </Modal.Body>

                <Modal.Footer>
                    <div style={{ color: "black" }}> 주문하시겠습니까?</div>
                    <Button
                        className="ModalSend"
                        variant="outline-info"
                        id="send"
                        onClick={(e) => {

                            sendMenu();
                            setForHyenoh({
                                bill,
                                volume,
                                totalPrice,
                            });
                            //클랙했을때 리셋
                            ClickReset();

                            //클릭했을때 영수증에 보내기

                            //닫기보턴
                            handleClose();
                        }}
                    >
                        확인
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default MenuCheckModal;