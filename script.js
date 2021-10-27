function result() {

      var students = {

            JAY: {
                  math: "89",
                  physics: "88",
                  chemistry: "67",
                  english: "64"
            },
            GAURI: {
                  math: "88",
                  physics: "98",
                  chemistry: "90",
                  english: "64"
            },
            VEDANT: {
                  math: "65",
                  physics: "78",
                  chemistry: "87",
                  english: "65"
            },
            SAARA: {
                  math: "82",
                  physics: "68",
                  chemistry: "77",
                  english: "69"
            },
            AMEYA: {
                  math: "75",
                  physics: "89",
                  chemistry: "92",
                  english: "64"
            },
            ADITYA: {
                  math: "86",
                  physics: "98",
                  chemistry: "67",
                  english: "65"
            }

      }


      var studentname = document.getElementById('studentname').value;
      var input = studentname.toUpperCase();
      var definition = students[input];
      var output = document.getElementById("output");

      if (definition == undefined) {
            output.innerHTML = '<hr> There is no information about this student <hr>';
      } else {
            output.innerHTML = '<hr>Math score is 88 <hr> Physics score is 91 <hr> Chemistry score is 91 <hr> English score is 77 <hr>';

      };
};