var tables = document.getElementsByClassName("commatable");
for (let i = 0; i < tables.length; i++) {
  let element = tables[i];
  let contents = element.innerHTML.trim().match(/[^\r\n]+/g);
  if (element.className.includes("noheader")) {
    let table = `<div class="ct-scroll"><table><tbody>`;
    for (let index = 0; index < contents.length; index++) {
      table += `<tr>`;
      var row = contents[index].trim().split(/[\,\;\|]/);
      for (let index = 0; index < row.length; index++) {
        let col = row[index];
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
    /*With header*/ let table = `<div class="ct-scroll"><table><thead>`;
    var header = contents[0].split(/[\,\;\|]/);
    for (let index = 0; index < header.length; index++) {
      let col = header[index];
      table += `<th>` + col.trim() + `</th>`;
    }
    table += `</thead><tbody>`;
    for (let index = 1; index < contents.length; index++) {
      let row = contents[index].trim().split(/[\,\;\|]/);
      for (let index = 0; index < row.length; index++) {
        col = row[index];
        table += `<td>` + col.trim() + `</td>`;
      }
      table += `</tr>`;
    }
    table += `</tbody></table></div>`;
    element.innerHTML = table;
  }
  
}
function csv2tab(filename, object) {
  $.ajax({ url: filename, dataType: `text` }).done(successFunction);
  function successFunction(data) {
    let contents = data.trim();
    contents = contents.trim().match(/[^\r\n]+/g);
    let table = `<div class="ct-scroll"><table><thead><tr>`;
    let header = contents[0].split(/[\,\;\|]/);
    for (let index = 0; index < header.length; index++) {
      let col = header[index];
      table += `<th>` + col.trim() + `</th>`;
    }
    table += `</tr></thead><tbody>`;
    for (let index = 1; index < contents.length; index++) {
      let row = contents[index].trim().split(/[\,\;\|]/);
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
