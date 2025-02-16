import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export default function AuthCode() {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>그라밋 인증 코드 전송</Preview>
        <Container style={container}>
          <Section style={imageSection}>
            <Img
              src="https://dobby-prod-bucket.s3.ap-northeast-2.amazonaws.com/images/logo/gradmeet_logo.png"
              width="80.4"
              height="24"
              alt="그라밋 로고"
            />
          </Section>
          <Section style={mainSection}>
            <Section style={upperSection}>
              <Heading style={h1}>
                안녕하세요, <br /> 그라밋 인증 코드를 알려드려요
              </Heading>

              <Section style={verificationSection}>
                <Section style={codeSection}>
                  <Text style={codeText}>{360426}</Text>
                </Section>
                <Row style={{ padding: "0 50.5px" }}>
                  <Column>
                    <Img
                      src="https://dobby-prod-bucket.s3.ap-northeast-2.amazonaws.com/images/logo/ic_information.png"
                      width="14"
                      height="14"
                      alt="알림 아이콘"
                      style={{ marginRight: "4px" }}
                    />
                  </Column>
                  <Column>
                    <Text style={validityText}>10분 이내에 인증을 완료해 주세요</Text>
                  </Column>
                </Row>
              </Section>
            </Section>
            <Section style={lowerSection}>
              본 메일은 발신전용입니다. <br />
              궁금하신 사항은{" "}
              <Link href="mailto:team.gradmeet@gmail.com" style={link}>
                team.gradmeet@gmail.com
              </Link>
              로 문의해 주시면 답변 드리겠습니다.
              <br />
              <br />
              회원님은 2025/01/17 현재 메일수신에 동의하셨기에 본 메일을 발송합니다.
              <br />
              추후 메일 수신을 원하지 않으시면 여기[수신거부]를 클릭하여 주시기 바랍니다.
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  color: "#353B3D",
};

const container = {
  maxWidth: "400px",
  width: "335px",
  margin: "0 auto",
};

const h1 = {
  margin: "none",
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "28px",
  textAlign: "center",
} as const;

const link = {
  color: "#26B5BE",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "9px",
  textDecoration: "none",
};

const text = {
  color: "#333",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: "14px",
  margin: "24px 0",
};

const imageSection = {
  textAlign: "left",
  marginBottom: "8px",
} as const;

const mainSection = {} as const;

const upperSection = {
  height: "278px",
  padding: "30px 20px 40px 20px",
  backgroundColor: "#F6F8F9",
  borderTopLeftRadius: "5px",
  borderTopRightRadius: "5px",
  borderTop: "1px solid #F6F8F9",
};

const lowerSection = {
  color: "#6D7B82",
  fontSize: "9px",
  padding: "20px 16px 24px 16px",
  lineHeight: "14px",
  backgroundColor: "#E4E8EB",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
  borderBottom: "1px solid #E4E8EB",
};

const codeSection = {
  backgroundColor: "#ffffff",
  padding: "28px 86.5px",
  borderRadius: "12px",

  marginBottom: "14px",
};

const codeText = {
  ...text,
  fontWeight: "bold",
  fontSize: "36px",
  margin: "10px 0",
  textAlign: "center" as const,
};

const validityText = {
  ...text,
  color: "#87979E",
  margin: "0px",
  textAlign: "center" as const,
};

const verificationSection = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
