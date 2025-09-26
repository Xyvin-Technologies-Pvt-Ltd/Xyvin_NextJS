import {gsap} from "gsap";
import jQuery from "jquery";

export function buttonAnimation () {
  if(typeof window !== "undefined") {

    (function ($) {
      "use strict";
    
      $('.tp-hover-btn').on('mouseenter', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
    
        $(this).find('.tp-btn-circle-dot').css({
          top: y,
          left: x
        });
      });
    
      $('.tp-hover-btn').on('mouseout', function (e) {
        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;
    
        $(this).find('.tp-btn-circle-dot').css({
          top: y,
          left: x
        });
      });
    
    
      var hoverBtns = gsap.utils.toArray(".tp-hover-btn-wrapper");
    
      const hoverBtnItem = gsap.utils.toArray(".tp-hover-btn-item");
      hoverBtns.forEach((btn, i) => {
        $(btn).mousemove(function (e) {
          callParallax(e);
        });
        function callParallax(e) {
          parallaxIt(e, hoverBtnItem[i], 80);
        }
    
        function parallaxIt(e, target, movement) {
          var $this = $(btn);
          var relX = e.pageX - $this.offset().left;
          var relY = e.pageY - $this.offset().top;
    
          gsap.to(target, 0.5, {
            x: ((relX - $this.width() / 2) / $this.width()) * movement,
            y: ((relY - $this.height() / 2) / $this.height()) * movement,
            ease: Power2.easeOut,
          });
        }
        $(btn).mouseleave(function (e) {
          gsap.to(hoverBtnItem[i], 0.5, {
            x: 0,
            y: 0,
            ease: Power2.easeOut,
          });
        });
      });

      if ($('.tp-btn-trigger').length > 0) {

        gsap.set(".tp-btn-bounce", { y: -150, opacity: 0 });
        const mybtn = gsap.utils.toArray(".tp-btn-bounce");
        mybtn.forEach((btn) => {
          var $this = $(btn);
          gsap.to(btn, {
            scrollTrigger: {
              trigger: $this.closest('.tp-btn-trigger'),
              start: "top center",
              markers: false
            },
            duration: 1.5,
            delay: 1,
            ease: "bounce.out",
            y: 0,
            opacity: 1,
          })
        });
    
      }
    
      if ($('.tp-btn-trigger-2').length > 0) {
    
        gsap.set(".tp-btn-bounce-2", { y: -100, opacity: 0 });
        const mybtn = gsap.utils.toArray(".tp-btn-bounce-2");
        mybtn.forEach((btn) => {
          var $this = $(btn);
          gsap.to(btn, {
            scrollTrigger: {
              trigger: $this.closest('.tp-btn-trigger-2'),
              start: "bottom bottom",
              markers: false
            },
            duration: 1,
            ease: "bounce.out",
            y: 0,
            opacity: 1,
          })
        });
    
      }
    
      if ($('.tp-btn-trigger-3').length > 0) {
    
        gsap.set(".tp-btn-bounce-3", { y: -100, opacity: 0 });
        var mybtn = gsap.utils.toArray(".tp-btn-bounce-3");
        mybtn.forEach((btn) => {
          var $this = $(btn);
          gsap.to(btn, {
            scrollTrigger: {
              trigger: $this.closest('.tp-btn-trigger-3'),
              start: "-20% 20%",
              markers: false
            },
            duration: 1,
            delay: 1.2,
            ease: "bounce.out",
            y: 0,
            opacity: 1,
          })
        });
    
      }
    
    })(jQuery);
  }
}