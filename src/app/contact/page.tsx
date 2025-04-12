"use server";
import ContentWrapper from "../_components/Content/ContentWrapper";
import SectionHeaderTitle from "../_components/Content/SectionHeaderTitle";
import GetIsMobileDevice from "../_server/GetIsMobileDevice";
import ContactForm from "./ContactForm";

async function ContactPage() {
  const isMobileDevice = await GetIsMobileDevice();
  return (
    <ContentWrapper>
      <div id="contact" data-observe>
        <SectionHeaderTitle
          title="Contact."
          urlHash=""
          isMobileDevice={isMobileDevice}
        />
        <ContactForm />
      </div>
    </ContentWrapper>
  );
}

export default ContactPage;
