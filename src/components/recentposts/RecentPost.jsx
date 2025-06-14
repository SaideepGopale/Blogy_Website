import React, { useState } from 'react';
import Styles from './RecentPost.module.css';

const RecentPost = () => {
  const allPosts = [
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-1.jpg",
      title: "New technology is not good or evil in and of itself",
      description: "Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare...",
      buttons: ["Design", "Idea", "Review"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-2.jpg",
      title: "It’s a new era in design, there are no rules",
      description: "Quibus autem in rebus tanta obscuratio non fit...",
      buttons: ["Creative", "Product"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-3.jpg",
      title: "Perfection has to do with the end product",
      description: "Aenean eget urna aliquet, viverra orci quis...",
      buttons: ["Design", "Creative", "Idea"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-4.jpg",
      title: "Everyone has a different life story",
      description: "Non est igitur summum malum dolor...",
      buttons: ["People", "Story"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-3.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-5.jpg",
      title: "The difference is quality",
      description: "Vide, ne etiam menses! nisi forte eum dicis...",
      buttons: ["Design", "Lifestyle", "Idea"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-2.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-6.jpg",
      title: "Problems are not stop signs, they are guidelines",
      description: "Quid ad utilitatem tantae pecuniae...",
      buttons: ["Idea", "Creating"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    },
    
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-3.jpg",
      title: "Creativity is intelligence having fun",
      description: "Integer tincidunt quam vel est bibendum, ut pulvinar metus commodo.",
      buttons: ["Inspiration", "Fun"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-3.jpg"
    },
    {
      img: "https://codewithsadee.github.io/blogy/assets/images/featured-2.jpg",
      title: "Innovation is the ability to see change",
      description: "Curabitur feugiat, tortor non consequat finibus, justo purus commodo justo.",
      buttons: ["Innovation", "Business"],
      logo: "https://codewithsadee.github.io/blogy/assets/images/author-1.jpg"
    }
  ];

  const [visibleCount, setVisibleCount] = useState(3);

  const toggleShowMore = () => {
    if (visibleCount === allPosts.length) {
      setVisibleCount(3); // Show less
    } else {
      setVisibleCount(allPosts.length); // Show more
    }
  };

  return (
    <>
      <div className={Styles.title}>
        <div className={Styles.textGroup}>
          <div><strong>Recent Posts</strong></div> 
          <p className={Styles.subtitle}>
            Stay updated with our latest posts covering design, tech, and creative ideas — fresh content, every time.
          </p>
        </div>
        <div className={Styles.img}>
          <img src="https://web.dev/static/images/blog-header_480.png" alt="" />
        </div>
      </div>


      <div className={Styles.container}>
        {allPosts.slice(0, visibleCount).map((story, index) => (
          <div className={Styles.storyCard} key={index}>
            <div className={Styles.imageContainer}>
              <img src={story.img} alt={`Story ${index + 1}`} />
              <div className={Styles.logo}>
                <img src={story.logo} alt={`Logo ${index + 1}`} />
              </div>
            </div>
            <div className={Styles.buttonContainer}>
              {story.buttons?.map((button, btnIndex) => (
                <button key={btnIndex} className={Styles.button}>
                  {button}
                </button>
              ))}
            </div>
            <h3>{story.title}</h3>
            <p>{story.description}</p>
          </div>
        ))}
      </div>

      <div className={Styles.toggleButtonWrapper}>
        <button className={Styles.toggleButton} onClick={toggleShowMore}>
          {visibleCount === allPosts.length ? "Show Less" : "Show More"}
        </button>
      </div>
    </>
  );
};

export default RecentPost;
