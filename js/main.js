$(document).ready(function() {

  var cols = 30;
  var rows = 15;

  for (var row = 0; row < rows; row++) {
    $('#myTable > tbody:last').append('<tr id="row_' + row + '"></tr>');
    for (var col = 0; col < cols; col++) {
      var rand = Math.floor(Math.random() * 4) + 1;
      $('#row_' + row).append('<td id="row_' + row + '_col_' + col + '"></td>');
      if ((rand === 1) && (row != 0)) {
        $('#row_' + row + '_col_' + col).addClass('top');
      }
      if ((rand === 2) && (col != (cols-1))) {
        $('#row_' + row + '_col_' + col).addClass('right');
      }
      if ((rand === 3) && (row != (rows-1))){
        $('#row_' + row + '_col_' + col).addClass('bottom');
      }
      if ((rand === 4) && (col != 0)) {
        $('#row_' + row + '_col_' + col).addClass('left');
      }
    }

    $('#row_0_col_0').html('&#x25BC').addClass('top');
    $('#row_' + (rows - 1) + '_col_' + (cols - 1)).html('&#x25BC').addClass('bottom');
  }

});
