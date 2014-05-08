(function(root){
  var TTT = root.TTT = (root.TTT || {});

  TTT.setUp = function() {
    $game = $("#tgame");
    for(var i = 0; i < 3; i++) {
      var $row = $("<div class='row'></div>");
      $game.append($row);
      for(var j = 0; j < 3; j++) {
        var $cell = $("<div class='cell'></div>");
        $cell.attr('data-row', i);
        $cell.attr("data-col", j);
        $row.append($cell);
      }
    }

    this.game = new TTT.Game();
  }

  TTT.setEvents = function() {
    var currentGame = this.game;
    $('.row').on('click', '.cell', function (event) {
      var $cell = $(event.currentTarget);
      var row = parseInt($cell.attr("data-row"));
      var col = parseInt($cell.attr("data-col"));
      var sym = currentGame.player;
      $cell.addClass(sym);

      currentGame.turn([row,col]);

    });
  }


})(this)