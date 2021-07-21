import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Paper, TextField } from "@material-ui/core";
import { createBook } from '../../redux/features/book'
import { useDispatch } from 'react-redux'

const useStyle = makeStyles((theme) => ({
  modal: {
    background: "rgba(0,0,0,0.8)",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: 0,
    left: 0,
    transform: "scale(0)",
  },
  "modal active": {
    transform: "scale(1)",
  },
  card: {
    position: "absolute",
    width: 700,
    height: 600,
    marginLeft: "32%",
    marginRight: "32%",
    marginTop: 50,
    zIndex: 10,
  },
  button: {
    textAlign: "right",
    width: "100%",
  },
  display: {
    display: "flex",
    justifyContent: "center",
  },
  buttons: {
    marginTop: 60,
    display: "flex",
    justifyContent: "space-around",
  },
}));

function ModalBookCreate({ opened, setOpened }) {
  const classes = useStyle();
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch()

  const clear = () => {
    setName('')
    setImg('')
    setDescription('')
  };
  const handleChangeBook = (e) => {
    setName(e.target.value);
  };
  const handleChangeImg = (e) => {
    setImg(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleChange =()=> {
    dispatch(createBook({name, img, description}))
    console.log({name, img, description})
  }

  return (
    <div className={opened === true ? classes["modal active"] : classes.modal}>
      <Paper className={classes.card}>
        <Box className={classes.button}>
          <Button color="primary" onClick={() => setOpened(false)}>
            X
          </Button>
        </Box>

        <Box className={classes.display}>
          <Box style={{ marginTop: 60 }}>
            <Box style={{ marginTop: 20 }}>
              <TextField
                id="outlined-basic"
                label="Название книги"
                variant="outlined"
                onChange={handleChangeBook}
                value={name}
              />
            </Box>
            <Box style={{ marginTop: 20 }}>
              <TextField
                id="outlined-basic"
                label="Фото книги"
                variant="outlined"
                onChange={handleChangeImg}
                value={img}
              />
            </Box>
            <Box style={{ marginTop: 20 }}>
              <TextField
                id="outlined-multiline-static"
                label="Описание книги"
                multiline
                rows={4}
                style={{ width: 500 }}
                variant="outlined"
                onChange={handleChangeDescription}
                value={description}
              />
            </Box>
            <Box className={classes.buttons}>
              <Button variant="outlined" color="primary" onClick={clear}>
                Отмена
              </Button>
              <Button variant="contained" color="primary" onClick={handleChange}>
                Добавить
              </Button>
            </Box>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default ModalBookCreate;