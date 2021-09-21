import React from 'react';
import Modal from "react-modal";
import {useForm} from "react-hook-form";

const ModalProject = ({show, setIsModal, onSubmit, handleChange}) => {

    const {register, handleSubmit} = useForm()


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: "50%"
        },
    }

    return (
        <Modal isOpen={show} onRequestClose={() => setIsModal(false)} style={customStyles}>
            <div className="container">
                <button className="position-relative" onClick={() => setIsModal(false)}>x</button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container">
                        <input id="image" className="form-control mb-3" type="file"
                               {...register("image", {required: true})}
                        onChange={handleChange}/>
                        <div className="d-flex mb-3">
                            <input className="form-control" type="date"
                                   {...register("startDate", {required: true})}/>
                            <input className="form-control ms-3" type="date"
                                   {...register("finishDate", {required: true})}/>
                        </div>
                        <input className="form-control mb-3" type="text" placeholder="Название проекта..."
                               {...register("title", {required: true})}/>
                        <input className="form-control mb-3" type="text" placeholder="Имя автора..."
                               {...register("author", {required: true})}/>
                        <input className="form-control mb-3" type="text" placeholder="Компания..."
                               {...register("company", {required: true})}/>
                        <button className="ms-auto d-block btn btn-primary">Добавить</button>
                    </div>
                </form>
            </div>
        </Modal>
    );
};

export default ModalProject;