import { Box } from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { RefContext } from "../Context/RefContext";
import styles from "../Styles/Projects.module.css";
import { motion } from "framer-motion";
import jiomartImg from "./Images/jiomart.png";

export const Project = () => {
  const { projectRef } = useContext(RefContext);
  return (
    <div ref={projectRef} className={styles.containerTwo}>
      <section id={styles.projects}>
        <div>
          <motion.h2
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 1 }}
            transition={{
              duration: 0.5,
            }}
            className={"sectionHeading"}
            data-outline="Projects"
          >
            Projects
          </motion.h2>
          <div className={styles.containerThree}>
          <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="https://global-uploads.webflow.com/636bdbebfc681f083e923f81/63861e75aa92be0349f95afb_613f3eb0f01e1a1aa2e62e09_OCR%2520(2)-p-1080.jpeg" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Optical Character Recognition</h2>

                <p className={styles.projectDesc}>
                OCR in Python is a technology for converting images with text into machine-readable text. Using Python and Tesseract OCR via pytesseract, preprocess the image, extract the text using image_to_string, and post-process as needed. Python's simplicity and powerful libraries make it an ideal choice for OCR solutions.
                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>Text Recognition</li>
                    <li>Image Preprocessing</li>
                    <li>Customization</li>
                    <li>Versatility</li>
		    <li>Integration with NLP</li>
		    <li>Data Extraction</li>
                    <li>Accessibility</li>
                  </ul>
                  <h2>
                   <b><i>Tech Stack :</i></b> Python|Image Processing Libraries OpenCV |OCR Engines Tesseract OCR |pytesseract |Google Cloud Vision API |Scikit-learn | TensorFlow / PyTorch | 
                  </h2>
                  <h2>
                   <b><i>Area of Responsibility :</i></b>  Responsible for implementing image preprocessing techniques using libraries like OpenCV to improve image quality, denoise images, enhance contrast, and prepare images for OCR processing.
                  </h2>
                </p>
                <div className={styles.buttons}>
                  <a
                    href="/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Github Link
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Preview{" "}
                  </a>
                </div>
              </div>
            </motion.div>
            {/* ========================================================================================================================================= */}
            <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="https://assets-global.website-files.com/61a05ff14c09ecacc06eec05/61f59d9bcbc09e86950d63a2_illustration_1-3.png" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Note Taking Application</h2>

                <p className={styles.projectDesc}>
                I have successfully developed a note-taking application using Java on the MVC pattern. The web project utilized MySQL and Hibernate for database management, while the JSP project utilized MySQL for data storage.
                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>User Registration and Login</li>
                    <li>Create and Save Notes</li>
                    <li>Edit and Update Notes</li>
                    <li>Delete Notes</li>
                    <li>View and Search Notes</li>
                  </ul>
                  <h2>
                   <b><i>Tech Stack :</i></b> ADVANCE JAVA |MYSQL |MVC pattern |Servlet |HTML | CSS | Javascript | 
                  </h2>
                  <h2>
                   <b><i>Area of Responsibility :</i></b>  Contributed to the creation of a Note Taking Application system.
                  </h2>
                </p>
                <div className={styles.buttons}>
                  <a
                    href="/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Github Link
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Preview{" "}
                  </a>
                </div>
              </div>
            </motion.div>


             {/* ========================================================================================================================================= */}
             <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="https://i.ytimg.com/vi/SWctMZDkZTU/maxresdefault.jpg" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Online Examination System</h2>

                <p className={styles.projectDesc}>
                Java I have design and develop an
Online Examination System that allows educational institutions and
organizations to conduct online exams.
                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>Login</li>
                    <li>Signup</li>
                    <li>Admin Panel</li>
                  </ul>
                  <h2>
                   <b><i>Tech Stack :</i></b>  HTML | CSS | Javascript | JSON-Server | Advance Java
                  </h2>
                  <h2>
                   <b><i>Area of Responsibility :</i></b>  Contributed to the creation of a Online Examination system and a
                    navigation bar.
                  </h2>
                </p>
                <div className={styles.buttons}>
                  <a
                    href="/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Github Link
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Preview{" "}
                  </a>
                </div>
              </div>
            </motion.div>
             {/* ========================================================================================================================================= */}
             {/* ========================================================================================================================================= */}
             {/* ========================================================================================================================================= */}
            {/* ========================================================================================================================================= */}

            <motion.div
              className={styles.item}
              initial={{ x: -70, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{
                duration: 3.5,
                type: "spring",
                stiffness: 300,
              }}
              // transition={{ delay: 0.1 }}
            >
              <div className={styles.left}>
                <div className={styles.img}>
                  <img src="https://i0.wp.com/juntrax.com/blog/wp-content/uploads/2021/01/Employee-Management-System.jpg?resize=840%2C480&ssl=1" alt="" />
                </div>
              </div>
              <div className={styles.right}>
                <h2 className={styles.projectTitle}>Employee Management System</h2>

                <p className={styles.projectDesc}>
                My goal is to develop an advanced Java-based employee management system, offering a comprehensive platform for efficiently managing employee information, including personal details, positions, and salaries. It will enable seamless operations like adding, updating, and deleting employees, enhancing workflow for HR and management.
                  <h2>Features</h2>
                  <ul style={{ marginLeft: "30px" }}>
                    <li>Employee Registration and Login</li>
                    <li>Employee Listing</li>
                    <li>Employee Search and Filter</li>
                    <li>Employee Details</li>
		    <li>Add and Update Employees</li>
		    <li>Delete Employees</li>
                  </ul>
                  <h2>
                   <b><i>Tech Stack :</i></b> Java | Spring Framework | Hibernate | MySQL | React |
                  </h2>
                  <h2>
                   <b><i>Area of Responsibility :</i></b>  Throughout the development process, team members will communicate regularly, share progress updates, and collaborate on any interdependent tasks. This collaborative approach will ensure the successful creation of the employee management system within the given timeframe and with high-quality results.
                  </h2>
                </p>
                <div className={styles.buttons}>
                  <a
                    href="/"
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Github Link
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className={styles.primaryBtn}
                  >
                    Preview{" "}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
