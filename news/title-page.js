
import {LitElement, html, css} from 'lit';
import { NewStories } from './new-stories';

export class TitlePage extends LitElement {
  static get styles() {
    return css`
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  background-color: #ff7100;
  color: #fff;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

/* LOGO */
.logo {
  font-size: 32px;
}

/* NAVBAR MENU */
.menu {
  display: flex;
  gap: 1em;
  font-size: 18px;
}

.menu li:hover {
  background-color: #ec5527;
  color:#f58e8e;
  border-radius: 3px;
  transition: 0.3s ease;
}

.menu li {
  padding: 5px 14px;
}

ul {
    list-style-type: none;
}

.detail-view{
    display:none;
  }


@media (max-width: 768px) {
 .menu {
    display:none;
    position: absolute;
    background-color:teal;
    right: 0;
    left: 0;
    text-align: center;
    padding: 16px 0;
  }

  .menu li:hover {
    display: inline-block;
    background-color:#ec5527;
    transition: 0.3s ease;
  }

  .menu li + li {
    margin-top: 12px;
  }

  input[type=checkbox]:checked ~ .menu {
    display: block;
  }

  .dropdown {
    left: 50%;
    top: 30px;
    transform: translateX(35%);
  }

  .dropdown li:hover {
    background-color: #4c9e9e;
  }
}
    `;
  }

  static get properties() {
    return {
        showStory: {type: Boolean},
      
    };
  }

  constructor() {
    super();
    this.showStory = true;
  }

  _handleStories(){
    this.showStory =true;
  }

  render() {
    return html`
<nav class="navbar">
    <div class="logo">News Today</div>
    <ul class="nav-links">
      <!-- for navigation -->
      <div class="menu">
        <li><a href="/" @click="${this.handleStories}">New Stories</a></li>
        <li><a href="/">Top Stories</a></li>
        <li class="services">
          <a href="/">Best Stories</a>
        </li>
        <li><a href="/">Ask HN</a></li>
        <li><a href="/">Show HN</a></li>
      </div>
    </ul>
  </nav>
 
    `;
    
  }
}

window.customElements.define('title-page', TitlePage);
