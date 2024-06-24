import React from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
} from "@react-email/components";
// Html acts as a container for entire email content
// Body defines main content area of email
// Container helps center content, provides structure and layout
// Text adds plain text content to email and ensures text is styled and readable across diff email clients
// Link creates clickable links within email
// Preview adds preview text to email (1st line people see)

const WelcomeTemplate = ({ name }: { name: string }) => {
  // can also add props to this component to render content dynamically
  return (
    <Html>
      <Preview>Welcome Aboard!</Preview>
      <Body>
        <Container>
          <Text>Hello {name}</Text>
          <Link href="www.google.com">Google</Link>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeTemplate;
