"use strict";

var tables = document.getElementsByClassName("commatable");

for (var i = 0; i < tables.length; i++) {
  var element = tables[i];
  var contents = element.innerHTML.trim().match(/[^\r\n]+/g);

  if (element.className.includes("noheader")) {
    var table = "<div class=\"ct-scroll\"><table><tbody>";

    for (var index = 0; index < contents.length; index++) {
      table += "<tr>";
      var row = contents[index].trim().split(/[\,\;\|]/);

      for (var _index = 0; _index < row.length; _index++) {
        var _col = row[_index];
        table += "<td>" + _col.trim() + "</td>";
      }

      table += "</tr>";
    }

    table += "</tbody></table></div>";
    tables[i].innerHTML = table;
  } else if (element.className.includes("csv2tab")) {
    var file = element.innerHTML.trim();
    csv2tab(file, element);
  } else {
    /*With header*/
    var _table = "<div class=\"ct-scroll\"><table><thead>";
    var header = contents[0].split(/[\,\;\|]/);

    for (var _index2 = 0; _index2 < header.length; _index2++) {
      var _col2 = header[_index2];
      _table += "<th>" + _col2.trim() + "</th>";
    }

    _table += "</thead><tbody>";

    for (var _index3 = 1; _index3 < contents.length; _index3++) {
      var _row = contents[_index3].trim().split(/[\,\;\|]/);

      for (var _index4 = 0; _index4 < _row.length; _index4++) {
        col = _row[_index4];
        _table += "<td>" + col.trim() + "</td>";
      }

      _table += "</tr>";
    }

    _table += "</tbody></table></div>";
    element.innerHTML = _table;
  }
}

function csv2tab(filename, object) {
  $.ajax({
    url: filename,
    dataType: "text"
  }).done(successFunction);

  function successFunction(data) {
    var contents = data.trim();
    contents = contents.trim().match(/[^\r\n]+/g);
    var table = "<div class=\"ct-scroll\"><table><thead><tr>";
    var header = contents[0].split(/[\,\;\|]/);

    for (var _index5 = 0; _index5 < header.length; _index5++) {
      var _col3 = header[_index5];
      table += "<th>" + _col3.trim() + "</th>";
    }

    table += "</tr></thead><tbody>";

    for (var _index6 = 1; _index6 < contents.length; _index6++) {
      var _row2 = contents[_index6].trim().split(/[\,\;\|]/);

      for (var _index7 = 0; _index7 < _row2.length; _index7++) {
        col = _row2[_index7];
        table += "<td>" + col.trim() + "</td>";
      }

      table += "</tr>";
    }

    table += "</tbody></table></div>";
    object.innerHTML = table;
  }
}