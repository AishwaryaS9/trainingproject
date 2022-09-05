import React, { useState } from 'react'
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import styles from '../styles/addusermodal.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

type inputType = {
  name: string;
  email: string;
  phno: string;
  role: string;
};

const addusermodal = ({ openAddModal, handleCloseAddModal }: any) => {
  const nameList = [{ label: "Admin" }, { label: "User" }];
  const initialValues = { name: "", email: "", phno: "", role: "" };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState(initialValues);
  const [phoneno, setPhoneno] = useState();


  const handlePhoneChange = (value: any) => {
    setFormValues({ ...formValues, ["phno"]: value });
  };

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

      <Modal className={styles.adminmodal} show={openAddModal} onHide={closeModal} >
        <Modal.Header closeButton>
          <Modal.Title className={styles.modaltitle}>
            Invite User
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <Container>
            <Form id="insertForm" method="post" onSubmit={handleSubmit}>
              <Form.Group controlId="text" className={styles.formgroup}>
                <Form.Label className={styles.form_label}>NAME</Form.Label>
                <Form.Control className={styles.form_control}
                  type="text"
                  placeholder="Enter"
                  name="txtname"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className={styles.formgroup}>
                <Form.Label className={styles.form_label}>EMAIL</Form.Label>
                <Form.Control className={styles.form_control}
                  type="password"
                  placeholder="Enter"
                  name="password"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className={styles.formgroup}>
                <Row>
                  <Col>

                    <Form.Label className={styles.form_label}>PHONE NUMBER</Form.Label>
                    <PhoneInput
                      country={'us'}
                      value={phoneno}
                      onChange={handlePhoneChange}
                      containerStyle={{ height: "40px" }} inputStyle={{ height: "40px" }}

                    />

                    {/* <PhoneInput
                      country={"us"}

                      value={phoneno}
                      onChange={handlePhoneChange} /> */}
                  </Col>
                  <Col>
                    <Form.Label className={styles.form_label}>ROLE</Form.Label>
                    <Form.Select className={styles.role_form_control}>
                      <option>Select role</option>
                      <option>Admin</option>
                    </Form.Select>
                    {/* 
                                <Form.Control className={styles.role_form_control}
                                    type="text"
                                    placeholder="Select Role"
                                    name="txtname"
                                /> */}

                  </Col>
                </Row>
              </Form.Group>


              <Form.Group className={styles.formgroup}>
                <Button variant="light" className={styles.addbtn}>+ Add Another</Button>
              </Form.Group>

            </Form>
          </Container>


        </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
          <Button variant="light" className={styles.cancelbtn} onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="light" className={styles.submitbtn} type="submit">
            Invite user
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default addusermodal