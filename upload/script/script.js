document.addEventListener("DOMContentLoaded", function() {
  console.log("DOM content loaded");

  // Navigasi utama
  const mainNavigationOnPublic = document.createElement("header");
  mainNavigationOnPublic.style = "position: fixed; width: 100%; height: 8vh; background-color: rgba(255, 255, 255, 0.7); display: flex; align-items: center; justify-content: space-between; backdrop-filter: blur(8px); box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); z-index: 50;";
  mainNavigationOnPublic.innerHTML = `
    <img src="./script/logo.png" alt="Kreatif Company Logo" style="width: auto; height: 100%; margin-left: 10px;" />
    <i class="fi fi-br-grid" style="font-size: 3rem; margin-top: 1vh; margin-right: 10px;"></i>
  `;

  // Navigasi intro
  const introNavigationOnPublic = document.createElement("nav");
  introNavigationOnPublic.style = "order: 1;";
  introNavigationOnPublic.innerHTML = `
    <h1>News</h1>
    <span class="icons">
      <i class="fi fi-ss-heart" id="likeButton"></i>
      <i class="fi fi-ss-share" id="shareButton"></i>
      <i class="fi fi-rs-circle-ellipsis-vertical" id="moreOptionButton"></i>
    </span>
  `;

  // Load to Web
  const mainIntroArticle = document.getElementById("articleIntro");
  mainIntroArticle.insertBefore(introNavigationOnPublic, mainIntroArticle.firstChild);
  document.body.insertBefore(mainNavigationOnPublic, document.body.firstChild);

  // Sistem sumber dari image
  let mainArticle = document.getElementById('mainArticle');
  if (!mainArticle) return;
  mainArticle.querySelectorAll("img").forEach(img => {
    const addressImages = document.createElement("address");
    const parsedUrl = new URL(img.src);
    const domain = parsedUrl.hostname;
    addressImages.textContent = "Sumber: " + domain;
    img.insertAdjacentElement('afterend', addressImages);
  });

  // Button Option Intro
  let likeButtonIntroOn = document.getElementById("likeButton");
  let shareButtonIntroOn = document.getElementById("shareButton");
  let moreOptionButtonIntroOn = document.getElementById("moreOptionButton");

  // Like System
  if (likeButtonIntroOn) {
    likeButtonIntroOn.addEventListener("click", function() {
      if (likeButtonIntroOn.style.color === "white") {
        likeButtonIntroOn.style.color = "red";
      } else {
        likeButtonIntroOn.style.color = "white";
      }
    });
  } else {
    sistem.message.log("Terjadi Kesalahan");
  }

  // Share System (hanya jika diperlukan)
  if (shareButtonIntroOn) {
    shareButtonIntroOn.addEventListener("click", function() {
      console.log("Share button clicked");
      if (navigator.share) {
        var shareUrl = window.location.href;
        navigator.share({
          title: document.title,
          text: "Check out this article!",
          url: shareUrl
        })
        .catch((error) => sistem.message.log('Gagal berbagi', error));
      } else {
        sistem.message.log('Browser tidak mendukung fitur berbagi');
      }
    });
  }
});