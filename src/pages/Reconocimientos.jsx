import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Establece el elemento raíz para ReactModal

const Reconocimientos = () => {

  const photos = [
    {
      src: "/public/reconocimientos/1.jpg",
      width: 1,
      height: 1,
      aspectRatio: 1,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/2.jpg",
      width: 2,
      height: 3,
      aspectRatio: 0.67,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/3.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/4.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/5.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/6.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/7.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/8.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/9.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/10.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    },
    {
      src: "/public/reconocimientos/11.jpg",
      width: 3,
      height: 2,
      aspectRatio: 1.5,
      title: "Premio 1"
    }
    // agregar más fotos aquí
  ];


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalPhoto, setModalPhoto] = useState(null);

  const openModal = (photo) => {
    setModalIsOpen(true);
    setModalPhoto(photo);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalPhoto(null);
  };

  return (




    <div className="relative">
      <div className="w-full h-28">
        <h1
          className="font-extrabold text-center mt-20 text-transparent uppercase text-4xl bg-clip-text bg-gradient-to-r from-primary to-green-500">
          Distinciones y Reconocimiento 2022
        </h1>

      </div>
      <div className="grid mb-20 mx-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} onClick={() => openModal(photo)}>
            {/*<h1 className="font-bold text-center">{photo.title}</h1>*/}
            <div className="relative h-0" style={{ paddingBottom: "75%" }}>
              <img
                src={photo.src}
                alt={photo.title}
                className="absolute object-cover w-full h-full cursor-pointer"
              />
            </div>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Modal"
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
        overlayClassName="fixed top-0 left-0 right-0 bottom-0 bg-black z-50"
      >
        {modalPhoto && (
          <div className="relative w-[100vh] h-auto mx-auto">

            <img
              src={modalPhoto.src}
              alt={modalPhoto.title}
              className="w-full h-full"
            />
            <button
              className="absolute top-0 right-0 p-2 text-white bg-gray-900 hover:bg-gray-800"
              onClick={closeModal}
            >
              Cerrar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Reconocimientos;
