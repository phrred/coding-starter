import Body1 from "components/text/Body1";
import Body1Bold from "components/text/Body1Bold";
import Header1 from "components/text/Header1";
import EXAMPLE_SUBMISSIONS from "constants/ExampleSubmissions";
import styles from "css/pages/VotePage.module.css";

export default function VotePage(): JSX.Element {
  const randomExample =
    EXAMPLE_SUBMISSIONS[Math.floor(Math.random() * EXAMPLE_SUBMISSIONS.length)];
  console.log(JSON.stringify(randomExample, null, 2));

  return (
    <div className={styles.container}>
      <div className={styles.example}>
        <Header1>Welcome!</Header1>
        <Body1 className={styles.inline}>
          To get started, take a look at <Body1Bold>Routes.tsx.</Body1Bold>
        </Body1>
        <Body1>Check your console for the data of an example submission.</Body1>
        <Body1Bold>Good luck!</Body1Bold>
      </div>
    </div>
  );
}
