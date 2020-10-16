export const headlineAnimation = {
    hidden: {
      opacity: 0,
      y: -15,
    },
    visible: {
      opacity: 1,
      y: 0,
    transition: {
      delay: 0.5,
      type: "spring",
      damping: 30,
      mass: 2,
    },
  } 
 };

  export const paragraphAnimation = {
    hidden: { 
      opacity: 0, 
      y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3,
        type: "spring",
        damping: 100,
        mass: 4,
      },
    },
  };

  export const welcomeSectionAnimation = {
    hidden: { 
      opacity: 0, 
      y: -50 },
    visible: {
      opacity: 1,
      y: -35,
      transition: {
        delay: 0.15,
        type: "spring",
        damping: 30,
        mass: 2,
      },
    },
  }