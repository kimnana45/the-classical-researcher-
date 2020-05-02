import jQuery from "jquery";

const $ = jQuery.noConflict();
const url = "http://dummy.restapiexample.com/api/v1/employees";

$("#clickMe").on("click", function () {
  $.ajax({
    method: "GET",
    url: url,
    dataType: "JSON",
  })
    .done(function (data) {
      $("#data").append(data);
    })
    .fail(function () {
      alert("no good");
    });
});
