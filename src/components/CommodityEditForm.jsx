import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  styled,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useLayoutEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { addCommodity, editCommodity } from "../service/api";

// import { useSelector } from "react-redux";
// import { getCurrencyRate } from "../service/CurrencyServices";

const InputField = styled(TextField)({
  marginBottom: "12px",
  width: "31%",
});

const SellField = styled(TextField)({
  marginBottom: "12px",
  width: "46%",
});

const InnerContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingTop: "12px",
});

const ButtonContainer =styled(InnerContainer)({
   justifyContent:"center"
})

const StyledButton = styled(Button)({
  borderRadius: "8px",
  background: "#AB9554",
  width: "48%",
  "&:hover": {
    background: "#AB9554",
  },
});

const StyledButtonGrey = styled(Button)({
  borderRadius: "8px",
  background: "#Fff",
  border: "10x solid rgba(0, 0, 0, 0.38)",
  color: "rgba(0, 0, 0, 0.38)",
  width: "48%",
  "&:hover": {
    background: "#Fff",
    border: "10x solid rgba(0, 0, 0, 0.38)",
    color: "rgba(0, 0, 0, 0.38)",
  },
});

const InnerCenterContainer = styled(InnerContainer)({
  justifyContent: "space-around",
  alignItems: "center",
});

