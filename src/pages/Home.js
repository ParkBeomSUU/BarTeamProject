import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "./Home.css";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Light } from "three";

// function Inner(){
//   let scene = new THREE.Scene();
//   let renderer = new THREE.WebGLRenderer({
//     // canvas : document.querySelector('#canvas'),
//     antialias : true
//   });
//   renderer.outputEncoding =THREE.sRGBEncoding;
//   let camera = new THREE.PerspectiveCamera(30,1);
//   camera.position.set(0,0,5);

//   scene.background = new THREE.Color("white");
//   let loader = new GLTFLoader();
//   const gltf = useLoader(GLTFLoader, "./robot_playground/scene.gltf", function(gltf){
//     scene.add(gltf.scene);
//     renderer.render(scene, camera);

//     function animate(){
//       requestAnimationFrame(animate)
//       // gltf.scene.rotation.y +=0.02
//       renderer.render(scene,camera);
//     }
//     animate()

//   })

//   return (

//     <Canvas  id="canvas" camera={{ position: [-0.5, 1, 2] }} shadows >
//     <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
//     <primitive
//       object={gltf.scene}
//       position={[0, 1, 0]}
//       children-0-castShadow

//     />
//     <Circle args={[10]} rotation-x={-Math.PI / 2} receiveShadow>
//       <meshStandardMaterial />
//     </Circle>
//     <OrbitControls target={[0, 1, 0]} />
//     <axesHelper args={[5]} />
//     <Stats />
//   </Canvas>
//   )

// }

// 화면의 살짝 아래
const Positioner = styled.div`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

// 로고
const LogoWrapper = styled.div`
  background-color: transparent;
  border: 3px solid rgb(17 202 240);
  height: 6rem;
  width: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: rgb(17 202 240);
  font-size: 3rem;
  letter-spacing: 5px;
  text-decoration: none;
`;

const Neon = () => {
  return (
    <div className="container">
      <svg id="Logo" viewBox="0 0 960 300">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="80%">
            ECUZO
          </text>
        </symbol>

        <g className="g-ants">
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
          <use xlinkHref="#s-text" className="text-copy"></use>
        </g>
      </svg>
    </div>
  );
};
//position:"absolute"
const Robot = () => {
  return (
    <>
      <div class="sketchfab-embed-wrapper">
        <div
          style={{
            // width: "100%",
            // height: "5%",
            position: "absolute",
            zIndex: "2",
            backgroundColor: "white",
            color: " rgb(17 202 240)",
            textAlign: "center",
            fontSize: "30px",
          }}
        >
          ECUZO
        </div>
        <iframe
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            zIndex: "1",
          }}
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          src="https://sketchfab.com/models/a433cf31672042da861e1b5b7a7a68bd/embed?autostart=1"
        ></iframe>
      </div>
    </>
  );
};
const Footer = () => {
  return (
    <>
      <div
        style={{
          position: "absolute",
          zIndex: "2",
          backgroundColor: "white",
          textAlign: "center",
          bottom: "0",
        }}
      ></div>
    </>
  );
};

// const HiRobot =() =>{

//   let scene = new THREE.Scene();
//   let renderer = new THREE.WebGLRenderer({
//     canvas : document.querySelector('#canvas'),
//     antialias : true
//   });
//   renderer.outputEncoding =THREE.sRGBEncoding;

//   let camera = new THREE.PerspectiveCamera(30,1);
//   camera.position.set(0,0,5);

//   let loader = new GLTFLoader();
//   loader.load('robot_playground/scene.gltf', function(gltf){
//     scene.add(gltf.scene);
//     renderer.render(scene,camera);
//     function animate(){
//       requestAnimationFrame(animate)
//       gltf.scene.rotation.y += 0.001;
//       renderer.render(scene,camera);

//     }
//     animate()
//   });
//   return(
//     <canvas  id="canvas" ></canvas>

//   )

// }
const ContentHeader = () => {
  // const [forHyenoh, setForHyenoh] = useState("");

  return (
    <>
      <div class="logo">
        <b>
          E<span>C</span>U<span>Z</span>O
        </b>
      </div>

      <Positioner style={{ position: "absolute", zIndex: "2" }}>
        <LogoWrapper>
          <Logo to="/auth/login" style={{ position: "absolute", zIndex: "2" }}>
            LOGIN
          </Logo>
        </LogoWrapper>
      </Positioner>
      <Footer style={{ position: "absolute", zIndex: "2" }} />
    </>
  );
};

export default ContentHeader;
