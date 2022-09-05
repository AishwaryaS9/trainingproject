import React, {useState} from 'react'
import {Button, Container, Form, Modal} from 'react-bootstrap'
import styles from '../styles/addskillmodal.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';

type inputType = {
  skillname: string;
  skilldescription: string;
  skillstatus: string;
};

const Addskillmodal = ({ openAddModal, handleCloseAddModal }: any) => {

  const initialValues = { skillname: "", skilldescription: "", skillstatus: ""};
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
<Modal className={styles.skillsmodal} show={openAddModal} onHide={closeModal} >
       <Modal.Header closeButton>
          <Modal.Title className={styles.modaltitle}>
           Add Skill
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 



    <Container>
    <Form id="insertForm" method="post" onSubmit={handleSubmit}>
      <Form.Group className={styles.formgroup}>
        <Form.Label className={styles.form_label}>SKILL NAME</Form.Label>
        <Form.Control className={styles.form_input}
          type="text"
          placeholder="Enter"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className={styles.formgroup}>
        <Form.Label className={styles.form_label}>SKILL DESCRIPTION</Form.Label>

        <Form.Control  as="textarea" rows={3} className={styles.skilldescription_form}
          type="text"
          placeholder="Type your text here"
          name="name"
          onChange={handleChange}
        />
      </Form.Group>

      
      <Form.Group className={styles.formgroup}>
      
          
            <Form.Label className={styles.form_label}>SKILL STATUS</Form.Label>
            <Form.Select className={styles.skillstatus_form}>
              <option>Please select...</option>
            </Form.Select>

      </Form.Group>

    </Form>
  </Container>

  </Modal.Body>
        <Modal.Footer style={{border:"none"}}>
          <Button variant="light" className={styles.cancelbtn} onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="light" className={styles.submitbtn} type="submit">
           Add Skill
          </Button>
        </Modal.Footer>
      </Modal>
  </>
  )
}

export default Addskillmodal