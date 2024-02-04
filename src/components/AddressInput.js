import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Inform from "../assets/icons/information.png";

const InputWrapper = styled.div`
  margin-bottom: 30px;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 15px;
  border: 3px solid #f6bd60;
  border-radius: 10px;
  width: 540px;
  font-size: 20px;
  font-family: "SCDream5";
`;

const TextInput = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  font-family: "SCDream5";
  color: #010c26;
`;

const InformContainer = styled.div`
  display: flex;
  // to right
  justify-content: flex-end;
  margin-bottom: 20px;
`;

const InformText = styled.p`
  margin: 0px 0px 0px 10px;
  font-size: 16px;
  font-family: "SCDream4";
  color: #010c26;
`;

const InformIcon = styled.img`
  width: 20px;
  height: 20px;
`;

function AddressInput({ formData, handleChange }) {
  const [location, setLocation] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
  }, []);

  const successHandler = (response) => {
    const { latitude, longitude } = response.coords;
    setLocation({ latitude, longitude });
    setLoaded(true);
    console.log(latitude, longitude);
  };

  const errorHandler = (error) => {
    console.log(error);
  };

  useEffect(() => {
    if (loaded) {
      const geocoder = new window.kakao.maps.services.Geocoder();
      const latLng = new window.kakao.maps.LatLng(
        location.latitude,
        location.longitude
      );

      geocoder.coord2Address(
        latLng.getLng(),
        latLng.getLat(),
        (result, status) => {
          if (status === window.kakao.maps.services.Status.OK) {
            const fullAddress = result[0].address.address_name;
            const addressParts = fullAddress.split(" ");
            const city = addressParts.slice(0, 2).join(" ");
            setAddress(city);

            handleChange({
              target: {
                name: "address",
                value: city,
              },
            });
          } else {
            console.log("Geocoder failed:", status);
          }
        }
      );
    }
  }, [loaded, location, setAddress, handleChange]);

  return (
    <InputWrapper>
      <TextInput>거주지</TextInput>
      <Input
        type="text"
        name="address"
        placeholder=""
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
          handleChange(e); 
        }}
        disabled={!loaded}
      />
      <InformContainer>
        <InformIcon src={Inform} />
        <InformText>회원가입 당시 현재 위치를 기준으로 합니다. 회원가입 후 수정 가능합니다.</InformText>
      </InformContainer>
    </InputWrapper>
  );
}

export default AddressInput;
