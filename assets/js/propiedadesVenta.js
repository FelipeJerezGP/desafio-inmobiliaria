export const propiedades = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.0,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 2.5,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      " Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    baños: 2,
    costo: 2.2,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      " Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    baños: 3,
    costo: 4.5,
    smoke: false,
    pets: true,
  },
];

function generarPropiedades() {
  const contenedor = document.getElementById("venta-container");

  propiedades.forEach((propiedad) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-4");

    card.innerHTML = `
            <div class="card">
                <img src="${
                  propiedad.src
                }" class="card-img-top" alt="Imagen del departamento">
                <div class="card-body">
                    <h5 class="card-title">${propiedad.nombre}</h5>
                    <p class="card-text">${propiedad.descripcion}</p>
                    <p><i class="fas fa-map-marker-alt"></i> ${
                      propiedad.ubicacion
                    }</p>
                    <p><i class="fas fa-bed"></i> ${
                      propiedad.habitaciones
                    } Habitaciones |
                       <i class="fas fa-bath"></i> ${propiedad.baños} Baños</p>
                    <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                    <p class="${
                      propiedad.smoke ? "text-success" : "text-danger"
                    }">
                        <i class="${
                          propiedad.smoke
                            ? "fas fa-smoking"
                            : "fas fa-smoking-ban"
                        }"></i>
                        ${
                          propiedad.smoke
                            ? "Permitido fumar"
                            : "No se permite fumar"
                        }
                    </p>
                    <p class="${
                      propiedad.pets ? "text-success" : "text-danger"
                    }">
                        <i class="${
                          propiedad.pets ? "fas fa-paw" : "fa-solid fa-ban"
                        }"></i>
                        ${
                          propiedad.pets
                            ? "Mascotas permitidas"
                            : "No se permiten mascotas"
                        }
                    </p>
                </div>
            </div>
        `;
    contenedor.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  generarPropiedades();
});
