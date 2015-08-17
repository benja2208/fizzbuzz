describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("should recognize a number not divisible by 3", function() {
    expect(game.isDivisibleByThree(1)).toEqual(false);
  });

  it("should recognize a number divisible by 3", function() {
    expect(game.isDivisibleByThree(3)).toEqual(true);
  })


  it("should recognize a number not divisible by 5", function(){
    expect(game.isDivisibleByFive(1)).toEqual(false);
  })

  it("should recognize a number divisible by 15", function(){
    expect(game.isDivisibleByFive(5)).toEqual(true);
  })

  it("should recognize a number not divisible by 15", function(){
    expect(game.isDivisibleByFifteen(1)).toEqual(false);
  })

  it("should recognize a number divisible by 15", function(){
    expect(game.isDivisibleByFifteen(15)).toEqual(true);
  })

  it("returns a number if not divisible by 3 or 5", function(){
    expect(game.FizzBuzz(1)).toEqual(1);
  })

  it("returns fizz if a number is divisible by 3", function(){
    expect(game.FizzBuzz(3)).toEqual("Fizz");
  })

  it("returns buzz if a number is divisible by 5", function(){
    expect(game.FizzBuzz(5)).toEqual("Buzz");
  })

  it("returns fizzbuzz if a number is divisible by 15", function(){
    expect(game.FizzBuzz(15)).toEqual("FizzBuzz")
  })
});
