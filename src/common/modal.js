import React from "react";
import {Header, Image, Modal} from "semantic-ui-react";
import Button from './button';
import '../components/home.css';

const modal = (props) => {
    return(
        <Modal className='modelWrap' open={props.modalVisible} onClose={props.onClose}>
            <Modal.Header>{props.selectedItem.name}</Modal.Header>
            <Modal.Content image>
                <Image wrapped size='medium' rounded src={props.selectedItem.image} />
                <Modal.Description>
                    <Header>Name: {props.selectedItem.name}</Header>
                    <p>
                        Email: {props.selectedItem.email}<br/>
                        Age: {props.selectedItem.age}<br/>
                        Date of birth: {props.selectedItem.DOB}<br/>
                        Country: {props.selectedItem.country}
                    </p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button title={'Close'} onClick={props.onClose}/>
            </Modal.Actions>
        </Modal>
    )
};

export default modal;
