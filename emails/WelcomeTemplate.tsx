import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Text,
  Link,
  Preview,
  Tailwind,
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
      <Tailwind>
        <Body className="font-bold text-3xl">
          <Container>
            <Text style={heading}>Hello {name}</Text>
            <Link href="www.google.com">Google</Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
// $ npm run preview-email to preview email

// we want to avoid inline styling in this instance bc it's not very scalable...
// performance is improved by preventing creation of new style objs on each render while...
// maintaining separation of concerns

const body: CSSProperties = {
  // don't have intellisense to help auto-fill styling so...
  // : CSSProperties- must annotate body obj with CSSProperties to get the auto-fill
  // *ctrl+space to get auto-fill preview*
  background: "#fff",
};

const heading: CSSProperties = {
  fontSize: "32px",
};

export default WelcomeTemplate;
