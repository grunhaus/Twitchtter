Simple React App that allow you to create, edit and delete stream channels and list them with a GUI similar to twitter.

The app will only allow you to create new channels and delete them if your are logged in with google authenticator.

To run locally, beside installing nodejs you need to:

    Run npm install && npm run install-services && npm start
    Install OBS
        Add a scene in the bottom menu
        Add a source in the bottom menu(Screen capture)
        Go to Settings > Stream and:
            Change service to Custom
            Add rtmp://localhost/live as the Server
            Add the id of the stream channel as the Stream Key (if the URL is http://localhost:3000/streams/11 the id is "11")
            In the main APP menu press "Start Streaming"
    Go to the channel URL and play the stream

This will start a local development server at port 3000(client), 3001(api) and 8000(rtmp server)

For cypress testing(for now)
change the initial state of the isSignedIn to True and userId to "01"
