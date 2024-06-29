import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";
import * as styles from "./index.module.scss";
import Collector from "../components/Collector/Collector";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Container>
      <Collector />
    </Container>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
