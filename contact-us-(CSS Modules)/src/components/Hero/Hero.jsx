import styles from "./Hero.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Hero = () => {

  const [name,setName] = useState("Siddharth");
  const [email,setEmail] = useState("care@gymyak.co");
  const [text,setText] = useState("contact us for any help");

  const onSubmit = (event)=>{
    event.preventDefault();
    setName(event.target[0].value)
    setEmail(event.target[1].value)
    setText(event.target[2].value)
  }
  return (
    <section className={styles.container}>
      <div className={styles.hero_content}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />
        <form onSubmit={onSubmit}>
          <div className={styles.form_controller}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={5} />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>
          <div className="info">
            {
              name+ " "+email+"  "+text
            }
          </div>
        </form>
      </div>
      <div className={styles.image}>
        <img src="/images/contact.svg" alt="hero-image" className="image" />
      </div>
    </section>
  );
};

export default Hero;
