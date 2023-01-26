import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import InputBox from "../../atom/Input/Input";
import { useState } from "react";
import { useRecoilState } from "recoil";
import style from './Form.module.css'
import { UserListData } from "../../RecoilState/UserListData";


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Form({buttonText , Icon ,className}) {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [Lname, setLName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");

  const [image, setImage] = useState(null);
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [Phone, setPhone] = useState("");
  const [zip, setZip] = useState("");
  const [Proceed, setProceed] = useState(false);
  const [DataList, setDataList] = useRecoilState(UserListData);
  const [open, setOpen] = React.useState(false);

  const onImageChange = (event) => {
    if (event.target.files[0]) {
      console.log(event.target.files[0]);
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const handleProceed = () => {
    if (
      user === "" ||
      name === "" ||
      Lname === "" ||
      email === "" ||
      password === "" ||
      Cpassword === ""
    ) {
      alert("Please enter correct Detail");
    } else {
      setProceed(true);
    }
  };
  const handleSave = () => {
    if (
      address === "" ||
      gender === ""  ||
      country === "" ||
      state === "" ||
      city === "" ||
      zip === ""
    ) {
      alert("Please enter correct Detail");
    } else {
      const customerDetails = {
        UserName: user,
        FirstName: name,
        LastName: Lname,
        DOB : date,
        Email: email,
        Password: password,
        ConfirmPassword: Cpassword,
        Image: image,
        Address: address,
        Country: country,
        State: state,
        City: city,
        Zipp: zip,
        Gender : gender,
        PhoneNUmber : Phone
      };
      console.log(image, "image url");

      setDataList([customerDetails,...DataList]);

      setOpen(false);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={style.mainn}>
      <button className={className} variant="outlined" onClick={handleClickOpen}>
      {Icon}
        {buttonText}
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        {Proceed ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
              }}
            >
              <h3> Add User | Profile details</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <input
                  type="file"
                  onChange={onImageChange}
                  className="filetype"
                />
             
                <InputBox
                  placeHolder="Gender"
                  Type="text"
                  Value={gender}
                  OnChange={(e) => setGender(e.target.value)}
                />
                <InputBox
                  placeHolder="Address"
                  Type="text"
                  Value={address}
                  OnChange={(e) => setAddress(e.target.value)}
                />

                <InputBox
                  placeHolder="Country"
                  Type="text"
                  Value={country}
                  OnChange={(e) => setCountry(e.target.value)}
                />
                <InputBox
                  placeHolder="State"
                  Type="text"
                  Value={state}
                  OnChange={(e) => setState(e.target.value)}
                />
                <InputBox
                  placeHolder="City"
                  Type="text"
                  Value={city}
                  OnChange={(e) => setCity(e.target.value)}
                />
                <InputBox
                  placeHolder="Phone Number"
                  Type="number"
                  Value={Phone}
                  OnChange={(e) => setPhone(e.target.value)}
                />
                <InputBox
                  placeHolder="Zip code"
                  Type="number"
                  Value={zip}
                  OnChange={(e) => setZip(e.target.value)}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  justifyContent: "space-around",
                }}
              >
                <button className={style.btn} onClick={handleClose}>cancel</button>
                <button  className={style.btn}  onClick={handleSave}>Save</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem",
              }}
            >
              <h3> Add User | Login details</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                }}
              >
                <InputBox
                  placeHolder="User Name"
                  Type="text"
                  Value={user}
                  OnChange={(e) => setUser(e.target.value)}
                />
                <InputBox
                  placeHolder="First Name"
                  Type="text"
                  Value={name}
                  OnChange={(e) => setName(e.target.value)}
                />
                <InputBox
                  placeHolder="Last Name"
                  Type="text"
                  Value={Lname}
                  OnChange={(e) => setLName(e.target.value)}
                />
                <InputBox
                  placeHolder="D.O.B"
                  Type="date"
                  Value={date}
                  OnChange={(e) => setDate(e.target.value)}
                />
                <InputBox
                  placeHolder="Email"
                  Type="text"
                  Value={email}
                  OnChange={(e) => setEmail(e.target.value)}
                />
                <InputBox
                  placeHolder="Password"
                  Type="password"
                  Value={password}
                  OnChange={(e) => setPassword(e.target.value)}
                />
                <InputBox
                  placeHolder="Confirm Password"
                  Type="password"
                  Value={Cpassword}
                  OnChange={(e) => setCPassword(e.target.value)}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  marginTop: "1rem",
                  justifyContent: "space-around",
                }}
              >
                <button className={style.btn} autoFocus onClick={handleClose}>
                  cancel
                </button>
                <button className={style.btn} autoFocus onClick={handleProceed}>
                  Proceed
                </button>
              </div>
            </div>
          </>
        )}
      </BootstrapDialog>
    </div>
  );
}
