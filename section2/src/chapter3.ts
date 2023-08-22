let user: { id?: number; name: string } = {
  id: 1,
  name: "jeonyul",
};

user.id;

user = {
  name: "yul",
};

// --------------------

let confing: {
  readonly apiKey: string;
} = {
  apiKey: "my api key",
};

confing.apiKey;

// x
// confing.apiKey = "do not change";
