import React from 'react';
import Modal from 'react-modal';
import { Texture } from './Texture';
import { SaveMap } from './SaveMap';
import axios from 'axios';

const customStyles = {
  content : {
    top                   : '15%',
    left                  : '50%',
    right                 : '70%',
    bottom                : 'auto',
    marginRight           : '-50%',
    paddingLeft           : '35px',
    transform             : 'translate(-50%, 0)',
  }
};

Modal.setAppElement("#root")
const BASEURL = process.env.REACT_APP_BASEURL

function Box(props){
    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    const deleteMap = (id) => {
      axios.delete(`${BASEURL}/map/${id}`)
      .then(res => {
        setIsOpen(false);
        props.updateMaps(id);
      })
  }

    return (
        <div>
         <button className="btn btn-success btn-lg" onClick={openModal}>3D Preview</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h4>3-D Map Preview</h4>
              <Texture url={props.url} />
              {props.show ? <SaveMap url={props.url} closeModal={closeModal} /> : <>
              <h3>{props.name}</h3>
              <button className="btn btn-danger" onClick={() => deleteMap(props.id)}>Delete Map</button>
              </>
              }
          </Modal>
        </div>
      );
  }
  
export default Box;