import React from "react";
import Card from "../ui/Card";
import Wrapper from "./Wrapper";
import AuthPaperMui from "../ui/AuthPaperMui";

const Index = () => {
  return (
    <AuthPaperMui
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card styleProps={{ margin: "0 2rem" }} width="25rem">
        <Wrapper />
      </Card>
    </AuthPaperMui>
  );
};

export default Index;
