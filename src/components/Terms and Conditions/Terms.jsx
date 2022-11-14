import React from "react";
import { Box, Container, Typography } from "@mui/material/";

const Terms = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        flexDirection: "column",
        padding: "2rem",
      }}
      maxWidth={false}
    >
      <Box>
        <Typography variant="h2" sx={{ fontWeight: "bold" }} gutterBottom>
          Terms and Conditions
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to Website Name! <br />
          <br />
          These terms and conditions outline the rules and regulations for the
          use of Company Name's Website, located at Website.com. <br />
          <br />
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use Website Name if you do not agree to
          take all of the terms and conditions stated on this page. <br />
          <br />
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: “Client”,
          “You” and “Your” refers to you, the person log on this website and
          compliant to the Company's terms and conditions. “The Company”,
          “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”,
          “Parties”, or “Us”, refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client's
          needs in respect of provision of the Company's stated services, in
          accordance with and subject to, prevailing law of Netherlands. Any use
          of the above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </Typography>
        <Typography variant="h3" gutterBottom>
          Cookies
        </Typography>
        <Typography variant="body1" gutterBottom>
          We employ the use of cookies. By accessing Website Name, you agreed to
          use cookies in agreement with the Company Name's Privacy Policy.
          <br />
          Most interactive websites use cookies to let us retrieve the user's
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </Typography>
        <Typography variant="h3" gutterBottom>
          License
        </Typography>
        <Typography variant="body1" gutterBottom>
          Unless otherwise stated, Company Name and/or its licensors own the
          intellectual property rights for all material on Website Name. All
          intellectual property rights are reserved. You may access this from
          Website Name for your own personal use subjected to restrictions set
          in these terms and conditions.
          <br />
          This Agreement shall begin on the date hereof. Parts of this website
          offer an opportunity for users to post and exchange opinions and
          information in certain areas of the website. Company Name does not
          filter, edit, publish or review Comments prior to their presence on
          the website. Comments do not reflect the views and opinions of Company
          Name,its agents and/or affiliates. Comments reflect the views and
          opinions of the person who post their views and opinions. To the
          extent permitted by applicable laws, Company Name shall not be liable
          for the Comments or for any liability, damages or expenses caused
          and/or suffered as a result of any use of and/or posting of and/or
          appearance of the Comments on this website. Company Name reserves the
          right to monitor all Comments and to remove any Comments which can be
          considered inappropriate, offensive or causes breach of these Terms
          and Conditions.
        </Typography>
        <Typography variant="h3" gutterBottom>
          Hyperlinking to our Content
        </Typography>
        <Typography variant="body1" gutterBottom>
          These organizations may link to our home page, to publications or to
          other Website information so long as the link: (a) is not in any way
          deceptive; (b) does not falsely imply sponsorship, endorsement or
          approval of the linking party and its products and/or services; and
          (c) fits within the context of the linking party's site.
          <br />
          We will approve link requests from these organizations if we decide
          that: (a) the link would not make us look unfavorably to ourselves or
          to our accredited businesses; (b) the organization does not have any
          negative records with us; (c) the benefit to us from the visibility of
          the hyperlink compensates the absence of Company Name; and (d) the
          link is in the context of general resource information.
        </Typography>
      </Box>
    </Container>
  );
};

export default Terms;
