import React, { useCallback, useRef, useState } from "react";
import styled from "@emotion/styled";
import Project from "components/project";
import { useIntersection } from "utils/hooks/use-intersection";
import { motion } from "framer-motion";
import aboutMotions from "motions/about.motion";
import { useModalContext } from "utils/contexts/modal-context";
import ProjectModal from "components/project-modal";

const projectItem = [
  {
    title: "Bridged",
    backgroundImage: "logo-image/Bridged.png",
  },
  {
    title: "Olio",
    backgroundImage: "logo-image/Olio.png",
  },
  {
    title: "ONDO",
    backgroundImage: "logo-image/ONDO.png",
  },
  {
    title: "Charger",
    backgroundImage: "logo-image/Charger.png",
  },
];

export default function ProjectList() {
  const sectionRef = useRef();
  const [state, setState] = useState("");

  const { addModal } = useModalContext();

  const handleClickProject = useCallback(() => {
    addModal({
      title: "",
      element: <ProjectModal />,
      showOnlyBody: true,
      width: "1150px",
      height: "697px",
    });
  }, []);

  const { visible } = useIntersection(sectionRef, {
    threshold: 0.7,
  });

  return (
    <Positioner
      ref={sectionRef}
      initial="hidden"
      animate={visible ? "visible" : "hidden"}
      variants={aboutMotions.aboutContainer}
    >
      {projectItem.map((i, ix) => (
        <Wrapper>
          <ProjectWrapper
            onClick={() => handleClickProject()}
            variants={aboutMotions.aboutText}
          >
            <Project backgroundImage={i.backgroundImage} key={ix} />
          </ProjectWrapper>
        </Wrapper>
      ))}
    </Positioner>
  );
}

const Positioner = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 5em;
  justify-items: center;
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
