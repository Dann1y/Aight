import { motionPresets } from "../motions/presets.motion";

const speakerListMotions = {
  container: {
    visible: {
      transition: {
        staggerChildren: 0.07,
      },
    },
  },
  columnContainer: {
    visible: {
      transition: {
        staggerChildren: 0.17,
      },
    },
  },
  columnItem: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  title: {
    hidden: motionPresets.fadeInUp.before,
    visible: motionPresets.fadeInUp.after,
  },
  item: {
    hidden: motionPresets.fadeInLeft.before,
    visible: motionPresets.fadeInLeft.after,
  },
};

export default speakerListMotions;
