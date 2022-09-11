import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import AddForm from './Components/AddForm';
import RockList from './Components/RockList';
import RockContextProvider from './Context/RockContext';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditForm from './Components/EditForm';

function App() {
  return (
   <BrowserRouter>
      <Container>
      <Row>
        <Col>
          <RockContextProvider>
            <RockList/>
          </RockContextProvider>
        </Col>
      </Row>
    </Container>

    {/* <Routes>
      <Route path="" element={<EditForm/>}/>
    </Routes> */}
   </BrowserRouter>
  );
}

export default App;
