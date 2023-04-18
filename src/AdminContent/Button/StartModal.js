import React, { useState, useEffect } from "react";
import ROSLIB from "roslib";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Admin.css";
import TableOrder from "./TableOrder";
import axios from "axios";
import Swal from "sweetalert2";

function Start({currentTable, setTableContent}) {
  const accessToken = window.localStorage.getItem("adminAccessToken");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [message, setMessage] = useState("");
  const [robotPosition, setRobotPosition] = useState({ x: 0, y: 0, z: 0 });
  const [arrived,setArrived] =useState(false);
  const table1Position = { x: 6.57, y: 1.2, z: 0 };
  const table2Position = { x: 6.6, y: -2.5, z: 0 };
  const table3Position = { x: 2.3, y: 1.2, z: 0 };
  const table4Position = { x: 2.3, y: -2.2, z: 0 };
  const [tableNum,setTableNum] = useState(0);
  const [status,setStatus] =useState(false);
  const ros = new ROSLIB.Ros({
    url: "ws://192.168.0.135:9090",
  });

  

  useEffect(() => {
    const robotPoseListener = new ROSLIB.Topic({
      ros: ros,
      name: "/robot_pose",
      messageType: "geometry_msgs/PoseStamped",
    });

    robotPoseListener.subscribe((pose) => {
      setRobotPosition({
        x: pose.pose.position.x,
        y: pose.pose.position.y,
        z: pose.pose.position.z,
      });
    });

    return () => {
      robotPoseListener.unsubscribe();
    };
  }, [ros]);

  function moveRobot(position, orientation) {
    const poseStamped = new ROSLIB.Message({
      header: {
        seq: 0,
        stamp: { secs: 0, nsecs: 0 },
        frame_id: "map",
      },
     
      pose: {
        position: { x: position.x, y: position.y, z: position.z },
        orientation: {
          x: orientation[0],
          y: orientation[1],
          z: orientation[2],
          w: orientation[3],
        },
      },
    });

    const moveBaseSimpleGoal = new ROSLIB.Topic({
      ros: ros,
      name: "/move_base_simple/goal",
      messageType: "geometry_msgs/PoseStamped",
    });

    moveBaseSimpleGoal.publish(poseStamped);
  }

  function handleMoveToTable1() {
    const orientation = [0, 0, 0, 1];
    moveRobot(table1Position, orientation);
  }

  function handleMoveToTable2() {
    const orientation = [0, 0, 0, 1];
    moveRobot(table2Position, orientation);
  }

  function handleMoveToTable3() {
    const orientation = [0, 0, 0, 1];
    moveRobot(table3Position, orientation);
  }

  function handleMoveToTable4() {
    const orientation = [0, 0, 0, 1];
    moveRobot(table4Position, orientation);
  }

     // 도착완료
    //  useEffect(() => {
    //   const arrived = (goalPosition) => {
    //     const threshold = 0.8;
    //     const distance = Math.sqrt(
    //       Math.pow(goalPosition.x - robotPosition.x, 2) +
    //       Math.pow(goalPosition.y - robotPosition.y, 2) +
    //       Math.pow(goalPosition.z - robotPosition.z, 2)
    //     );
    //     return distance <= threshold;
    //   };
      
    //   if (arrived(table1Position)) {
    //     setMessage("도착완료: Table 1");
    //     setStatus(true)
    //     console.log("도착해썽유1")
    //     setTableNum(1);
    //   } else if (arrived(table2Position)) {
    //     setMessage("도착완료: Table 2");
    //     setStatus(true)
    //     setTableNum(2);
    //   } else if (arrived(table3Position)) {
    //     setMessage("도착완료: Table 3");
    //     setStatus(true)
    //     setTableNum(3);
    //   } else if (arrived(table4Position)) {
    //     setMessage("도착완료: Table 4");
    //     setStatus(true)
    //     setTableNum(4);
    //   } else {
    //     console.log("도착해썽유4")
    //     setMessage("");
    //     setTableNum(0); 
    //   }
    // }, [robotPosition]);
    useEffect(() => {
      setTimeout(() => {
          setStatus(true)
          
          Swal.fire({
            title: '로봇이 도착했습니다.',
            text: '확인 버튼을 눌러주세요',
            icon: 'success',
            // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: '#3085d6', // confirm 버튼 색깔 지정
            confirmButtonText: '확인', // confirm 버튼 텍스트 지정
            didClose: () => {
              setTableContent({})
              
            }
        }).then(()=>{
          axios.delete(`https://port-0-ezuco-cloudtype-108dypx2ale6e8i6k.sel3.cloudtype.app/delete/${tableNum}`, {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + accessToken,
            }})// delete order 주소 
          setStatus(false)
        })
        
      }, 80000);
      // return ()=>clearInterval(timer)
    }, [tableNum]);
    
  function handleClickToStart(currentTable){
    if(window.confirm(`${currentTable}번 테이블로 바로가자`)){
      setTableNum(currentTable)
      const funcs = [handleMoveToTable1, handleMoveToTable2, handleMoveToTable3, handleMoveToTable4]
      funcs[currentTable - 1]()
    }
  }

  return (
    <>
      <Button
        variant="light"
        id="SendBtn"
        size="lg"
        // onClick={handleShow}
        onClick={() => handleClickToStart(currentTable)}
      >
       {currentTable}번 테이블 보내기
      </Button>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="GoModal" id="GoBody">
        <div className="App">
          <h2>로봇의 이동 테이블 </h2>
          <button className="SendButton" onClick={handleMoveToTable1}>Move to Table 1</button>
          <button className="SendButton" onClick={handleMoveToTable2}>Move to Table 2</button>
          <button className="SendButton" onClick={handleMoveToTable3}>Move to Table 3</button>
          <button className="SendButton" onClick={handleMoveToTable4}>Move to Table 4</button>
          <h2 style={{color:"black"}}>도착 완료 여부 </h2>
          <p style={{color:"black"}}>{message}</p>
        </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Start;
