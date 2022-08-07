import React from 'react';
import {Container, Grid} from "@material-ui/core";
import "../utils/css/loader.css";

const Loader = () => {
    return (
        <div>
            <Container>
                <Grid
                    container
                    style={{height: window.innerHeight - 50}}
                    alignItems="center"
                    justify={"center"}
                >
                    <Grid
                        container
                        alignItems="center"
                        direction="column"
                    >
                        <div className="lds-hourglass"/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Loader;