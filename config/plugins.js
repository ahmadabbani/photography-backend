// config/plugins.js
module.exports = ({ env }) => ({
  // ...

  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  // ...
});

//  jwt: {
//expiresIn: "7d", // Set token expiration to 7 days or more
//},
