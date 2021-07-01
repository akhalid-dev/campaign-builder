module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "e0cbf1056f711a6600414091a72d9d4b"),
    },
    watchIgnoreFiles: [
      ".\\version", // Folder
    ],
  },
});
