import React from 'react';

const Navbar = () => {
     return (
          <nav class="navbar navbar-expand-lg navbar-light text-white">
               <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav ms-auto mx-1">
                         <li class="nav-item">
                              <a class="nav-link me-5 " aria-current="page" href="#">Home</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link me-5" href="#">About</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link me-5 " aria-current="page" href="#">Dental Services</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link me-5 text-white" href="#">Reviews</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link me-5 text-white " aria-current="page" href="#">Blogs</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link me-5 text-white" href="#">Contact Us</a>
                         </li>
                    
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;