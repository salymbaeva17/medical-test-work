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
    const {reset} = useForm()

    const onSubmit = (data) => {
        data.image = image.url
        axios.post(`https://613ae97d110e000017a453d0.mockapi.io/projects`, data)
            .then(({data}) => {
                setGallery([...gallery, data])
                setIsModal(false)
                reset()
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
            <button onClick={() => setIsModal(true)}
                    className='btn btn-primary mt-3 ms-auto d-block'>
                Добавить проект
            </button>
            <div className="row mt-5">
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