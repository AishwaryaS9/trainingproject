import React, { useState } from "react";
import { Button, Form, Container, Col, Row, Modal } from "react-bootstrap";
import styles from '../styles/addprojectmodal.module.css'

import 'bootstrap/dist/css/bootstrap.min.css';

type inputType = {
  name: string;
  client: string;
  projecttype: string;
  projectresponsible: string;
  startdate: string;
  enddate: string;
  projectstatus: string;
  monthlystatus: string;
};



const Addprojectmodal = ({ openAddModal, handleCloseAddModal }: any) => {


  const initialValues = { name: "", client: "", projecttype: "", projectresponsible: "",startdate:"", enddate:"",projectstatus:"", monthlystatus:"" };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    //   setFormErrors(validate(formValues));
  };

  const closeModal = () => {
    setFormValues(initialValues);
    handleCloseAddModal();
  };

  return (

<>
<Modal className={styles.projectmodal} show={openAddModal} onHide={closeModal} >
       <Modal.Header closeButton>
          <Modal.Title className={styles.modaltitle}>
           Add Project
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 


    <Container>
      <Form id="insertForm" method="post" onSubmit={handleSubmit}>
        <Form.Group className={styles.formgroup}>
          <Form.Label className={styles.form_label}>NAME</Form.Label>
          <Form.Control className={styles.form_input}
            type="text"
            placeholder="Enter"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className={styles.formgroup}>
          <Form.Label className={styles.form_label}>CLIENT</Form.Label>
          <Form.Control className={styles.form_input}
            type="text"
            placeholder="Enter"
            name="name"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className={styles.formgroup}>
          <Row>
            <Col>
              <Form.Label className={styles.form_label}>PROJECT TYPE</Form.Label>
              <Form.Select className={styles.grid_form_input}>
                <option>Please select...</option>
              </Form.Select>


            </Col>
            <Col>
              <Form.Label className={styles.form_label}>PROJECT RESPONSIBLE</Form.Label>
              <Form.Select className={styles.grid_form_input}>
                <option>Please select...</option>
              </Form.Select>
            </Col>
          </Row>

        </Form.Group>

        <Form.Group className={styles.formgroup}>
          <Row>
            <Col>

              <Form.Label className={styles.form_label}>START DATE</Form.Label>
              <Form.Control className={styles.grid_form_input}
                type="date"
                placeholder=""
                name="date"
                onChange={handleChange}
              />
            </Col>
            <Col>
              <Form.Label className={styles.form_label}>END DATE</Form.Label>
              <Form.Control className={styles.grid_form_input}
                type="date"
                placeholder=""
                name="date"
                onChange={handleChange}
              />
            </Col>
          </Row>

        </Form.Group>

        <Form.Group controlId="formBasicPassword" className={styles.formgroup}>

          <Row>
            <Col>
              <Form.Label className={styles.form_label}>PROJECT STATUS</Form.Label>

              <Form.Select className={styles.grid_form_input}>
                <option>Please select...</option>
              </Form.Select>


            </Col>

            <Col>
              <Form.Label className={styles.form_label}>MONTHLY STATUS</Form.Label>
              <Form.Select className={styles.grid_form_input}>
                <option>Please select...</option>
              </Form.Select>

            </Col>

          </Row>

        </Form.Group>

      </Form>
    </Container>

    </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
          <Button variant="light" className={styles.cancelbtn} onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="light" className={styles.submitbtn} type="submit">
           Add Project
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Addprojectmodal