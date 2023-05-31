import React from "react";
import Background from "../components/Background/Background";
import Block from "../components/Block/Block";
import Page from "../components/Page";
import Profile from "../components/Profile";
import { ResumeInt } from "../model/app.model";

export default function Resume() {
  const contact: ResumeInt["contact"] = {
    socialMedias: [
      {
        logo: "https://autocollant-sticker.com/2206-thickbox_default/autocollant-logo-instagram.jpg",
        label: "instgram",
        username: "billyKiwee",
      },
      {
        logo: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
        label: "GitHub",
        username: "billyKiwee",
      },
    ],
    email: "billyturpin642@gmail.com",
    phoneNumber: "0768538089",
    localisation: "Valence, 26000",
  };

  return (
    <>
      <Page>
        <div>
          <img src="./images/profile.png" />
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
          fozefoezoofozefozoefoozeofoozoezfookfkz
        </div>
      </Page>
      <Background />
    </>
  );
}

{
  /* <div className="cv">
  <Profile />

  <div className="sections">
    <Block id="contact" title="Contact">
      {contact.socialMedias.map((social) => (
        <div>
          <img src={social.logo} alt={social.label} />
          <span>{social.username}</span>
        </div>
      ))}
    </Block>

    <Block id="experiences" title="Expériences Profesionnelles"></Block>
  </div>
</div>;
 */
}
