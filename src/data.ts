import { Todo } from "./types";

let todos: Todo[] = [
    { date: new Date("2021-10-10T12:01:11"), title: "Aboba", id: "1", color: "indigo", content: "Lorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T14:01:12"), id: "2", color: "yellow", content: "Lorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T15:04:45"), id: "3", color: "blue", content: "Lorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T12:01:11"), id: "4", color: "purple", content: "Lorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T14:01:12"), id: "5", color: "blue", content: "Lorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T15:04:45"), title: "Aboba", id: "6", color: "green", content: "Lorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T12:01:11"), id: "7", color: "red", content: "Lorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T14:01:12"), id: "8", color: "green", content: "Lorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T15:04:45"), title: "Aboba", id: "9", color: "red", content: "Lorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T12:01:11"), id: "10", color: "yellow", content: "Lorem Ipsum" },
    { date: new Date("2021-10-10T14:01:12"), id: "11", color: "purple", content: "Lorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum" },
    { date: new Date("2021-10-10T15:04:45"), id: "12", color: "purple", content: "Lorem Ipsum\nLorem Ipsum\nLorem Ipsum\nLorem Ipsum" },
]

export { todos };