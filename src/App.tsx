import "css/global/Global.css";

import { Route, Routes as RoutesImport, BrowserRouter } from "react-router-dom";
import EXAMPLE_SUBMISSIONS, { Submission } from "ExampleSubmissions";
import styles from "css/App.module.css";

function VotePage(): JSX.Element {
  const randomExample: Submission =
    EXAMPLE_SUBMISSIONS[Math.floor(Math.random() * EXAMPLE_SUBMISSIONS.length)];
  console.log(randomExample);

  return (
    <div className={styles.container}>
      <div className={styles.example}>
        <h1>Welcome!</h1>
        <ul>
          <li>
            You&apos;re currently looking at <strong>App.tsx</strong>
          </li>
          <li>
            Local storage helpers have been defined for your convenience under{" "}
            <strong>utils/local-storage</strong>
          </li>
          <li>Check your JS console for the data of an example submission.</li>
        </ul>
        <div>Good luck!</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <RoutesImport>
        <Route path="/" element={<VotePage />} />
      </RoutesImport>
    </BrowserRouter>
  );
}

export default App;
