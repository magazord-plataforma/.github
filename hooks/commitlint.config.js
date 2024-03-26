module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: /^(MAG-\d+\s-\s)?(\w*)(?:\((.*)\))?!?: (.*)$/,
      headerCorrespondence: ["issue", "type", "scope", "subject"],
    },
  },
  plugins: [
    {
      rules: {
        "header-match-zord-pattern": (parsed) => {
          const { type, scope, subject } = parsed;
          if (type === null && scope === null && subject === null) {
            return [
              false,
              `header must be in format 'type(scope): subject' or 'issue - type(scope): subject'
    
    Examples:

        feat: allow provided config object to extend other configs

        feat(api): send an email to the customer when a product is shipped

        MAG-1245 - feat: ajuste hint exibe derivação no hover

        MAG-1245 - feat(docs): correct spelling of CHANGELOG
              
              `,
            ];
          }
          return [true, ""];
        },
      },
    },
  ],
  rules: {
    "header-match-zord-pattern": [2, "always"],
  },
};
