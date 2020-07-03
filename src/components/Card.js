import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 100%;
  height: 200px;
`;

const Title = styled.h3`
  color: #fff;
`;

const DataField = styled.h2`
  padding-top: 5px;
  padding-bottom: 30px;
`;

const Updated = styled.p`
  color: white;
`;

const Card = (props) => {
  const { title, data, updated } = props;
  return (
    <div>
      <CardContainer>
        <Title>{title}</Title>
        <DataField>{data}</DataField>
        <Updated>Last Update: {updated}</Updated>
      </CardContainer>
    </div>
  );
};

export default Card;
