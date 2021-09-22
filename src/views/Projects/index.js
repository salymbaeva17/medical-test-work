import React, {useEffect, useState} from 'react';
import Layout from "../../components/Layout";
import ProjectCard from "../../components/ProjectCard";
import ModalProject from "../../components/Modal";
import axios from "axios";
import {useForm} from "react-hook-form";

const Projects = () => {
    const [gallery, setGallery] = useState([])
    const [showModal, setIsModal] = useState(false)
    const [image, setImage] = useState({})
    const [className, setClassName] = useState("row")
    const {reset} = useForm()

    const onSubmit = (data) => {
        data.image = image.url
        axios.post(`https://613ae97d110e000017a453d0.mockapi.io/projects`, data)
            .then(({data}) => {
                setGallery([...gallery, data])
                reset()
                setIsModal(false)

            })
    }
    const handleChange = (e) => {
        const formData = new FormData()
        formData.append("file", e.target.files[0])
        formData.append("upload_preset", "projects")
        axios.post(`https://api.cloudinary.com/v1_1/medical-media/upload`, formData)
            .then(({data}) => setImage(data))
    }
    useEffect(() => {
        axios(`https://613ae97d110e000017a453d0.mockapi.io/projects`)
            .then(({data}) => setGallery(data))
    }, [])

    return (
        <>
            <div className="d-flex justify-content-between align-items-center  mt-5">
                <p className="project-list">Список проектов</p>
                <button onClick={() => setIsModal(true)}
                        className='btn btn-add'>
                    Добавить проект
                </button>
            </div>
            <div className="d-flex align-items-center mt-4">
                <button onClick={() => setClassName("row")} className="ms-auto d-flex justify-content-center align-items-center btn">
                    <i className='bx bxs-grid-alt' style={{margin: "0", color: "#b00fc3", fontSize: "24px", border: "none"}}/></button>
                <button onClick={() => setClassName("d-block")} className="d-flex justify-content-center align-items-center ms-1 btn">
                    <i className='bx bx-list-ul' style={{margin: "0", color: "#b00fc3", fontSize: "30px", border: "none"}}/></button>
            </div>
            <div className={`mt-5 ${className}`}>
                {
                    gallery.map(el =>
                        <ProjectCard key={el.id} el={el}/>
                    )
                }
            </div>
            <ModalProject show={showModal} handleChange={handleChange} onSubmit={onSubmit} setIsModal={setIsModal}/>
        </>
    );
};

export default Projects;