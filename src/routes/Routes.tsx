import { Route, Routes as RoutesImport } from "react-router-dom";
import VotePage from "components/pages/VotePage";

export default function Routes(): JSX.Element {
  return (
    <RoutesImport>
      <Route path="/vote" element={<VotePage />} />
    </RoutesImport>
  );
}
