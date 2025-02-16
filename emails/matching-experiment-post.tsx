import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const YelpRecentLoginEmail = () => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>그라밋 추천 공고</Preview>
        <Container>
          <Section style={content}>
            <Section style={logo}>
              <Img
                src="https://dobby-prod-bucket.s3.ap-northeast-2.amazonaws.com/images/logo/gradmeet_logo.png"
                width="80.4"
                height="24"
                alt="그라밋 로고"
              />
            </Section>
            <Section style={mainSection}>
              <Heading style={h1}>
                참도비님과 꼭 맞는 <br />
                공고를 찾아왔어요!🧚‍♂️
              </Heading>
              <Text style={infoText}>자세한 실험 내용은 공고 내용을 확인해 주세요</Text>

              <Row style={matchingPostContainer}>
                <Column>
                  <Img
                    src="https://dobby-prod-bucket.s3.ap-northeast-2.amazonaws.com/images/logo/ic_ping.png"
                    width="14"
                    height="14"
                    alt="그라밋 로고"
                  />
                  <Text>성균관대학교 글로벌 캠퍼스</Text>
                </Column>
                <Text style={{ ...paragraph, marginTop: -5 }}>
                  If this wasn't you or if you have additional questions, please see our support page.
                </Text>
              </Row>

              <Row style={{ ...boxInfos, paddingTop: "0" }}>
                <Column style={containerButton} colSpan={2}>
                  <Button style={button}>Learn More</Button>
                </Column>
              </Row>
            </Section>

            <Section style={containerImageFooter}>
              {/* <Img style={image} width={620} src={`${baseUrl}/static/yelp-footer.png`} /> */}
            </Section>
          </Section>
          <Text
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgb(0,0,0, 0.7)",
            }}
          >
            © 2022 | Yelp Inc., 350 Mission Street, San Francisco, CA 94105, U.S.A. | www.yelp.com
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default YelpRecentLoginEmail;

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '"Pretendard",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
  color: "#353B3D",
};

const mainSection = {
  backgroundColor: "#F6F8F9",
  borderRadius: "5px",

  padding: "30px 20px 40px 20px",
};

const h1 = {
  margin: "none",
  fontSize: "20px",
  lineHeight: "26px",
};

const infoText = {
  margin: "none",
  fontSize: "11px",
  color: "#535D62",
  lineHeight: "16px",
};

const paragraph = {
  fontSize: 16,
};

const logo = {
  marginBottom: "8px",
};

const matchingPostContainer = {};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const button = {
  backgroundColor: "#e00707",
  borderRadius: 3,
  color: "#FFF",
  fontWeight: "bold",
  border: "1px solid rgb(0,0,0, 0.1)",
  cursor: "pointer",
  padding: "12px 30px",
};

const content = {
  maxWidth: "400px",
  minWidth: "335px",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
