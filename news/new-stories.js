
import {LitElement, html, css} from 'lit';

export class NewStories extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
      }
    `;
  }

  static get properties() {
    return {
      name: {type: String},
      count: {type: Number},
    };
  }
  connectedCallback() {
    super.connectedCallback();
    // this.fetchData();

}

  fetchData() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => {
            console.log(response);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            };
            response.json();
        })
        .then(data => {
            this.data = data.data.slice(0, 10);
            this.data.forEach(element => {
                fetch( "https://hacker-news.firebaseio.com/v0/item/" + element + ".json")
                .then(response => {
                    if (response.ok) {
                        this.response = response;
                        console.log('Success:', response);
                    };
                    response.json();
                })
        });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}



  constructor() {
    super();
    this.name = 'World';
    this.count = 0;
  }

  render() {
    return html`
      <h1>New Stories are here!</h1>
    `;
  }
}

window.customElements.define('new-stories', NewStories);
