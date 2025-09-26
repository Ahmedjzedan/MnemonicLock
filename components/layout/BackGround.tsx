import Frosted from "../ui/Frosted";
import Blob from "../ui/Blob";
export default function BackGround() {
  return (
    <>
      <Frosted blurAmountProp="backdrop-blur-[8rem]" />
      <Blob directionProp="top-[-10%] right-[-10%]" />
      <Blob directionProp="bottom-[30%] left-[-10%]" />
      <Blob directionProp="bottom-[-20%] right-[-10%]" />
    </>
  );
}
