import React from 'react'

export function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg bg-warning">
            <div class="container-fluid">
                <span class="navbar-brand" href="#">
                    <img src="./img/logobar.png" class="rounded-circle" alt="logo aguila" width="50" height="50" />
                </span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav m-auto">
                        <li class="nav-item m-auto px-2">
                            <a class="nav-link active" aria-current="page" href="#home">Home</a>
                        </li>
                        <li class="nav-item m-auto px-2">
                            <a class="nav-link active" aria-current="page" href="#nosotros">Nosotros</a>
                        </li>
                        <li class="nav-item m-auto px-2">
                            <a class="nav-link active" aria-current="page" href="#shop">Shop</a>
                        </li>
                        <li class="nav-item m-auto px-2">
                            <a class="nav-link active" aria-current="page" href="#contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}