import React, { Component } from "react";

class TestHeader extends Component{
    render() {
        return(
            <header class="container">
        <nav class="navbar navbar-expand-sm navbar-light px-0">
            <a class="navbar-brand" href="index.html" id="logo">
                
            </a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#menu"
                aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="menu">
                <ul class="navbar-nav mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./menu.html">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./blog.html">Blog</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./contacts.html">Contacts</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0" id="frm-search">
                    <div class="input-group input-group-sm">
                        <div class="input-group-append">
                            <button class="btn" id="btn-search" type="submit"></button>
                        </div>
                    </div>
                </form>
                <div id="social">
                    <a href="/" class="btn twitter"></a>
                    <a href="/" class="btn facebook"></a>
                </div>

            </div>
        </nav>
    </header>
        )
    }
}
export default TestHeader;