# Trivia Game
Trivia game implemented in Vue with Vue Router and Vuex. Questions are fetched from the https://opentdb.com/ api. 

## Running
After cloning the repo, run 
```
 npm install && npm run serve 
 ``` 
to start a local server with the app
## Features
- Customise questions (Difficulty/Category/Number of questions)
- Progress bar during game
- State management in Vuex (Overkill for this task. Just to practice)
- Routing with Vue Router
- Route guards to prevent illegal states

## Views
The game is split up into three views which are also the states of the game:
```
HomeView => QuestionView => ResultView (optionally back to HomeView)
```

### HomeView
```
<HomeView>
    <OptionsComponent />
    <LoadingComponent />
</HomeView>
```
HomeView will show the options to the player, wait for the player to click "go" in the OptionsComponent and then signal to Vuex (via an action) to populate the questions fetching them from the API. It will show the LoadingComponent while vuex is fetching the questions and automatically route to ``/question/0`` when ready

### QuestionView
```
<QuestionView>
    <ProgressComponent />
    <QuestionComponent>
        <AnswerComponent />
        .
        .
        .
        <AnswerComponent />
    </QuestionComponent>
</QuestionView>
```
QuestionView displays the question as well as the possible answers. When the player selects an answer an event is emitted and the selected answer is added to the Vuex store and the next question is shown to the player (by way of navigating to ``/question/n + 1``). If it is the last question the page is navigated to the ResultView. 

### ResultView
```
<ResultView>
    <ResultQuestionComponent>
        <ResultAnswerComponent />
        .
        .
        .
        <ResultAnswerComponent />
    </ResultQuestionComponent>
    .
    .
    .
    <ResultQuestionComponent>
        <ResultAnswerComponent />
        .
        .
        .
        <ResultAnswerComponent />
    </ResultQuestionComponent>
</ResultView>
```

ResultView displays how many points the player scored and a list of all the questions along with the right answer and what the player selected.

