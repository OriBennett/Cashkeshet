import { Game, Question, QuestionType } from "../src/game";

describe("game object", () => {

  it("should init", () => {
    const game = new Game();
    game.initGame();

    expect(game.players.length).toBe(0);
  });

  it("should add players", () => {
    const game = new Game();
    game.initGame();
    var player1 = game.addPlayer("Alice");
    var player2 = game.addPlayer("Bob");
    var player3 = game.addPlayer("Joe");
    var player4 = game.addPlayer("Moe");

    expect(game.players.length).toBe(4);
    expect(player4.index).toBe(3);
  });

  it("should ask player for image on first turn", () => {
    const game = new Game();
    game.initGame();
    var player1 = game.addPlayer("Alice");
    var player2 = game.addPlayer("Bob");
    var player3 = game.addPlayer("Joe");
    var player4 = game.addPlayer("Moe");

    var firstQuestion = game.getFirstQuestion();
    expect(firstQuestion).toMatchObject({type : QuestionType.draw, description : "initial value"});
    game.submitAnswer({playerIndex : player1.index, type : QuestionType.draw, description : "initial value", imageData:"grrrr"});//TODO "blob image"
    game.submitAnswer({playerIndex : player2.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player3.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player4.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    
    
    var result2 = game.getNextQuestion(player2.index);
    expect(result2).toMatchObject({type : QuestionType.guess, imageData:"grrrr"});
  });

  it("should ask player for image on first turn", () => {
    const game = new Game();
    game.initGame();
    var player1 = game.addPlayer("Alice");
    var player2 = game.addPlayer("Bob");
    var player3 = game.addPlayer("Joe");
    var player4 = game.addPlayer("Moe");

    var firstQuestion = game.getFirstQuestion();
    expect(firstQuestion).toMatchObject({type : QuestionType.draw, description : "initial value"});
    game.submitAnswer({playerIndex : player1.index, type : QuestionType.draw, description : "initial value", imageData:"grrrr"});//TODO "blob image"
    game.submitAnswer({playerIndex : player2.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player3.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player4.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
  
    var result2 = game.getNextQuestion(player2.index);
    expect(result2).toMatchObject({type : QuestionType.guess, imageData:"grrrr"});
    game.submitAnswer({playerIndex : player2.index, type : QuestionType.guess, description : "it is a grr", imageData:"grrrr" });//TODO "blob image"
    game.submitAnswer({playerIndex : player1.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player3.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player4.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"

    var result3 = game.getNextQuestion(player3.index);
    expect(result3).toMatchObject({type : QuestionType.draw, description : "it is a grr"});
    game.submitAnswer({playerIndex : player3.index, type : QuestionType.draw, description : "it is a grr", imageData:"grrrr2" });//TODO "blob image"
    game.submitAnswer({playerIndex : player1.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player2.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player4.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"

    var result4 = game.getNextQuestion(player4.index);
    expect(result4).toMatchObject({type : QuestionType.guess, imageData:"grrrr2"});
    game.submitAnswer({playerIndex : player4.index, type : QuestionType.guess, description : "it is a grr2", imageData:"grrrr2" });//TODO "blob image"
    game.submitAnswer({playerIndex : player1.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player2.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"
    game.submitAnswer({playerIndex : player3.index, type : QuestionType.draw, description : "-", imageData:"-"});//TODO "blob image"

    var result5 = game.getNextQuestion(player1.index);
    expect(result5).toMatchObject({type : QuestionType.draw, description : "it is a grr2"});

    var gameResult = game.getGameResult();
    expect(gameResult.length).toBe(4);
    expect(gameResult[0].answers.length).toBe(4);
    expect(gameResult[1].answers.length).toBe(4);
    expect(gameResult[2].answers.length).toBe(4);
    expect(gameResult[3].answers.length).toBe(4);

  });

});
