import React from "react";
import styles from "./Membership.module.css";

const Membership = () => {
    
  const plans = [
    {
      title: "READER PASS",
      price: "$19.9",
      features: ["3 premium articles/month","Access to basic articles",  "Community access","Weekly newsletter", "Limited access"],
      color: "#ff9800",
      btnColor: "#ff6600"
    },
    {
      title: "BLOG ENTHAUSIAST",
      price: "$49.9",
      features: ["Early access to posts","Commenting privilegs","Unlimited articles", "Exclusive content", "Monthly webinars", ],
      color: "#e91e63",
      btnColor: "#c2185b"
    },
    {
      title: "PREMIUM MEMBER",
      price: "$99.9",
      features: ["All enthusiast benefits", "Downloadable resource","Ad-free experience","Beta feature access", "1-on-1 author chats", "VIP newslwtter",],
      color: "#00bcd4",
      btnColor: "#008c9e"
    },
  ];

  return (
    
    <div className={styles.pricingContainer}>
        
      {plans.map((plan, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.priceTag} style={{ background: plan.color }}>
            <h2>{plan.title}</h2>
            <p>{plan.price} <span className={styles.perMonth}>per month</span></p>
          </div>
          
          <ul>
            {plan.features.map((feature, idx) => (
              <li key={idx}>• {feature}</li>
            ))}
          </ul>
          <button className={styles.subscribeBtn} style={{ background: plan.btnColor }}>
            SUBSCRIBE NOW
          </button>
        </div>
      ))}
    </div>
  );
};

export default Membership;