let element = document.querySelector('.header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 55) {
    element.classList.add("header_sticky");
  } else {
    element.classList.remove("header_sticky");
  }
})

let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');
window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec .offsetTop-150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top > offset && top < offset + height) {
      navLink.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      })
    }
  })
}


let anchor = document.querySelectorAll('a[href^="#"]');
console.log(anchor);
anchor.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    let href = this.getAttribute('href') .substring(1);
    const scrollTarget = document.getElementById(href);
    const topOffset = 55;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset;
    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth'
    })
  })
})


const mainSlider = new Swiper('.main-slider', {
    direction: 'vertical',
    loop: true,
    pagination: {
      el: '.slider-main-pagination',
      clickable: true
    },
  });


  const newsSlider = new Swiper('.news-slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
      // when window width is >= 10px
      10: {
        slidesPerView: 1,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
      }
    },
    pagination: {
      el: '.slider-news-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.slider-news-button-next',
      prevEl: '.slider-news-button-prev',
    },
  });

 
  Fancybox.bind("[data-fancybox]", {
    groupAttr: true
  });
  
 
  $('.items').readmore({
    speed: 75,
    collapsedHeight: 180,
    moreLink: '<a class = "more" href="#">See more</a>',
    lessLink: '<a class = "more" href="#">Close</a>',
  });

  let map;
  function InitMap () {
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 40.6686, lng: -73.8999},
      zoom: 13.5,
      mapId: '2f084b4895741534',
    })
    const marker = new google.maps.Marker({
      position: { lat: 40.6781, lng: -73.8981},
      map: map,
      title: "Monticello",
      icon: {
        url: "http://i.postimg.cc/30jd33nS/Pin.png",
        scaledSize: new google.maps.Size(100,100),
      }
    })
  }
  
  $(".contacts-form").validate ({
    rules: {
      name: {
        required: true,
        minLength: 3
      },
      email: {
        required: true,
        email: true
      },
    }
  })

  let burger = document.querySelector(".burger");
let header = document.querySelector(".header");
burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  header.classList.toggle("active");
});

