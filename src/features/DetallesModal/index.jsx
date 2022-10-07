import { Modal } from 'antd';
import React, { useState } from 'react';
import { EllipsisOutlined } from '@ant-design/icons';

const DetallesModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <EllipsisOutlined onClick={showModal} />
            <Modal title="Configuraciónes" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Ocultar</p>
                <p>Eliminar</p>
            </Modal>
        </>
    );
};

export default DetallesModal;