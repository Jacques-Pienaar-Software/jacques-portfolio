"use client";

import Footer from "./components/Footer/Footer";
import InfoCard from "./components/InfoCard/InfoCard";
import Panel from "./components/Panel/Panel";
import ReviewCard from "./components/ReviewCard/ReviewCard";
import TextArea from "./components/TextArea/TextArea";
import TextInput from "./components/TextInput/TextInput";

export default function Home() {
  return (
    <>
      <div className="section-1">
        <div className="nav">
          <div className="nav-left">
            <a href="">My Clients</a>
            <a href="">My Process</a>
          </div>
          <div className="nav-right">
            <a href="">Contact Me</a>
          </div>
        </div>

        <img src="./logo-bars.png" className="logo-bars" />

        <img className="header-logo" src="./logo.png" alt="" />

        <div className="content-container">
          <h4 className="dimmed">
            <b>Your software</b> developed
          </h4>
          <h3>
            <b>Your problem</b> solved
          </h3>
          <h2 className="dimmed">
            <b>Your brand</b> on display
          </h2>
        </div>

        <div className="flair-container">
          <div className="left background-flare"></div>
          <div className="right background-flare"></div>
        </div>
      </div>
      <div className="section-2">
        <div className="content-container">
          <h2>It just works</h2>
          <p className="subheader">- My Clients</p>
          <div className="card-container">
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
            <ReviewCard></ReviewCard>
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="content-container">
          <h2>How it's done</h2>
          <div className="card-container">
            <InfoCard
              heading={"Add to your team"}
              subtitle={"Add capacity to your team like it was yesterday."}
              imageName="./work-as-a-team.png"
            />
            <InfoCard
              heading={"Leave it to me"}
              subtitle={"From design to launch, I’ve got you covered!"}
              imageName="./one-man-band.png"
              link={{ text: "Or read more about my process", linkTo: "" }}
            />
          </div>
        </div>
      </div>
      <div className="section-4">
        <div className="content-container">
          <h2>How I make it happen</h2>
          <div className="panel-container">
            <Panel
              number="1."
              icon="./bell.svg"
              heading="Initial meeting and discussion"
              text="Tell me what you need by filling in the form below and we'll set up a virtual meeting.
              I'm here to help!"
            />
            <Panel
              number="2."
              icon="./proposal.svg"
              heading="Proposal"
              text="After getting a perspective of what needs to be done, I will go and create an individual proposal. Depending on the project need I charge per-hour or on a per-project basis."
            />
            <Panel
              number="3."
              icon="./collaboration.svg"
              heading="Design, Develop and Test"
              text="After the proposal has been approved we can move on to wireframing and designs. Once we are all happy with designs development commences with continuous communication, collaboration, and testing."
            />
            <Panel
              number="4."
              icon="./rocket.svg"
              heading="Launch"
              text="Before launching the finalized website will go through multiple steps of quality assurance to ensure that every stone is turned over. Then we will launch the website, app, or solution with an option for maintenance."
            />
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="content-container">
          <h2>Any Questions?</h2>
          <form action="" method="post">
            <TextInput
              label="Your name"
              placeholder="Albert Einstein"
            ></TextInput>
            <TextInput
              label="Your email"
              placeholder="albert@company.com"
            ></TextInput>
            <div className="split-form">
              <div className="left">
                <TextInput
                  label="Position at Company"
                  placeholder="CEO"
                ></TextInput>
              </div>
              <span>at</span>
              <div className="right">
                <TextInput label="Company" placeholder="company"></TextInput>
              </div>
            </div>
            <TextArea
              label="Project description"
              placeholder="I need a website, yesterday!"
            ></TextArea>
            <div className="form-button">
              <button>Submit project request</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
