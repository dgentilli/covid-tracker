import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const Title = styled.h3`
  color: #fff;
  padding-top: 15px;
`;

const DataField = styled.h2`
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Updated = styled.p`
  color: white;
  font-size: small;
`;

const Card = (props) => {
  const { title, data, updated } = props;
  return (
    <div>
      <CardContainer>
        <Title>{title}</Title>
        <DataField>{data ? data.toLocaleString() : ""}</DataField>
        <Updated>Last Update: {updated}</Updated>
      </CardContainer>
    </div>
  );
};

export default Card;
