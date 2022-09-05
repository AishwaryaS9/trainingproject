import React, { useState } from 'react'
import { Button, Form, Container, Col, Row, Modal } from "react-bootstrap";
import styles from '../styles/projectsupdateutilization.module.css'
import { RiDeleteBin6Line } from 'react-icons/ri'

const projectsupdateutilization = ({ openUpdateModal, handleCloseUpdateModal }: any) => {


    const initialValues = { name: "", client: "", projecttype: "", projectresponsible: "", startdate: "", enddate: "", projectstatus: "", monthlystatus: "" };
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

      
        <Modal className={styles.projectmodal} show={openUpdateModal} onHide={closeModal} >
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
                                    <Form.Label className={styles.form_label}>PROJECT NAME</Form.Label>
                                    <Form.Control className={styles.projectname_form}
                                        type="text"
                                        placeholder="Enter"
                                        name="name"
                                        onChange={handleChange}

                                    />
                                </Col>

                                <Col>
                                    <Form.Label className={styles.form_label}>PROJECT TYPE</Form.Label>
                                    <Form.Control className={styles.projecttype_form}
                                        type="text"
                                        placeholder="Enter"
                                        name="name"
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
                                    <Form.Label className={styles.form_label}>MONTHLY COST</Form.Label>
                                    <Form.Control className={styles.monthlycost_form}
                                        type="text"
                                        placeholder="0"
                                        name="name"
                                        onChange={handleChange}

                                    />
                                </Col>

                                <Col>
                                    <Form.Label className={styles.form_label}>MONTHLY UTILIZATION</Form.Label>
                                    <Form.Control className={styles.monthlyutilization_form}
                                        type="text"
                                        placeholder="0"
                                        name="name"
                                        onChange={handleChange}

                                    />
                                </Col>

                                <Col>
                                    <Form.Label className={styles.form_label}>COST YTD</Form.Label>
                                    <Form.Control className={styles.cost_ytd_form}
                                        type="text"
                                        placeholder="0"
                                        name="name"
                                        onChange={handleChange}

                                    />
                                </Col>
                            </Row>
                        </Form.Group>


                        <Form.Group controlId="formBasicPassword" className={styles.formgroup}>

                            <Row>
                                <Col>
                                    <Form.Label className={styles.form_label}>EMPLOYEE NAME</Form.Label>

                                    <Form.Select className={styles.employeename_form}>
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
                                    <Form.Label className={styles.form_label}>COST</Form.Label>
                                    <Form.Control className={styles.cost_form}
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

                        <Form.Group controlId="formBasicPassword" className={styles.formgroup}>

                            <Row>
                                <Col>
                                    <Form.Label className={styles.form_label}>EMPLOYEE NAME</Form.Label>

                                    <Form.Select className={styles.employeename_form}>
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
                                    <Form.Label className={styles.form_label}>COST</Form.Label>
                                    <Form.Control className={styles.cost_form}
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

export default projectsupdateutilization