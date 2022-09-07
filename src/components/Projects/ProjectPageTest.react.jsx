import React, { useState } from "react";
import testData from "../../data/ProjectTestData";
import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const ProjectPageTest = () => {
  const [projectDetails, setProjectDeatils] = useState(testData);

  const [projectDuration, setProjectDuration] = useState("");

  const handleChange = (event) => {
    setProjectDuration(event.target.value);
  };

  const filterItem = (categoryType) => {
    const filteredData = testData.filter((currentElement) => {
      return categoryType === "All"
        ? currentElement
        : currentElement.category === categoryType;
    });
    setProjectDeatils(filteredData);
  };

  return (
    <>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "2rem",
        }}
      >
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={projectDetails}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={() => filterItem("All")}>
          All
        </Button>
        <Button variant="contained" onClick={() => filterItem("Education")}>
          Education
        </Button>
        <Button variant="outlined" onClick={() => filterItem("Medical")}>
          Medical
        </Button>
      </Container>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          gap: "2rem",
        }}
      >
        {projectDetails?.map((item, index) => {
          return (
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Container>
    </>
  );
};

export default ProjectPageTest;
