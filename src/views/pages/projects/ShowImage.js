import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {

  render() {
    return (
      <div>
        
        <Modal isOpen={this.props.modal} fade={false} toggle={this.props.toggle} className={this.props.className} size="lg">
          <ModalHeader toggle={this.props.toggle}>{this.props.description}</ModalHeader>
          <ModalBody>
              
            <img src={'https://ik.imagekit.io/qlola/tr:w-1000/' + this.props.urlPathName} alt="Screenshot" width="100%" className="img-responsive"  />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;