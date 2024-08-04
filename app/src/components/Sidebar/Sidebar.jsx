import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import useLogout from "../../Hooks/useLogout";
import { BeatLoader } from "react-spinners";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import useAddSite from "../../Hooks/useAddSite";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Sidebar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [website, setWebsite] = React.useState("");
  const user = useSelector((state) => state.auth.user);
  const { loading, logoutUser } = useLogout();

  const handleLogout = async (e) => {
    e.preventDefault();
    await logoutUser();
  };

  const { addSite, addLoading } = useAddSite();
  const addWebsite = async (e) => {
    e.preventDefault();
    await addSite(website);
    handleClose();
    setWebsite("");
  };

  return (
    <div className="sidebar">
      <div className="name">
        <h1>{user ? user?.data[0]?.username : "User"}</h1>
        <p>{user ? user?.data[0]?.email : "email"}</p>
      </div>
      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <button>Dashboard</button>
        </li>

        <li className="sidebar-list-item">
          <button onClick={handleOpen}>Add website</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Add a website
              </Typography>{" "}
              <br />
              <TextField
                id="outlined-basic"
                label="Website URL"
                variant="outlined"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />{" "}
              <Button variant="contained" onClick={addWebsite}>
                {addLoading ? <BeatLoader /> : "Add"}
              </Button>{" "}
            </Box>
          </Modal>
        </li>

        <li className="sidebar-list-item">
          <button onClick={(e) => handleLogout(e)} disabled={loading}>
            {loading ? <BeatLoader /> : "Logout"}
          </button>
        </li>
      </ul>
    </div>
  );
}
export default Sidebar;
