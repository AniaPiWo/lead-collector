import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Container } from "../components/Container/Container";

import { Button } from "nerdux-ui-system";

import * as styles from "./index.module.scss";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Container>
        <header className={styles.titleHeader}>
          <h1>Lead generator project</h1>
          <Button
            variant={"primary"}
            onClick={() => {
              window.open("https://nerdux.nerdbord.io", "_blank");
            }}
          >
            Open UI components documentation
          </Button>
        </header>
      </Container>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
