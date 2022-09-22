import "css/global/Global.css";

import { Route, Routes as RoutesImport, BrowserRouter } from "react-router-dom";
import EXAMPLE_SUBMISSIONS, { Submission } from "ExampleSubmissions";
import styles from "css/App.module.css";
import setObject from "utils/local-storage/setObject";
import { useState } from "react";
import getObject from "utils/local-storage/getObject";
import getUserData from "utils/local-storage/getUserData";
import setUserData from "utils/local-storage/setUserData";
import getApplicationData from "utils/local-storage/getApplicationData";
import setApplicationData from "utils/local-storage/setApplicationData";

const USER_ID = "1";

function VotePage(): JSX.Element {
  const getNextSubmissionData = () => {
    const userData = getUserData(USER_ID);
    let nextIndex = 0;
    while (nextIndex < EXAMPLE_SUBMISSIONS.length && userData[EXAMPLE_SUBMISSIONS[nextIndex].id]) {
      nextIndex++;
    }
    if (nextIndex < EXAMPLE_SUBMISSIONS.length) {
      return {submission: EXAMPLE_SUBMISSIONS[nextIndex], index: nextIndex}
    }
    return null;
  }

  const nextSubmissionData = getNextSubmissionData();
  const initialSubmission = nextSubmissionData?.submission || EXAMPLE_SUBMISSIONS[0];
  const initialIndex = nextSubmissionData?.index || 0;

  const [submission, setSubmission] = useState(initialSubmission);
  const [index, setIndex] = useState(initialIndex);
  // const index = Math.floor(Math.random() * EXAMPLE_SUBMISSIONS.length);

  /*
  * Application: key: id, value: {downvoteCount: number, upvoteCount: number}
  * User: key: user_id, value: {application_id_1: {vote: bool}, application_id_2: {vote: bool}}
  * upvote - true, false
  */

  const onVote = (vote : boolean) => {
    const userData = getUserData(USER_ID);
    userData[submission.id] = {vote};
    setUserData(USER_ID, userData);

    const applicationData = getApplicationData(submission.id);
    if (vote) {
      applicationData.upvoteCount++;
    } else {
      applicationData.downvoteCount++;
    }
    setApplicationData(submission.id, applicationData);

    const nextSubmissionData = getNextSubmissionData();
    if(nextSubmissionData) {
      setSubmission(nextSubmissionData.submission);
      setIndex(nextSubmissionData.index);
    } else {
      setIndex(-1);
    }
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.example}>
        {(index > 0) ? 
          <>
           <h1>{`APPLICATION ${index}/${EXAMPLE_SUBMISSIONS.length}`}</h1>
           <h2>{submission.name}</h2>
           <h2>{submission.userFullname}</h2>
           <div className={styles.inline}>
             {submission.assets.map(asset => {
               return <img className={styles.image} src={asset.src}/>
             })}
           </div>
           </>
           :
           <h1>You have voted on all applications</h1>
        }
        <div>
          <button onClick={() => onVote(false)}> Downvote</button>
          <button onClick={() => onVote(true)}> Upvote</button>
        </div>
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
