import { useRouter } from "next/router";
import { GetScreenBreakPoints } from "@/Helpers/MediaQueries";
import useOutsideClick from "@/Helpers/CloseModal";
import { DrawerButton, DrawerContainer, MiniDrawer } from "./NavStyles";
import { NavRoutes } from ".";
import { useNavigateTo } from "../TodayStori";

const CustomDrawer = (props: any) => {
  const { isNextHub, isIpad } = GetScreenBreakPoints();
  const { isOpen, close } = props;
  const modalContainerRef = useOutsideClick(close);
  const router = useRouter();
  const navigateTo = useNavigateTo();

  return (
    <DrawerContainer isOpen={isOpen} ref={modalContainerRef}>
      <MiniDrawer ismd={isNextHub} issm={isIpad}>
        {NavRoutes.map((MyRoutes, index) => (
          <DrawerButton
            key={index}
            variant="text"
            onClick={() => {
              navigateTo(MyRoutes.path);
              close();
            }}
          >
            {MyRoutes.label}
          </DrawerButton>
        ))}
      </MiniDrawer>
    </DrawerContainer>
  );
};

export default CustomDrawer;
