import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from "./Idle";
import "./App.css";

const App = () => {
	const [isTalking, setIsTalking] = useState(false);

	return (
		<Canvas shadows camera={{ position: [0, 0, 18], fov: 30 }}>
			<Environment
				files="/forest_slope_4k.hdr"
				ground={{ height: 10, radius: 30, scale: 20 }}
			/>
			<Model
				position={[0, 0, 3]}
				scale={1.8}
				animationName={isTalking ? "talk" : "idle"}
			/>
			<OrbitControls
				enableZoom={false}
				minPolarAngle={Math.PI / 3}
				maxPolarAngle={Math.PI / 2.25}
			/>
		</Canvas>
	);
};

export default App;
