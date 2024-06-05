import React from 'react'
import { Modal } from 'antd';

const DeleteModal = ({ visible, onConfirm, onCancel }) => {

    const confirmButtonStyle = {
        backgroundColor: 'red',
        borderColor: 'red',
    };

    return (
        <Modal
            title="Confirm Deletion"
            visible={visible}
            onOk={onConfirm}
            onCancel={onCancel}
            okText="Delete"
            cancelText="Cancel"
            okButtonProps={{ style: confirmButtonStyle }}
        >
            Are you sure you want to delete this record?
        </Modal>
    )
}

export default DeleteModal;
