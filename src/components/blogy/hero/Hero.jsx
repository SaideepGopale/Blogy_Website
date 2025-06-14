import React from 'react';
import Styles from './Hero.module.css';

function Hero() {
    return (
        <>
            <div className={Styles.wrapper}>
                <div className={Styles.leftSide}>
                    <div className={Styles.Container}>
                        <div className={Styles.article}>
                            <strong>Hey, we’re Blogy.</strong> See our thoughts,<br /> stories and<br /> ideas.
                        </div>

                        <div className={Styles.input}>
                            <div className={Styles.text}>
                                <input type="email" name="email" placeholder="Your email address" />
                                <button className={Styles.button}>Subscribe</button>
                            </div>

                            <div className={Styles.h4}>
                                Get the email newsletter and unlock access to
                                <br />
                                members-only content and updates.
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.rightSide}>
                    <img src="./blogy.jpg" alt="Blogy content" className={Styles.heroImage} />
                </div>
            </div>
            <hr />

        </>
    );
}

export default Hero;
