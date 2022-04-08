import EXAMPLE_SUBMISSIONS, { Submission } from "constants/ExampleSubmissions";
import styles from "css/pages/VotePage.module.css";

export default function VotePage(): JSX.Element {
  const randomExample: Submission =
    EXAMPLE_SUBMISSIONS[Math.floor(Math.random() * EXAMPLE_SUBMISSIONS.length)];
  console.log(randomExample);

  // If desired, utility fonts have been pre-defined in FontClasses.css
  return (
    <div className={styles.container}>
      <div className={styles.example}>
        <div className="header1Font">Welcome!</div>
        <ul>
          <li className="body1Font">
            You&apos;re currently looking at <strong>VotePage.tsx</strong>
          </li>
          <li className="body1Font">
            Local storage helpers have been defined for your convenience under{" "}
            <strong>utils/local-storage</strong>
          </li>
          <li className="body1Font">
            Check your JS console for the data of an example submission.
          </li>
        </ul>
        <div className="body1Font">Good luck!</div>
      </div>
    </div>
  );
}
