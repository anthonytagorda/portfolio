import * as THREE from "three";

const HeroLights = () => (
    <>
        {/* lamp's light */}
        <spotLight
            position={[2, 5, 6]}
            angle={0.15}
            penumbra={0.2}
            intensity={100}
            color="white"
        />
        {/* subtle point light for atmospheric tone */}
        <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7"/>
        <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4"/>
    </>
);

export default HeroLights;