export default function CommodityEditForm({ data, handleClose, add, setEdit,edit}) {
  const user = useSelector(state=>state.user)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [sellPrice, setSellPrice] = useState();
  const [sellAed, setSellAed] = useState(data.sellAed);
  const [sellUsd, setSellUsd] = useState(data.sellUsd);
  const [metal, setMetal] = useState(data.commodity_title);
  const [purity, setPurity] = useState(data.purity);
  const [premium, setPremium] = useState(data.premium);
  const [weight, setWeight] = useState(data.unitLabel);
  const [unit, setUnit] = useState(data.unit);
  const [charge, setCharge] = useState(data.charges);
  const [commodityDetails, setCommodityDetails] = React.useState(data);
  const [loading, setLoading]=useState(false)
  const [clear, setClear]= useState(false)
  const [formData, setFormData]=useState()
  
  const goldPrice = useSelector((state) => state.data.goldLive);
  const silverPrice = useSelector((state) => state.data.silverLive);

  useEffect(() => {
    setSellPrice(metal === "Silver" ? silverPrice : goldPrice);
    const chargeAmount = (charge == 0 ? 0 : charge)
    setCommodityDetails({ ...commodityDetails, ...data });
    const formDatas = {
      commodity_title:metal,
      purity,
      unit,
      unitLabel: weight,
      charges: charge,
      premium
    }
    setFormData(formDatas)
    setSellAed(
      (
        ((((Number(sellPrice) + Number(premium)) * 3.674) / 31.1035) *
        Number(purity)*Number(unit)*Number(weight=='KG' ? 1000 : (weight=='TTB' ? 116.640: 1)))+Number(charge)
      ).toFixed(2)
    );
        console.log(weight)
    setSellUsd((Number(sellAed) * 0.27).toFixed(2));
    
    // eslint-disable-next-line
  }, [goldPrice,silverPrice, purity, metal,premium,unit,weight, charge]);

  useEffect(() => {
    if (metal === "Gold TEN TOLA"){
        setWeight("TTB")
        setUnit(1)
    }
  }, [goldPrice,metal])


  const handleClear =  () => {
      setClear(true)
      setPurity(" ")
      setPremium(" ")
      setCharge(" ")
      clear ? alert("true") : alert("false")
  };

  const onSubmit = async (datas) => {
    console.log(datas);
    if (add) {
      setLoading(true)
      const addingCommodity = await addCommodity(user.token, formData);
      // setEdit((prev) => !prev);
      setLoading(false)
      handleClose();
    } else {
      setLoading(true)
      const edit = await editCommodity(user.token, datas, data._id);
      if(edit){
        handleClose();
        // setEdit(!edit);
        setLoading(false)
      }
    }
    setEdit((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      {clear ?
        <Box>
      <InnerContainer>
        <FormControl sx={{ width: "31%", marginBottom: "12px" }}>
          <InputLabel id="demo-simple-select-label">Metal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={metal}
            value={metal}
            label="Age"
            {...register("commodity_title", {
              required: "Please select  a metal",
            })}
            onChange={(e) => setMetal(e.target.value)}
          >
            <MenuItem value={"Gold"}>Gold </MenuItem>
            <MenuItem value={"Gold TEN TOLA"}>Gold TEN TOLA</MenuItem>
            <MenuItem value={"Silver"}>Silver</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "31%", marginBottom: "12px" }}>
          <InputLabel id="demo-simple-select-label">Purity</InputLabel>
          <Select
            labelId="demo-simple-select-labelOne"
            id="demo-simple-select-one"
            defaultValue={purity}
            label="Age"
            {...register("purity", {
              required: "Please select  a purity",
            })}
            onChange={(e) => setPurity(e.target.value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={0.9999}>0.9999</MenuItem>
            <MenuItem value={0.999}>0.999</MenuItem>
            <MenuItem value={0.995}>0.995</MenuItem>
            <MenuItem value={0.916}>0.916</MenuItem>
            <MenuItem value={0.875}>0.875</MenuItem>
            <MenuItem value={0.75}>0.750</MenuItem>
          </Select>
        </FormControl>
        <InputField
          type="number"
          variant="outlined"
          defaultValue={premium}
          value={premium}
          label="Premium"
          {...register("premium")}
          onChange={(e) => setPremium(e.target.value)}
        />
      </InnerContainer>
      <InnerContainer>
        <FormControl sx={{ width: "31%", marginBottom: "12px" }}>
          <InputLabel id="demo-simple-select-label">Label</InputLabel>
          <Select
            labelId="demo-simple-select-label_two"
            id="demo-simple-select-two"
            value={weight}
            label="Age" 
            {...register("unitLabel", {
              required: "Please select Unit label",
            })}
            onChange={(e) => {setWeight(e.target.value)
            }} 
          >
            <MenuItem value={"GM"}>GM</MenuItem>
            <MenuItem value={"KG"}>KG</MenuItem>
            <MenuItem value={"TTB"}>TTB</MenuItem>
          </Select>
        </FormControl>
        <InputField
          type="text"
          label="Unit"
          variant="outlined"
          // defaultValue={weight==="TTB" ? 1 : unit}
          defaultValue={unit}
          value={unit}
          placeholder="Unit"
          {...register("unit", {
            required: "Please select a unit",
          })}
          onChange={(e) => setUnit(e.target.value)}
        />
        {alert (weight)}
        <InputField
          type="number"
          variant="outlined"
          defaultValue={charge}
          value={charge}
          label="Charges"
          {...register("charges")}
          onChange={(e) => setCharge(e.target.value)}
        />
      </InnerContainer>

      <InnerCenterContainer>
        <SellField
          placeholder="Sell(AED)"
          type="number"
          value={sellAed}
          {...register}
          disabled
        />
        <SellField
          type="number"
          variant="outlined"
          value={sellUsd}
          placeholder="Sell(USD)"
          {...register}
          disabled
        />
      </InnerCenterContainer>

      {errors.metal && (
        <span className="errorMsg">Please fill all required fields</span>
      )}

    </Box> : 
     <Box>
      <InnerContainer>
        <FormControl sx={{ width: "31%", marginBottom: "12px" }}>
          <InputLabel id="demo-simple-select-label">Metal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={metal}
            value={metal}
            label="Age"
            {...register("commodity_title", {
              required: "Please select  a metal",
            })}
            onChange={(e) => setMetal(e.target.value)}
          >
            <MenuItem value={"Gold"}>Gold </MenuItem>
            <MenuItem value={"Gold TEN TOLA"}>Gold TEN TOLA</MenuItem>
            <MenuItem value={"Silver"}>Silver</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ width: "31%", marginBottom: "12px" }}>
          <InputLabel id="demo-simple-select-label">Purity</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            defaultValue={purity}
            label="Age"
            {...register("purity", {
              required: "Please select a purity",
            })}
            onChange={(e) => setPurity(e.target.value)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={0.9999}>0.9999</MenuItem>
            <MenuItem value={0.999}>0.999</MenuItem>
            <MenuItem value={0.995}>0.995</MenuItem>
            <MenuItem value={0.916}>0.916</MenuItem>
            <MenuItem value={0.875}>0.875</MenuItem>
            <MenuItem value={0.75}>0.750</MenuItem>
          </Select>
        </FormControl>
        <InputField
          type="number"
          variant="outlined"
          defaultValue={premium!==0 ? premium : 0}
          label="Premium"
          {...register("premium")}
          onChange={(e) => setPremium(e.target.value)}
        />
      </InnerContainer>
      <InnerContainer>
        <FormControl sx={{ width: "31%", marginBottom: "12px" }}>
          <InputLabel id="demo-simple-select-label">Weight</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            disabled= {metal=="Gold TEN TOLA"}
            label="Age" 
            {...register("unitLabel", {
              required: "Please select Unit label",
            })}
            onChange={(e) => {setWeight(e.target.value)
            }} 
            value={metal=="Gold TEN TOLA" ? "TTB" : weight}
          >
            <MenuItem value={"GM"}>GM</MenuItem>
            <MenuItem value={"KG"}>KG</MenuItem>
            <MenuItem value={"TTB"}>TTB</MenuItem>
          </Select>
        </FormControl>
        {console.log(metal)}
        <InputField
          type="text"
          label="Unit"
          variant="outlined"
          defaultValue={unit}
          placeholder="Unit"
          disabled= {metal=="Gold TEN TOLA"}
          {...register("unit", {
            required: "Please select a unit",
          })}
          onChange={(e) => setUnit(e.target.value)}
        />
        <InputField
          type="number"
          variant="outlined"
          defaultValue={charge ? charge : 0}
          label="Charges"
          {...register("charges")}
          onChange={(e) => setCharge(e.target.value)}
        />
      </InnerContainer>

      <InnerCenterContainer>
        <SellField
          placeholder="Sell(AED)"
          type="number"
          value={sellAed}
          {...register}
          disabled
        />
        <SellField
          type="number"
          variant="outlined"
          value={sellUsd}
          placeholder="Sell(USD)"
          {...register}
          disabled
        />
      </InnerCenterContainer>

      {errors.metal && (
        <span className="errorMsg">Please fill all required fields</span>
      )}

    </Box>}
       
      <ButtonContainer>
        <StyledButton
          variant="contained"
          size="large"
          color="success"
          fullWidth
          type="submit"
        >
          {loading ? "Load" : "Submit"}
        </StyledButton>
        
       
        {/* <StyledButton
          variant="contained"
          size="large"
          color="error"
          fullWidth
          onClick={handleClear}
        >
          Clear
        </StyledButton> */}
      </ButtonContainer>
    </form>
  );
}
