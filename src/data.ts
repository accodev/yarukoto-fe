import { User, Note } from "./types";

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColor() {
  const colors = ["indigo", "yellow", "blue", "purple", "green", "red"];
  return colors[getRandomInt(0, colors.length - 1)];
}

function getRandomContent() {
  const contents = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    "Dolor Sit Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Consectetur Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Elit Sed Do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Eiusmod Tempor incididunt ut labore et dolore magna aliqua.",
    "Incididunt Ut Labore et dolore magna aliqua.",
    "Et Dolore Magna aliqua.",
    "Aliqua Ut Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Ad Minim Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "Quis Nostrud Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  ];
  const lines = getRandomInt(1, 10);
  return Array.from({ length: lines }, () => contents[getRandomInt(0, contents.length - 1)]).join('\n');
}

function getRandomTitle() {
  const titles = [
    "Meeting Notes",
    "Shopping List",
    "Project Ideas",
    "Daily Tasks",
    "Workout Plan",
    "Recipe",
    "Travel Itinerary",
    "Book List",
    "Movie Watchlist",
    "Random Thoughts"
  ];
  return titles[getRandomInt(0, titles.length - 1)];
}

function getRandomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateRandomNotes(count: number): Note[] {
  const notes: Note[] = [];
  for (let i = 0; i < count; i++) {
    notes.push({
      date: getRandomDate(new Date(2020, 0, 1), new Date()),
      id: `${i + 1}`,
      color: getRandomColor(),
      content: getRandomContent(),
      title: getRandomInt(0, 1) ? getRandomTitle() : undefined,
      order: i + 1
    });
  }
  return notes;
}

let user: User = {
  id: "1",
  name: "John Doe",
  email: "john.doe@gmail.com"
};

let notes: Note[] = generateRandomNotes(24);

export { user, notes };