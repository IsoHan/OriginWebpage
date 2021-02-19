//Feedback
function heySubscribe() {
        let feedback = prompt("Give us some feedback and eneter our raffle to win a £100 gift voucher!");
    
        let age = prompt("How old are you? (You must be 18+ to eneter the raffle)");

        if (age < 18) {
          let h1 = document.querySelector("#alert-response");
          h1.innerHTML =
            "💔 Sorry! " +
           
            "You have to be 18+ to enter this raffle!";
        } else {
          let h1 = document.querySelector("h1");
          h1.innerHTML =
            "💃🏽 Welcome! You can participate in our raffle";
        }
        alert("Scroll to the bottom of the page!");
      }

      let subscribeButton = document.querySelector("#feedback-btn");

      subscribeButton.addEventListener("click", heySubscribe);
//DATE TIME
      let now = new Date();

      let hours = now.getHours();
      if (hours < 10) {
        hours = `0${hours}`;
      }
      let minutes = now.getMinutes();
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[now.getDay()];

      let today = document.querySelector("#date-time");
      today.innerHTML = `${day} ${hours}:${minutes}`;