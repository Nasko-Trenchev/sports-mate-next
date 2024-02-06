import { Stack, Divider } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import { MotionDiv } from "./ui/motion/MotionDiv";
import SportItem from "./ui/homepage/SportItem";

export default function Home() {
  return (
    <main className="flex flex-col">
      <StyledEngineProvider>
        <MotionDiv
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex min-h-screen flex-col items-center relative text-sm mt-[5%]">
          <h1 className="text-center text-4xl font-bold">SportsMate</h1>
          <p className="text-center text-lg mt-10">Share your sport passion with fellow athletes in Sofia</p>
          <p className="text-center text-lg mt-10">Select your sport to continue</p>
          <Stack
            direction={"row"}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={3}
            className="mt-[5%] text-2xl"
          >
            <SportItem sport="Football" path='football'>
              <SportsSoccerSharpIcon />
            </SportItem>
            <SportItem sport="Tennis" path='tennis'>
              <SportsTennisIcon />
            </SportItem >
            <SportItem sport="Basketball" path='basketball'>
              <SportsBasketballIcon />
            </SportItem>
            <SportItem sport="Volleyball" path='volleyball'>
              <SportsVolleyballIcon />
            </SportItem>
          </Stack>
        </MotionDiv>
      </StyledEngineProvider>
    </main>
  );
}
