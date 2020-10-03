import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function CreateSP(props) {
  const initialState = {
    legalEntityName: props.ADRCreateOrEdit.legalEntityName,
    industry: props.ADRCreateOrEdit.industry,
  };
  const [formState, setFormState] = useState(initialState);

  const classes = useStyles();
  const [legalEntityName, setLegalEntityName] = useState(
    props.ADRCreateOrEdit.legalEntityName
  );
  const [industry, setIndustry] = useState(props.ADRCreateOrEdit.industry);
  const [logoUri, setLogoUri] = useState(props.ADRCreateOrEdit.logoUri);
  const [softwareProductName, setSoftwareProductName] = useState(
    props.ADRCreateOrEdit.softwareProductName
  );
  const [softwareProductDescription, setSoftwareProductDescription] = useState(
    props.ADRCreateOrEdit.softwareProductDescription
  );

  const setFormValues = (event) => {
    // const newFormState = { ...formState };

    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    let inputObject = { ...formState };
    inputObject[name] = value;
    setFormState(inputObject);
    console.log("logging user name ", name, value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    props.SubmitHandler({
      legalEntityName: legalEntityName,
      industry: industry,
      logoUri: logoUri,
      softwareProductName: softwareProductName,
      softwareProductDescription: softwareProductDescription,
    });

    setLegalEntityName("");
    setIndustry("");
    setLogoUri("");
    setSoftwareProductName("");
    setSoftwareProductDescription("");
  };

  return (
    <Container component="main" maxWidth="xs" className="formContainer">
      <CssBaseline />

      <div className={classes.paper}>
        <h2 className="titleColour">{props.PageTitle}</h2>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        {/* <Typography component="h1" variant="h5">
          Software Product Management
        </Typography> */}
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="legalEntityName"
            label="Legal Entity Name"
            name="legalEntityName"
            autoComplete="legalEntityName"
            autoFocus
            onChange={setFormValues}
            value={formState.legalEntityName}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="industry"
            label="Industry"
            autoComplete="industry"
            autoFocus
            name="industry"
            onChange={(e) => setIndustry(e.currentTarget.value)}
            value={industry}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="legalEntityLogoURL"
            label="Legal Entity Logo URL"
            autoComplete="legalEntityLogoURL"
            autoFocus
            name="legalEntityLogoURL"
            onChange={(e) => setLogoUri(e.currentTarget.value)}
            value={logoUri}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="softwareProductName"
            label="Software Product Name"
            autoComplete="softwareProductName"
            autoFocus
            name="softwareProductName"
            onChange={(e) => setSoftwareProductName(e.currentTarget.value)}
            value={softwareProductName}
          />

          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="softwareProductDescription"
            label="Software Product Description"
            autoComplete="softwareProductName"
            autoFocus
            name="softwareProductDescription"
            onChange={(e) =>
              setSoftwareProductDescription(e.currentTarget.value)
            }
            value={softwareProductDescription}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Create New Software Product
          </Button>
        </form>
      </div>
    </Container>
  );
}
