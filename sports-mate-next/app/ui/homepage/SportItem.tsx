import { MotionDiv } from "../motion/MotionDiv";
import { IconButton } from "@mui/material";
import Link from "next/link";

const SportItem: React.FC<{ children: JSX.Element[] | JSX.Element, sport: string, path: string }> = (props) => {

    return (
        <div>
            <Link href={props.path} >
                <IconButton size="large" edge='start' sx={{ color: 'black', borderRadius: '10px' }}>
                    {props.children}
                    <div>{props.sport}</div>
                </IconButton>
            </Link>
        </div>
    )
}

export default SportItem;