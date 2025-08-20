// khai báo biến
const submitEmail = document.querySelector(".submit-email");
const inputEmail = document.querySelector(".input-email");
const detailInfo = document.querySelector(".detail-info");
const form = document.querySelector(".form");
const view = document.querySelectorAll(".view");
const informationContentBox = document.querySelectorAll(".content-box");
const descriptionContent = document.querySelectorAll(".description-content");
const removeHidden = function (removeHiddenClass) {
  return function () {
    removeHiddenClass.classList.remove("hidden");
  };
};
const addHidden = function (addHiddenClass) {
  return function () {
    addHiddenClass.classList.add("hidden");
  };
};
// check email
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

// chống reload, tải lại trang
submitEmail.addEventListener("click", function (e) {
  e.preventDefault(); // chặn reload/trượt trang
  console.log(validateEmail(inputEmail.value.trim()));
});

submitEmail.addEventListener("click", function () {
  if (
    validateEmail(inputEmail.value).input ===
    "nhandfx29462@funix.edu.vn" /* sử dụng email này là vào đư*/
  ) {
    detailInfo.classList.remove("hidden");
    form.classList.add("hidden");
  }
});

// hiện view more khi hover
for (let i = 0; i < informationContentBox.length; i++) {
  informationContentBox[i].addEventListener(
    "mouseover",
    removeHidden(view[i])
  ); /* bỏ hidden( hiện view more) */
  informationContentBox[i].addEventListener(
    "mouseout",
    addHidden(view[i])
  ); /* thêm hidden( ẩn view more) */
}

for (let i = 0; i < view.length; i++) {
  view[i].addEventListener("click", function () {
    if (view[i].textContent === "▼ view more") {
      descriptionContent[i].classList.remove("hidden");
      view[i].textContent = "▲ view less";
    } else if (view[i].textContent === "▲ view less") {
      descriptionContent[i].classList.add("hidden");
      view[i].textContent = "▼ view more";
    }
  });
}
