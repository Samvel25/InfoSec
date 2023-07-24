import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import instance from "../../api/instance";
import * as GlobalStyled from "../style";
import FormData from "./Data"; // Update the path if needed

const Admin = () => {
  const [formsData, setFormsData] = useState([]);

  useEffect(() => {
    instance.get("getAllForms").then((res) => setFormsData(res.data));
  }, []);

  console.log("forms dataaa", formsData);

  return (
    <div>
      <GlobalStyled.Services
        container
        justifyContent={{ sm: "center", md: "space-around" }}
        direction={"row"}
        alignItems="center"
        sx={{ m: "80px 0 130px" }}
      >
        {formsData.length
          ? formsData.map((card, index) => (
              <GlobalStyled.ServicesCard
                key={index} // Use card.id if you have unique ids
                boxpadding="boxpadding"
                backgroundtype="backgroundOne"
              >
                <Box sx={{ maxWidth: "330px", display: "block" }}>
                  <Box sx={{ mb: "20px" }}>
                    <Typography variant="CardHead" component={"h5"}>
                      Name. &nbsp;
                    </Typography>
                    <Typography component={"span"}>{card.name}</Typography>
                  </Box>
                  <Box sx={{ mb: "20px" }}>
                    <Typography variant="CardHead" component={"h5"}>
                      Surname. &nbsp;
                    </Typography>
                    <Typography component={"span"}>{card.surname}</Typography>
                  </Box>
                  <Box sx={{ mb: "20px" }}>
                    <Typography variant="CardHead" component={"h5"}>
                      Email. &nbsp;
                    </Typography>
                    <Typography component={"span"}>{card.email}</Typography>
                  </Box>
                  <Box sx={{ mb: "20px" }}>
                    <Typography variant="CardHead" component={"h5"}>
                      Phone. &nbsp;
                    </Typography>
                    <Typography component={"span"}>
                      {card.phoneNumber}
                    </Typography>
                  </Box>
                  <Box sx={{ mb: "20px" }}>
                    <Typography variant="CardHead" component={"h5"}>
                      Description. &nbsp;
                    </Typography>
                    <Typography component={"span"}>
                      {card.description}
                    </Typography>
                  </Box>
                  <Stack
                    justifyContent={"end"}
                    direction={"row"}
                    sx={{ pt: "25px" }}
                  >
                    <Typography sx={{ color: "#D42530" }} component={"span"}>
                      {card.date}
                    </Typography>
                  </Stack>
                </Box>
              </GlobalStyled.ServicesCard>
            ))
          : null}
      </GlobalStyled.Services>
    </div>
  );
};

export default Admin;
