# Kashiful Haque | Portfolio

Built using [Gridsome](https://gridsome.org/), [Vue.js](https://vuejs.org/) & 🤎
How-to run it locally!

### 1. Install Gridsome CLI if you don't have it already

`npm install --global @gridsome/cli`

### 2. Clone the git repo & move to the directory and follow the steps.

To clone the repo: `git clone https://github.com/kashifulhaque/my-portfolio-website.git`
> If you're on Windows, make sure git is installed. If it is not installed already, you can download it [here.](https://git-scm.com/)
> If you're on Linux, you guys know it already.
> I don't know anything Mac, sorry ╯︿╰

1. `cd my-portfolio-website` to open the folder
2. `gridsome develop` to start a local dev server at `http://localhost:8080`.
3. Happy coding 🎉

### 3. Deploy to Firebase (Hosting only)

1. Visit [Firebase Console](https://console.firebase.google.com) and create a new project.
2. Now go to your project folder and run `npm install firebase-tools` in the console.
3. Run `firebase login` to login with the same account you used to create a project in step. 1
4. After login, run `firebase init` to initialize the repo with your Firebase keys.
> Make sure to type in `dist` when `firebase-cli` asks for `public` directory.
5. After the initialization is complete, run `gridsome build` to generate a production package of your web app.
6. Run `firebase deploy --only hosting` to deploy your web app to Firebase.

Visit my website: [ifkash.xyz](https://www.ifkash.xyz)