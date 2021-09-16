$(function () {
  // https://api.covid19api.com/summary
  $.ajax({
    url: "https://api.covid19api.com/summary",
    type: "GET",
    datatype: "JSON",
    success: function (data) {
      var glob = data.Global;
      var html = "";
      html +=
        "<tr>" +
        "<td>" +
        glob.NewConfirmed +
        "</td>" +
        "<td>" +
        glob.NewDeaths +
        "</td>" +
        "<td>" +
        glob.NewRecovered +
        "</td>" +
        "<td>" +
        glob.TotalConfirmed +
        "</td>" +
        "<td>" +
        glob.TotalDeaths +
        "</td>" +
        "</tr>";
      $("#showdataglobal").html(html);
    },
  });

  $.ajax({
    url: "https://api.covid19api.com/summary",
    type: "GET",
    datatype: "JSON",
    success: function (data) {
      var countrie = data.Countries;
      var html = "";
      for (let i = 0; i < countrie.length; i++) {
        var element = countrie[i];
        html +=
          "<tr>" +
          "<td>" +
          countrie[i].Country +
          "</td>" +
          "<td>" +
          countrie[i].TotalConfirmed +
          "</td>" +
          "<td>" +
          countrie[i].NewConfirmed +
          "</td>" +
          "<td>" +
          countrie[i].TotalDeaths +
          "</td>" +
          "<td>" +
          countrie[i].NewDeaths +
          "</td>" +
          "<td>" +
          countrie[i].TotalRecovered +
          "</td>" +
          "</tr>";
      }
      $("#showdatacountry").html(html);
    },
  });
  $("#searchbtn").click(function () {
    var value = $("#searchvalue").val();
    if (value.length == 0) {
      alert("Search bar is empty");
    } else {
      $.ajax({
        url: "https://api.covid19api.com/summary",
        type: "GET",
        datatype: "JSON",
        success: function (data) {
          var countrie = data.Countries;
          var html = "";
          for (let i = 0; i < countrie.length; i++) {
            if ((countrie[i].Country).toLowerCase() == value.toLowerCase()) {
              html +=
                "<tr>" +
                "<td>" +
                countrie[i].Country +
                "</td>" +
                "<td>" +
                countrie[i].TotalConfirmed +
                "</td>" +
                "<td>" +
                countrie[i].NewConfirmed +
                "</td>" +
                "<td>" +
                countrie[i].TotalDeaths +
                "</td>" +
                "<td>" +
                countrie[i].NewDeaths +
                "</td>" +
                "<td>" +
                countrie[i].TotalRecovered +
                "</td>" +
                "</tr>";
            }
          }
          $("#showdatacountry").html(html);
        },
      });
    }
  });
});
