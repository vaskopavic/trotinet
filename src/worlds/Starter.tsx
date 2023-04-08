import { Floating, StandardReality, Model, Interactable } from "spacesvr";
import TransparentFloor from "ideas/TransparentFloor";
import { Sky, Cloud } from "@react-three/drei";

export default function Starter() {
  return (
    <StandardReality
      playerProps={{
        pos: [0, 1, 1],
      }}
    >
      <ambientLight intensity={4} />
      <Model
        src=".\vrShowcaseGlassFixed.glb"
        scale={0.007}
        position={0.01}
        rotation-x={-Math.PI / 2}
      />
      <Floating height={0.1} speed={1.5}>
        <Interactable
          onClick={() =>
            window.open(
              "https://eu-en.segway.com/products/ninebot-kickscooter-d-series"
            )
          }
        >
          <Model src=".\product.glb" scale={0.01} position={[0.05, 0.8, 0]} />
        </Interactable>
      </Floating>
      <TransparentFloor opacity={0.7} />
      <Sky sunPosition={[0, 1, 0]} />
      <Cloud position-y={15} />
    </StandardReality>
  );
}
