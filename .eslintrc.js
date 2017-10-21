module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "rules": {
    "import/no-extraneous-dependencies": [2, { devDependencies: true }],
    "max-len": [2, 120, 2],
    "no-plusplus": [0],
    "import/prefer-default-export": [0],
    "no-unused-expressions": [1],
    "class-methods-use-this": [1],
  },
};
