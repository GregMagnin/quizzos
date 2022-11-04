import Home from "../pages/Home.js";
import Lobby from "../pages/Lobby.js";
import Level from "../pages/Levels.js";
import NbQuestion from "../pages/NbQuestions.js";
import Categories from "../pages/Categories.js";
import Questions from "../pages/Questions.js";
import Result from "../pages/Result.js";

export const routes = {
    '/': Home,
    'home': Home,
    'lobby': Lobby,
    'levels': Level,
    'nbquestion': NbQuestion,
    'categories': Categories,
    'questions': Questions,
    'result': Result,
};
