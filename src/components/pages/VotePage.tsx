import EXAMPLE_SUBMISSIONS from "constants/ExampleSubmissions";

export default function VotePage(): JSX.Element {
  const randomExample =
    EXAMPLE_SUBMISSIONS[Math.floor(Math.random() * EXAMPLE_SUBMISSIONS.length)];
  console.log(JSON.stringify(randomExample, null, 2));
  return (
    <div>
      Welcome! Check your console for the data of an example submission!
    </div>
  );
}
