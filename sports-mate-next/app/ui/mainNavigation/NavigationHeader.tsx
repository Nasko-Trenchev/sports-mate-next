
import { AppBar, Toolbar, IconButton, Typography, Stack } from "@mui/material";
import { StyledEngineProvider } from '@mui/material/styles';
// import { auth } from "../../config/firebase";
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsSoccerSharpIcon from '@mui/icons-material/SportsSoccerSharp';
import Link from "next/link";
// import ProfileIcon from "../Profile/ProfileIcon";

export default function NavigationHeader() {

    return (
        <StyledEngineProvider injectFirst>
            <AppBar color='default' position="static" className="bg-neutral-100 sticky top-0 z-50 w-full">
                <Toolbar>
                    <IconButton size="large" edge='start' color="inherit" aria-label="logo">
                        <Link href={'/'} className="font-serif italic font-bold no-underline text-black">
                            <SportsSoccerSharpIcon />
                        </Link>
                    </IconButton>
                    <Typography variant="h6" component='div' sx={{ color: 'black', fontWeight: 'bolder', flexGrow: 1, fontFamily: 'Inter sans-serif', fontSize: '2em', fontStyle: 'italic' }}>
                        <Link href={'/'} className="inherit">SportsMate</Link>
                    </Typography>

                    <Stack direction={'row'}>
                        {/* {auth.currentUser ? */}
                        <Stack direction={'row'}>
                            <Link href={'/'} className="font-serif italic font-bold no-underline text-black p-2">Home</Link>
                            <Link href={'/logout'} className="font-serif italic font-bold no-underline text-black p-2">Logout</Link>
                            {/* <ProfileIcon /> */}
                        </Stack>
                        {/* : */}
                        <Stack direction={'row'}>
                            <Link href={'/register'} className="font-serif italic font-bold no-underline text-black block p-2">Register</Link>
                            <Link href={'/login'} className="font-serif italic font-bold no-underline text-black p-2">Login</Link>
                        </Stack>
                        {/* } */}
                    </Stack>
                    <IconButton size="large" edge='start' color="inherit" aria-label="logo" sx={{ margin: '1px' }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton size="large" edge='start' color="inherit" aria-label="logo" sx={{ margin: '1px' }}>
                        <Link href={'/helpSection'}><LiveHelpIcon className="text-black" /></Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </StyledEngineProvider >
    )
}
