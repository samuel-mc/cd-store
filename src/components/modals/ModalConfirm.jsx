import React from 'react';
import Modal from './Modal';
import PrimaryButton from '../buttons/PrimaryButton';
import SecondaryButton from '../buttons/SecondaryButton';
import '../../style/ModalConfirm.css'

const ModalConfirm = ({ setShowConfirmModal, action }) => {

    const handleClose = () => {
        setShowConfirmModal(false);
    }

    return (
        <Modal>
            <h1>¿Estás Seguro?</h1>
            <div className="confirm__buttons">
                <PrimaryButton text="Sí" action={action}/>
                <SecondaryButton text="No" action={() => handleClose()} />
            </div>
        </Modal>
    )
}

export default ModalConfirm
