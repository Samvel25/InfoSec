import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import instance from "../../api/instance";
import useAuth from "../../hooks/useAuth";
import PrivateRoute from "../../routes/PrivateRoute";
import * as Styled from "./style";

const Admin = () => {
  const [formsData, setFormsData] = useState([]);
  const user = useAuth((state) => state.user);
  const location = useLocation();

  console.log({ user });

  useEffect(() => {
    instance.get("getAllForms").then((res) => setFormsData(res.data));
  }, []);

  if (user?.role !== "admin") {
    return <Navigate to={"/"} state={{ from: location }} replace />;
  }

  console.log({ formsData });

  return (
    <div>
      <Styled.SubmitedForm
        container
        justifyContent={{ sm: "center", md: "space-around" }}
        direction={"row"}
        alignItems="center"
        sx={{ m: "80px 0 130px" }}
      >
        {formsData.length
          ? formsData.map((card, index) => (
              <Styled.Card
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
                  <Box sx={{ mb: "20px" }}>
                    <Typography variant="CardHead" component={"h5"}>
                      Date. &nbsp;
                    </Typography>
                    <Typography component={"span"}>{card.timestamp}</Typography>
                  </Box>
                </Box>
              </Styled.Card>
            ))
          : null}
      </Styled.SubmitedForm>
    </div>
  );
};

export default Admin;
