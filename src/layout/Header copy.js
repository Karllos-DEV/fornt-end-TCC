import { Link } from "react-router-dom";
import 'boxicons'


function Header() 
      {
        return (
          <div>
            <header>
              <img src="../assets/LogoHouse.png" alt="logo"></img>
              <div class="menuToggle"></div>

              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Idioma<i class='bx bxs-down-arrow' id="idi"></i></a>
                  <ul>
                    <li><a href="#">Português</a></li>
                    <li><a href="#">Inglês</a></li>
                    <li><a href="#">Xing Xong</a></li>
                  </ul>
                  <li><a href="#" class="Login"><i class='bx bxs-user' id="log"></i>Login</a></li>
                </li>
              </ul>
              <nav>
                {/* <div class="nav_baixo"> 
                <div class="socials">
                    <a href="#" id="facebook"><i class='bx bxl-facebook-square'></i></a>
                    <a href="#" id="twitter"><i class='bx bxl-twitter'></i></a>
                    <a href="#" id="twitch"><i class='bx bxl-twitch'></i></a>
                    <a rel="noreferrer noopener" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" id="youtube"><i class='bx bxl-youtube'></i></a>
                    <a href="#" id="instagram"><i class='bx bxl-instagram'></i></a>
                    <a href="#" id="discord"><i class='bx bxl-discord'></i></a>
                </div>
            </div>*/}
              </nav>
            </header>

          </div>
        );
      }

      export default Header;
