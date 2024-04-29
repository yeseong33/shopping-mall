import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query"
import axios from "axios";



function MyNav() {
    let navigate = useNavigate(); 

    let result = useQuery('작명', () => 
      axios.get('https://codingapple1.github.io/userdata.json')
        .then((a) => {
          console.log('요청중')
          return a.data
        })
    )

    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => navigate('/')} >Navbar scroll</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link onClick={() => navigate('/cart')}>Cart</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                  Link
                </Nav.Link>
              </Nav>
              <Nav.Link className="ms-auto">
                { result.isLoading && "로딩중" }
                { result.error && "에러남" }
                { result.data && result.data.name }
              </Nav.Link>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
  }

  export { MyNav };