const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const stuff = Object.keys(firebaseConfig).map(
  (el) => `VITE_${el.toUpperCase()}=${firebaseConfig[el]}`
);

const code = Object.keys(firebaseConfig).map(
  (el) => `
  ${el}: import.meta.env.${el.toUpperCase()},`
);
console.log(`{\n${code.join("")}\n}`);
