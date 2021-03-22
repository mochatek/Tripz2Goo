const modal = document.querySelector(".modal");
const modalContent = document.querySelector("#modalContent");
const closeBtn = document.querySelector(".close");

// Close modal on click
closeBtn.onclick = () => {
  modalContent.innerHTML = "";
  modal.style.display = "none";
};

// Show content inside modal window
function showInModal(key) {
  const keyTable = {
    kerala:
      '<iframe src="https://www.youtube.com/embed/EwDiNj_5PEg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    agra:
      '<iframe src="https://www.youtube.com/embed/UXzYKrpKWso" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    kashmir:
      '<iframe src="https://www.youtube.com/embed/J6RFmeMmBDg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  };

  const content = keyTable[key];

  modalContent.innerHTML = content;
  modal.style.display = "block";

  return false;
}

// Send mail using mail client
function sendMail(form) {
  const message = form.elements.message.value.trim();

  if (message) {
    window.open(
      `mailto:tripz2goo@gmail.com?subject=Tour%20Package%20Enquiry&body=${message}`
    );
  } else {
    alert("Sorry. You can't send empty message !");
  }

  return false;
}

// Collapsible packages
document.querySelectorAll(".collapsible").forEach((package) => {
  package.addEventListener("click", function () {
    this.classList.toggle("selected");
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(this).toggleClass("fa-times");
    $(".navbar").toggleClass("nav-toggle");
  });

  $(window).on("load scroll", function () {
    $(".fa-bars").removeClass("fa-times");
    $(".navbar").removeClass("nav-toggle");

    if ($(window).scrollTop() > 30) {
      $("header").addClass("header-active");
    } else {
      $("header").removeClass("header-active");
    }

    $("section").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 200;
      var top = $(window).scrollTop();
      if (top >= offset && top < offset + height) {
        $(".navbar ul li a").removeClass("active");
        $(".navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });
});
