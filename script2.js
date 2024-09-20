const library = [
    {
      title: "The Rabin",
      author: "Rabin Oli",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "How to become poor",
      author: "Rabin Oli",
      status: {
        own: true,
        reading: false,
        read: false
      }
    },
    {
      title: "wwwww",
      author: "Jack",
      status: {
        own: true,
        reading: false,
        read: false
      }
    }
  ];
  library.forEach(book => book.status.read = true);

const { title: firstBookTitle } = library[0];
console.log(firstBookTitle); 



