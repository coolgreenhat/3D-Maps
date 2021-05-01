import React from 'react';
import Modal from 'react-modal';
import { Texture } from './Texture';
import axios from 'axios';
import { useAlert } from 'react-alert'

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

// Modal.setAppElement('#map')

function Box(url,saved=false){
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const [name, setName] = React.useState('')
    const alert = useAlert()

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }

    function onSubmit(e) {
      e.preventDefault()
      const map = {
        name: name,
        url: url["url"]
      } 
      axios.post('http://localhost:5000/map/add',map)
      .then(res => {
        setIsOpen(false);
        setName('');
        alert.show('Map Saved Successfully!', {
          timeout: 5000,
          type: 'success',
        });
      })
      .catch(err => {
        alert.show('Error Occured!', {
          timeout: 5000,
          type: 'error',
        });
      })

    }

    return (
        <div>
         <button className="btn btn-success btn-lg" onClick={openModal}>3-D Preview</button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <h4>3-D Map Preview</h4>
              <Texture url={url["url"]} />
              {saved ? null :
              <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Name: </label>
                    <input type="text" required className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Save Map" className="btn btn-primary mt-4 mx-auto" />  
                </div>
              </form>}
          </Modal>
        </div>
      );
  }
  
export default Box;