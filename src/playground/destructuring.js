const person = {
    name: "karthik",
    age: undefined,
    location: {
        city: "Erode",
        state: "Tamil Nadu"
    }
}

const book = {
    title: "ASOIF",
    author: "George",
    publisher: {
        // name: "penguin"
    }
}

const { name: n, age: a = 0 } = person

console.log(n, a)

const { name: publisherName = "Self-published" } = book.publisher

console.log(publisherName)