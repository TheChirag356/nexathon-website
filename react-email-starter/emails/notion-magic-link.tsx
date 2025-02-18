import React from "react";
import {
  Body,
  Html,
  Container,
  Tailwind,
  Text,
  Button,
  Img,
  Heading,
  Head
} from "@react-email/components";

const Email = () => {
  return (
  <Html>
    <Head />
    <Tailwind>
      <Body className="bg-white my-12 mx-auto font-sans">
        <Container>
          <Text>Hey There</Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
  );
};

export default Email;
