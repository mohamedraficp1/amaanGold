import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const ClientInvestmentBox = styled(Box)({
  radius: "12px",
  border: "1px",
  backgroundColor: "#FFFFFF",
  border: "1px solid #D9D9D9",
  height: "324px",
  boxShadow: "0px 1px 11px 4px rgba(141, 153, 172, 0.1)",
  borderRadius: 12,
});

const Title = styled(Box)({
  radius: "12px",
  color: "#30394A",
  display: "flex",
  padding: "20px",
  backgroundColor: "#E9E9EE",
  backgroundColor: "transparent",
});

const ClientInvestmentViewBox = () => {
  return (
    <ClientInvestmentBox>
      <Title>Client's Investment OverView</Title>
    </ClientInvestmentBox>
  );
};

export default ClientInvestmentViewBox;
