"use strict";require(["../scripts/config.js"],function(){require(["jquery"],function(i){i(function(){i("div.appLoad p").hover(function(){i(this).next().fadeIn()},function(){i(this).next().fadeOut()}),i("div.appLoad div.QRcode img._QRcode").on("mouseover",function(){i(this).css({"margin-left":"7px"}),i(this).next().show()}),i("div.appLoad div.QRcode").on("mouseleave",function(){i(this).find("img._QRcode").css({"margin-left":"100px"}),i(this).find("img._userlogin").hide()}),i("div.main-r div.option a.option-r").on("click",function(){i(this).css({color:"#f00"}),i(this).prev().prev().css({color:"#000"}),i(this).parent().parent().find("div.appLoad").show(),i(this).parent().parent().find("div.mylogin").hide()}),i("div.main-r div.option a.option-l").on("click",function(){i(this).css({color:"#f00"}),i(this).next().next().css({color:"#000"}),i(this).parent().parent().find("div.mylogin").show(),i(this).parent().parent().find("div.appLoad").hide()})})})});