import { Todo } from "./types";

let todos: Todo[] = [
    { date: new Date("2021-10-10T12:01:11"), id: "1", color: "indigo", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"}, {id: "3", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T14:01:12"), id: "2", color: "orange", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T15:04:45"), id: "3", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T12:01:11"), id: "4", color: "cyan", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T14:01:12"), id: "5", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"}, {id: "3", content: "Lorem ipsum"}, {id: "4", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T15:04:45"), id: "6", color: "magenta", items: [ {id: "1", content: "Lorem ipsum Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T12:01:11"), id: "7", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T14:01:12"), id: "8", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T15:04:45"), id: "9", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T12:01:11"), id: "10", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T14:01:12"), id: "11", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
    { date: new Date("2021-10-10T15:04:45"), id: "12", color: "magenta", items: [ {id: "1", content: "Lorem ipsum"}, {id: "2", content: "Lorem ipsum"} ] },
]

export { todos };