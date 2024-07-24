import React from "react";
import ReactDOM from "react-dom";
import QuickLinksContainer from "../../src";

const Demo = () => {
  const linksArray = [
    { title: "Provider Manuals", link: "/provider-manuals" },
    { title: "Billing Manuals", link: "/billing-manuals" },
    { title: "Resources", link: "/resources" },
    { title: "FAQ", link: "/faq" },
    { title: "Trainings", link: "/trainings" },
    { title: "Schedule", link: "/schedule" },
    { title: "Events", link: "/events" },
    { title: "About us", link: "/about-us" },
    { title: "Contact us", link: "/contact-us" },
    // show more links
    { title: "Provider Manuals", link: "/provider-manuals" },
    { title: "Billing Manuals", link: "/billing-manuals" },
    { title: "Resources", link: "/resources" },
    { title: "FAQ", link: "/faq" },
    { title: "Trainings", link: "/trainings" },
    { title: "Schedule", link: "/schedule" },
    { title: "Events", link: "/events" },
  ];
  return <QuickLinksContainer linksArray={linksArray} />;
};

ReactDOM.render(<Demo />, document.getElementById("app"));
