import React ,{useState}from 'react'
import {useDispatch} from 'react-redux';
import {Modal,Button} from 'react-bootstrap'
import Form from '../../../HOC/Form/Form'
const PostComponent = (props) => {
 
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true); 

    return (
        <div>
            <Button id="upBtn" variant="primary" onClick={handleShow}>
       add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        </Modal.Body>
        <Form setIt={props.setIt} item={props.item} action={props.action} name={props.name} value={props.value}    /> 
    
      </Modal>
        </div>
    )
}

export default PostComponent
