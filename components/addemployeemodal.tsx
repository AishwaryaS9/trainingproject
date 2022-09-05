import React, { useState } from "react";
import { Button, Form, Container, Col, Row, Modal } from "react-bootstrap";
import styles from '../styles/addemployeemodal.module.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';


type inputType = {
    name: string;
    email: string;
    phonenumber: string;
    joiningdate: string;
    skills: string;
    employeetype: string;
    salary: string;
    utilization: string;
    revenueopportunity: string;
};


const Addemployeemodal = ({ openAddModal, handleCloseAddModal }: any) => {

    const initialValues = { name: "", email: "", phonenumber: "", joiningdate: "", skills: "", employeetype: "", salary: "", utilization: "", revenueopportunity: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [phoneno, setPhoneno] = useState();

    const handlePhoneChange = (value: any) => {
        setFormValues({ ...formValues, ["phonenumber"]: value });
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

        <Modal className={styles.employeemodal} show={openAddModal} onHide={closeModal} >
            <Modal.Header closeButton>
                <Modal.Title className={styles.modaltitle}>
                    Add Employee
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
                            <Form.Label className={styles.form_label}>EMAIL</Form.Label>
                            <Form.Control className={styles.form_input}
                                type="email"
                                placeholder="Enter"
                                name="email"
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
                                        containerStyle={{ height: "40px" }} inputStyle={{ height: "40px", width: "265px" }}

                                    />

                                </Col>
                                <Col>
                                    <Form.Label className={styles.form_label}>JOINING DATE</Form.Label>

                                    <Form.Control className={styles.joiningdate_form}
                                        type="date"
                                        placeholder="Select..."
                                        name="date"
                                        onChange={handleChange}

                                    />

                                </Col>
                            </Row>

                        </Form.Group>

                        <Form.Group className={styles.formgroup}>
                            <Row>
                                <Col>


                                    <Form.Label className={styles.form_label}>SKILLS</Form.Label>
                                    <Form.Select className={styles.grid_form_input}>
                                        <option>Please select...</option>
                                    </Form.Select>

                                </Col>

                                <Col>
                                    <Form.Label className={styles.form_label}>EMPLOYEE TYPE</Form.Label>
                                    <Form.Select className={styles.grid_form_input}>
                                        <option>Please select...</option>
                                    </Form.Select>
                                </Col>
                            </Row>

                        </Form.Group>

                        <Form.Group controlId="formBasicPassword" className={styles.formgroup}>
                            <Row>
                                <Col>
                                    <Form.Label className={styles.form_label}>SALARY</Form.Label>

                                    <Form.Control className={styles.grid_form_input}
                                        type="date"
                                        placeholder=""
                                        name="date"
                                        onChange={handleChange}

                                    />
                                </Col>

                                <Col>
                                    <Form.Label className={styles.form_label}>UTILIZATION</Form.Label>

                                    <Form.Control className={styles.grid_form_input}
                                        type="date"
                                        placeholder=""
                                        name="date"
                                        onChange={handleChange}

                                    />
                                </Col>
                            </Row>
                        </Form.Group>

                        <Form.Label className={styles.form_label}>REVENUE OPPORTUNITY</Form.Label>
                        <Form.Select className={styles.revenueopportunity_form}>
                            <option>Please select...</option>
                        </Form.Select>
                    </Form>
                </Container>

            </Modal.Body>
            <Modal.Footer style={{ border: "none" }}>
                <Button variant="light" className={styles.cancelbtn} onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="light" className={styles.submitbtn} type="submit">
                    Add Project
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Addemployeemodal