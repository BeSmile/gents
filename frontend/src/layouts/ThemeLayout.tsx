import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
// import img from '@public/assets/bg.jpeg';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        background: {
            // backgroundImage: `url(${img})`,
            height: '100%',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }
    }),
);

export default function({children}) {
    const classes = useStyles("");
    return (
        <div className={classes.background}>
            {children}
        </div>
    )
}
