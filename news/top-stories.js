
export default {
  name: "home",
  data: function() {
    return {
      err: "",
      stories: []
    };
  },
  created: function() {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json")
      .then(result => {
        this.results = result.data.slice(0, 10);
        this.results.forEach(element => {
          axios
            .get(
              "https://hacker-news.firebaseio.com/v0/item/" + element + ".json"
            )
            .then(result => {
              this.stories.push(result);
            })
            .catch(err => {
              console.log(err);
            });
        });
      })
      .catch(err => {
        this.err = err;
      });
  },




fetchData() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(response => {
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
};