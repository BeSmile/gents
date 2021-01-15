import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import { createStyles, fade, Theme, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { ReactLink } from '@utils/index';

// import { Link as RouterLink, LinkProps as RouterLinkProps } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        toolBar: {
            padding: 0,
        },
        paper: {
            // padding: theme.spacing(3, 2),
            margin: theme.spacing(2, 0, 2, 0),
        },
        img: {
            height: 200,
            width: '100%',
            objectFit: 'cover',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
            display: 'none',
            [theme.breakpoints.up('sm')]: {
                display: 'block',
            },
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            width: theme.spacing(7),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 7),
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: 120,
                '&:focus': {
                    width: 200,
                },
            },
        },
        container: {
            minHeight: 640,
        },
        footer: {
            marginTop: theme.spacing(3),
            padding: theme.spacing(2),
        }
    }),
);

// event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
function handleClick(index: number) {
    // event.preventDefault();
    let { global: {
        breadcrumbs = [],
    }, dispatch } = this;
    dispatch({
        type: 'global/updateBreadcrumb',
        payload: {
            breadcrumbs: breadcrumbs.slice(0, index + 1),
        }
    })
}

// const ReactLink = React.forwardRef<HTMLAnchorElement, Omit<RouterLinkProps, 'innerRef' | 'to'>>(
//   (props, ref) => <RouterLink innerRef={ref} to={props.href} {...props} />,
// );

function generate(bms, props): Array<React.ReactElement> {
    let breadcrumbs = JSON.parse(JSON.stringify(bms));
    const len = breadcrumbs.length;
    let TypographyUI = null;
    if (breadcrumbs.length >= 1) {
        const breadcrumb = breadcrumbs.pop();
        TypographyUI = React.cloneElement(<Typography key={len} color="textPrimary">{breadcrumb.name}</Typography>, {
            key: len,
        });
    }
    let Ele = breadcrumbs.map((item, k) => (
        <Link key={k} color="inherit" component={ReactLink} href={item.url} onClick={() => { handleClick.call(props, k) }}>
            {item.name}
        </Link>
    ));
    Ele.push(TypographyUI);
    return Ele;
}

function BaseLayoutUI({ children, ...props }) {
    const classes = useStyles('');
    const { global: {
        breadcrumbs = [],
    } } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Container maxWidth="lg" >
                    <Toolbar className={classes.toolBar}>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="open drawer"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={classes.title} variant="h6" noWrap>
                            菜单栏
                        </Typography>

                        <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </Toolbar>
                </Container>
            </AppBar>

            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <article className={classes.paper}>
                        <Breadcrumbs aria-label="breadcrumb">
                            {generate(breadcrumbs, props)}
                        </Breadcrumbs>
                    </article>
                    <Paper className={classes.paper}>
                        <img className={classes.img} src="http://game.gtimg.cn/images/sg/web201706/bg01.jpg" />
                    </Paper>
                    <Typography component="div" className={classes.container}>
                        {children}
                    </Typography>
                </Container>

                <Paper className={classes.footer}>
                    ---- ----
                </Paper>
            </React.Fragment>
        </div>
    );
}

interface defaultProps {
    // product: Array<any>
}

const mapToProps = (state): defaultProps => {
    return {
        global: state.global,
    };
}
const BaseLayout = connect(mapToProps)(BaseLayoutUI)
export default BaseLayout;
