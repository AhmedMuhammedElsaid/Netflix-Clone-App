import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Box from "@material-ui/core/Box";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    border: "none",
    outline: "none",
    height: "90px",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.3rem",
    borderRadius: "1rem",
    flexDirection: "column",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  error: {
    color: theme.palette.warning,
    fontSize: "1rem",
  },
  messageStyle:{
      fontSize:"1.1rem",
      padding:'4px',
      fontWeight:"500"
  }
}));

export default function ModalComponent({ message, open, handleClose }) {
  const classes = useStyles();
  return (
    <div onClick={() => handleClose()}>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Box
              id="transition-modal-title"
              fontWeight="fontWeightMedium"
              color="error.main"
              m={1}
            >
              Something went wrong
            </Box>
            <p
              id="transition-modal-description"
              className={classes.messageStyle}
            >
              {message.slice(6, message.length)}
            </p>
            <p className={classes.messageStyle}>Try Another One </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
