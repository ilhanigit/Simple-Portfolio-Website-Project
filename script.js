function addRecommendation() {

    let recommendation = document.getElementById("new_recommendation");
 
    if (recommendation.value != null && recommendation.value.trim() != "") {
      console.log("New recommendation added");

      
      var element = document.createElement("div");
      element.setAttribute("class","recommendation");
      element.innerHTML = "\<span\>&#8220;\</span\>" + recommendation.value + "\<span\>&#8221;\</span\>";

      document.getElementById("all_recommendations").appendChild(element); 

      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById('popup').style.visibility = 'visible'
    } else {
      document.getElementById('popup').style.visibility = 'hidden'
    }
  }

document.addEventListener('DOMContentLoaded', function() {
  const recommendBtn = document.getElementById('recommend_btn');
  const popup = document.getElementById('popup');
  const popupButton = popup.querySelector('button');

  recommendBtn.addEventListener('click', function() {

      popup.style.display = 'block';
  });

  popupButton.addEventListener('click', function() {
      // Pop-up'ı gizle
      popup.style.display = 'none';
  });
});
