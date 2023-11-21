import { useState } from "react";
import styles from "./Faqs.module.css";
import FAQ from "./images/FAQ.jpg";
import toggle from "./images/toggle.jpg";
import toggle2 from "./images/toggle2.jpg";

const dataCollection = [
  {
    question: "Q. How do I upload a file to the ThaparShare?",
    answer:
      "Utilize the file upload feature on the web app. Choose your file, excluding executable files (exe), and the system will handle the rest.",
  },
  {
    question: "Q.What types of files are supported for upload?",
    answer:
      "The platform supports various file types, including images, documents, etc. However, for security reasons, executable files (exe) are not supported.",
  },
  {
    question: "Q. Is there a limit to the size of the files I can upload?",
    answer:
      "Yes, there is a file size limit. Currently, the maximum allowed file size is 70 MB. Please note that this limit applies to all file types except executable files (exe), which are not supported for security reasons.",
  },
  {
    question: "Q.How can I share a folder?",
    answer:
      "Answer: To share a folder, first, compress it into a zip file. You can use your device's built-in tools or third-party software. Afterward, upload the zip file to the web app using the file upload feature.",
  },
  {
    question: "Q.How are my files protected during transfer and storage?",
    answer:
      "Your files are securely encrypted during both transfer and storage, providing protection against unauthorized access. However, for security reasons, executable files (exe) are not allowed.",
  },
  {
    question:
      "Q. Do I need to create an account to use the file-sharing service?",
    answer:
      "No account creation is necessary. Our service is designed for quick and hassle-free file sharing without the need for user accounts. However, please note that executable files (exe) cannot be shared.",
  },
  {
    question: "Q. How is file security ensured without a login?",
    answer:
      "Security is maintained through encryption mechanisms during file transfer and storage. Each file is associated with a unique identifier, and access is restricted to authorized users. Executable files (exe) are restricted for security reasons.",
  },
  {
    question:
      "Q. Can I share files with users who don't have an account on the platform?",
    answer:
      " Absolutely! You can easily share files with anyone, even if they don't have an account. Use the convenient email sharing option by entering the recipient's email address. The platform will automatically send an email containing the download link for the file. However, please refrain from sharing executable files (exe) for security considerations.",
  },
  {
    question: "Q.How do I download a file using the QR code?",
    answer:
      " Scan the QR code using a compatible device or visit the provided download link. The system will authenticate your request and initiate the file download. Note that executable files (exe) cannot be downloaded for security reasons.",
  },
];

function Faqs() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
    } else {
      setActiveAccordion(index);
    }
  }

  return (
    <div className={styles.containerAccordin}>
      {" "}
      {/* Use the correct class name */}
      <div>
        <span className={styles.accordion__title}>
          <img src={FAQ} />
        </span>
      </div>
      <div className={styles.accordion__faq}>
        {dataCollection.map((item, index) => (
          <div key={index} onClick={() => toggleAccordion(index)}>
            <div className={styles.accordion__faq_heading}>
              <h3 className={accordion === index ? styles.active : ""}>
                {item.question}
              </h3>
              <div>
                {accordion === index ? (
                  <span className={styles.verticle}>
                    <img
                      src={toggle}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </span>
                ) : (
                  <span className={styles.horizental}>
                    <img
                      src={toggle2}
                      style={{ width: "50px", height: "50px" }}
                    />
                  </span>
                )}
              </div>
            </div>
            <div>
              <p
                className={
                  accordion === index ? styles.active : styles.inactive
                }
              >
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
