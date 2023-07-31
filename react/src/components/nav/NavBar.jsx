import React, { useContext, useEffect, useState } from "react";
import { Link} from "react-router-dom";
import LoadLinks from "./LoadLinks";
import CartWidget from "./CartWidget";
import { UserContext } from "../users/UserContext";
import { CartContext } from "../carts/CartContext";
import {Avatar} from '@primer/react'


function NavBar() { 
    const {user,closeUserSession} = useContext(UserContext)
    const links = [
        {
          name: "Componentes",
          route: "/products?category=componentes",
          sublinks: [
            { route: "/products?category=componentes&subcategory=cpu", name: "CPU" },
            { route: "/products?category=componentes&subcategory=motherboard", name: "Motherboard" },
            { route: "/products?category=componentes&subcategory=ram", name: "Memorias RAM" },
            { route: "/products?category=componentes&subcategory=alm", name: "Almacenamiento" },
            { route: "/products?category=componentes&subcategory=PSU", name: "Fuentes de alimentacion" },
            { route: "/products?category=componentes&subcategory=GAB", name: "Gabinetes" },
            { route: "/products?category=componentes&subcategory=VGA", name: "Tarjeta de video" },
            // Agrega más subenlaces según sea necesario
          ]
        },
        {
          name: "Servicios",
          route: "/products?category=servicios",
          sublinks: [
            { route: "/products?category=servicios&subcategory=hombres", name: "Mantenimiento" },
            { route: "/products?category=servicios&subcategory=mujeres", name: "Service" },
            // Agrega más subenlaces según sea necesario
          ]
        },
        {
          name: "Outlet",
          route: "/products?category=outlet",
          sublinks: [
            { route: "/products?category=outlet&subcategory=ofertas", name: "Ofertas" },
            { route: "/products?category=outlet&subcategory=liquidacion", name: "Liquidacion" },
            // Agrega más subenlaces según sea necesario
          ]
        }
      ];

    useEffect( () => {
    },[])
    const onClickCloseButton= () => {
        closeUserSession()
    }
    return (
        <div className='container-fluid'>
          <div className="row nav-bar">
            <div className="col-md-12 justify-content-center">
              <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                  <Link className="navbar-brand" to="/products"><h1>Wolf Backend</h1></Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                        <path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path>
                      </svg>
                    </span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav">
                      {links.map((link) => (
                        <li key={link.name} className="nav-item dropdown">
                          <Link
                            className="nav-link dropdown-toggle"
                            to={link.route}
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            {link.name}
                          </Link>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            {link.sublinks.map((sublink) => (
                              <li key={sublink.name}>
                                <Link className="dropdown-item" to={sublink.route}>{sublink.name}</Link>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                    </ul>
  

     
                
                <div className="col-md-4 d-flex justify-content-center align-items-center">
                    {
                        user?
                            <div className="d-flex ">
                                <CartWidget className="m-2"/>
                                <Link to={"/users"} >
                                    {
                                        user.avatar? 
                                            <Avatar src={user.avatar} size={24}></Avatar>
                                            :
                                            <button type="button" className="btn position-relative">

                                                <img src={"/img/circle-user-solid.svg"} width={25}/>
                                            </button>
                                            
                                    }
                                </Link>
                                <button id="btn_close_session" className="btn btn-danger" onClick={onClickCloseButton} href="" aria-current="page" >Cerrar Sesion</button>
                                <Link to={"/chat"} className="btn btn-secondary">Prueba nuestro chat!</Link>
                            </div>
                            :
                            <Link to={"/"} className="btn btn-primary">Inicia sesion</Link>
                            //<button id="btn_login" className="active btn btn-primary" aria-current="page">Iniciar sesion</button>
                    }
                </div>
                </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
    );
}
export default NavBar;