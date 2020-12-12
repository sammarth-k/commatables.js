function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function toggle() {
  button = document.getElementById("toggle");
  if (button.className === "fas fa-sun") {
    button.className = "fas fa-moon";
    document.body.style.backgroundColor = "#323330";
    document.body.style.color = "#f7f7f7";
  } else {
    button.className = "fas fa-sun";
    document.body.style.backgroundColor = "#f7f7f7";
    document.body.style.color = "#323330";
  }
}
example();
var interval = setInterval(example, 100);
function example() {
  var sample = document.getElementById("demotext").value;
  document.getElementById("demoshow").innerHTML = sample;
  examples();
}

function examples() {
  tables = document.getElementsByClassName("demo1");
  for (let i = 0; i < tables.length; i++) {
    /*without header*/ var element = tables[i];
    var contents = element.innerHTML.trim().match(/[^\r\n]+/g);
    if (element.className.includes("noheader")) {
      var table = `<div class="ct-scroll"><table><tbody>`;
      for (let index = 0; index < contents.length; index++) {
        table += `<tr>`;
        var row = contents[index].trim().split(/[\,\;\|]/);
        for (let index = 0; index < row.length; index++) {
          var col = row[index];
          table += `<td>` + col.trim() + `</td>`;
        }
        table += `</tr>`;
      }
      table += `</tbody></table></div>`;
      tables[i].innerHTML = table;
    } else if (element.className.includes("csv2tab")) {
      var file = element.innerHTML.trim();
      csv2tab(file, element);
    } else {
      /*With header*/ var table = `<div class="ct-scroll"><table><thead><tr>`;
      var header = contents[0].split(/[\,\;\|]/);
      for (let index = 0; index < header.length; index++) {
        var col = header[index];
        table += `<th>` + col.trim() + `</th>`;
      }
      table += `</tr></thead><tbody>`;
      for (let index = 1; index < contents.length; index++) {
        var row = contents[index].trim().split(/[\,\;\|]/);
        for (let index = 0; index < row.length; index++) {
          col = row[index];
          table += `<td>` + col.trim() + `</td>`;
        }
        table += `</tr>`;
      }
      table += `</tbody></table></div>`;
      tables[i].innerHTML = table;
    }
    console.log(table);
  }
}
function example2() {
  document.getElementById("demotext2des").innerHTML = "";
  var sample = document.getElementById("demotext2").value;
  if (sample == "") {
    document.getElementById("demotext2des").innerHTML = "no URL entered";
  } else if (sample.includes("http")) {
    if (sample.includes(".csv")) {
      csv2tab(sample, document.getElementById("demoshow2"));
    } else {
      document.getElementById("demotext2des").innerHTML =
        "please use a valid file extension (.csv/.txt)";
    }
  } else {
    document.getElementById("demotext2des").innerHTML =
      "please enter a valid URL with http/https";
  }

  function csv2tab(filename, object) {
    $.ajax({ url: filename, dataType: `text` }).done(successFunction);
    function successFunction(data) {
      var contents = data.trim();
      contents = contents.trim().match(/[^\r\n]+/g);
      var table = `<div class="ct-scroll"><table><thead><tr>`;
      var header = contents[0].trim().split(/[\,\;\|]/);
      for (let index = 0; index < header.length; index++) {
        var col = header[index];
        table += `<th>` + col.trim() + `</th>`;
      }
      table += `</tr></thead><tbody>`;
      for (let index = 1; index < contents.length; index++) {
        var row = contents[index].trim().split(/[\,\;\|]/);

        table += `<tr>`;
        for (let index = 0; index < row.length; index++) {
          col = row[index];
          table += `<td>` + col.trim() + `</td>`;
        }
        table += `</tr>`;
      }
      table += `</tbody></table></div>`;
      object.innerHTML = table;
    }
  }
}
function change(type) {
  var currcolor = document
    .getElementById("demoshow")
    .className.trim()
    .split(" ");
  currcolor = currcolor[currcolor.length - 1];

  if (type == "striped") {
    if (document.getElementById("demoshow").className.includes("striped")) {
      var x = document
        .getElementById("demoshow")
        .className.replace("striped ", "");
      document.getElementById("demoshow").className = x;
      document.getElementById("stripes").innerHTML = "Add Stripes";
    } else {
      var x = "striped " + document.getElementById("demoshow").className;
      document.getElementById("demoshow").className = x;
      document.getElementById("stripes").innerHTML = "Remove Stripes";
    }
  } else if (type == "bordered") {
    if (document.getElementById("demoshow").className.includes("bordered")) {
      var x = document
        .getElementById("demoshow")
        .className.replace("bordered ", "");
      document.getElementById("border").innerHTML = "Add Borders";
      document.getElementById("demoshow").className = x;
    } else {
      var x = "bordered " + document.getElementById("demoshow").className;
      document.getElementById("demoshow").className = x;
      document.getElementById("border").innerHTML = "Remove Borders";
    }
  } else if (type == "columns") {
    if (document.getElementById("demoshow").className.includes("columns")) {
      var x = document
        .getElementById("demoshow")
        .className.replace("columns ", "");
      document.getElementById("columns").innerHTML = "Add Columns";
      document.getElementById("demoshow").className = x;
    } else {
      var x = "columns " + document.getElementById("demoshow").className;
      document.getElementById("demoshow").className = x;
      document.getElementById("columns").innerHTML = "Remove Columns";
    }
  } else {
    if (document.getElementById("demoshow").className.includes("noheader")) {
      var x = document
        .getElementById("demoshow")
        .className.replace("noheader ", "");
      document.getElementById("demoshow").className = x;
      document.getElementById("header").innerHTML = "Remove Header";
    } else {
      var x = "noheader " + document.getElementById("demoshow").className;
      document.getElementById("demoshow").className = x;
      document.getElementById("header").innerHTML = "Add Header";
    }
  }
}

function changecolor(color) {
  var colors = ["coral", "turq", "green", "apricot", "violet", "blue"];
  var element = document.getElementById("demoshow");
  cols = element.className.trim().split(" ");
  if (colors.includes(cols[cols.length - 1])) {
    cols.pop();
    cols.push(color);
    element.className = cols.join(" ");
  } else {
    element.className += " " + color;
  }
}

function pause() {
  clearInterval(interval);
}
function resume() {
  interval = setInterval(example, 100);
}
