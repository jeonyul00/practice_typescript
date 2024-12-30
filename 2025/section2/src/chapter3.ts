// object
const user: { id: number; name: string; age?: number } = {
  id: 1,
  name: "jeonyul",
};

type userType = { id: number; name: string };

const userA: userType = {
  id: 1,
  name: "jeonyul",
};

interface userInterface {
  id: number;
  name: string;
}

const userB: userInterface = {
  id: 1,
  name: "jeonyul",
};

const confing = {
  apiKey: "1234",
} as const;

const confing2: {
  readonly apiKey: string;
} = {
  apiKey: "1234",
};
