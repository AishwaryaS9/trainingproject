import React, {useState} from 'react'
import { Button, Form, Container, Col, Row, Modal } from "react-bootstrap";
import styles from '../styles/employeesupdateutilization.module.css'
import { RiDeleteBin6Line } from 'react-icons/ri'


const employeesupdateutilization = ({ openUpdateModal, handleCloseUpdateModal }: any) => {
    const initialValues = { name: "", email: "", phonenumber: "", joiningdate: "", skills: "", employeetype: "", salary: "", utilization: "", revenueopportunity: "" };
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
        handleCloseUpdateModal();
    };

    return (

<>

<Modal className={styles.updateemployeemodal} show={openUpdateModal} onHide={closeModal} >
            <Modal.Header closeButton>
                <Modal.Title className={styles.modaltitle}>
                    Update Utilization
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

          
        <Container>
            <Form id="insertForm" method="post" onSubmit={handleSubmit}>
                <Form.Group className={styles.formgroup}>
                    <Row>
                        <Col>
                            <Form.Label className={styles.form_label}>NAME</Form.Label>
                            <Form.Control className={styles.name_form}
                                type="text"
                                placeholder="Enter"
                                name="name"
                                onChange={handleChange}

                            />
                        </Col>

                        <Col>
                            <Form.Label className={styles.form_label}>EMPLOYEE ID</Form.Label>
                            <Form.Control className={styles.employeeid_form}
                                type="id"
                                placeholder="Enter"
                                name="id"
                                onChange={handleChange}

                            />
                        </Col>
                    </Row>

                </Form.Group>

                <Form.Group className={styles.formgroup}>
                    <Row>
                        <Col>

                            <Form.Label className={styles.form_label}>MONTH</Form.Label>
                            <Form.Control className={styles.month_form}
                                type="date"
                                placeholder=""
                                name="date"
                                onChange={handleChange}

                            />
                        </Col>
                        <Col>
                            <Form.Label className={styles.form_label}>YEAR</Form.Label>
                            <Form.Control className={styles.year_form}
                                type="date"
                                placeholder=""
                                name="date"
                                onChange={handleChange}

                            />
                        </Col>
                    </Row>

                </Form.Group>
                <Form.Group className={styles.formgroup}>
                    <Row>
                        <Col>
                            <Form.Label className={styles.form_label}>SALARY</Form.Label>
                            <Form.Control className={styles.salary_form}
                                type="text"
                                placeholder="0"
                                name="name"
                                onChange={handleChange}

                            />
                        </Col>

                        <Col>
                            <Form.Label className={styles.form_label}>TOTAL UTILIZATION</Form.Label>
                            <Form.Control className={styles.totalutilization_form}
                                type="text"
                                placeholder="0"
                                name="name"
                                onChange={handleChange}

                            />
                        </Col>

                        <Col>
                            <Form.Label className={styles.form_label}>REVENUE LOSS</Form.Label>
                            <Form.Control className={styles.revenueloss_form}
                                type="text"
                                placeholder="0"
                                name="name"
                                onChange={handleChange}

                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className={styles.formgroup}>

                    <Row>
                        <Col>
                            <Form.Label className={styles.form_label}>PROJECT NAME</Form.Label>

                            <Form.Select className={styles.projectname_form}>
                                <option>Please select...</option>
                            </Form.Select>
                        </Col>

                        <Col>

                            <Form.Label className={styles.form_label}>UTILIZATION</Form.Label>
                            <Form.Control className={styles.utilization_form}
                                type="text"
                                placeholder="0"
                                name="name"
                                onChange={handleChange}

                            />
                         
                        </Col>
                        <Col>
                        <RiDeleteBin6Line className={styles.deleteicon} />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group className={styles.formgroup}>

                    <Row>
                        <Col>
                            <Form.Label className={styles.form_label}>PROJECT NAME</Form.Label>

                            <Form.Select className={styles.projectname_form}>
                                <option>Please select...</option>
                            </Form.Select>
                        </Col>

                        <Col>

                            <Form.Label className={styles.form_label}>UTILIZATION</Form.Label>
                            <Form.Control className={styles.utilization_form}
                                type="text"
                                placeholder="0"
                                name="name"
                                onChange={handleChange}

                            />
                          
                        </Col>
                        <Col>
                        <RiDeleteBin6Line className={styles.deleteicon}/>
                        </Col>
                      
                    </Row>
                </Form.Group>
                <Form.Group className={styles.formgroup}>
                            <Button variant="light" className={styles.addbtn}>+ Add Another</Button>
                        </Form.Group>

            </Form>
        </Container>
        
        </Modal.Body>
            <Modal.Footer style={{ border: "none" }}>
                <Button variant="light" className={styles.cancelbtn} onClick={closeModal}>
                    Cancel
                </Button>
                <Button variant="light" className={styles.submitbtn} type="submit">
                    Save
                </Button>
            </Modal.Footer>
           
        </Modal>
        </>
    )
}

export default employeesupdateutilization