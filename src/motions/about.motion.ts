import { motionPresets } from "./presets.motion";

const aboutMotions = {
  titleContainer: {
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  },
  title: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      y: "-100%",
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      y: "-100%",
      transition: {
        ...motionPresets.fadeInUp.after.transition,
        duration: 0.1,
      },
    },
  },
  subText: {
    hidden: {
      ...motionPresets.fadeInUp.before,
      opacity: 1,
      y: "100%",
    },
    visible: {
      ...motionPresets.fadeInUp.after,
      opacity: 1,
      y: "0%",
      transition: motionPresets.fadeInUp.after.transition,
    },
  },
  aboutContainer: {
    visible: {
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.07,
      },
    },
  },
  aboutText: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
};

export default aboutMotions;
