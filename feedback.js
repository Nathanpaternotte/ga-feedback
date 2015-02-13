/**
 * Google Analytics Feedback Widget
 * Version 1.0.5 by Xavi Esteve
 * http://xaviesteve.com
 */Namespace=Namespace||{};(function(e,t){"use strict";t.gaf={css:"#gaf-button{position:fixed;bottom:0;right:50px;background:rgba(61, 194, 85, 0.8);color:#fff;padding:4px 7px;font-size:12px;border-top-left-radius:5px;border-top-right-radius:5px}#gaf-dialog{position:fixed;top:20%;left:25%;width:50%;background:rgba(255,255,255,0.9);box-shadow:0 0 25px #aaa;padding:20px}#gaf-dialog h5{text-align:center;font-size:24px;margin:0}#gaf-type{text-align:center}#gaf-type a{display:inline-block;width:24%;min-width:6em;text-align:center}#gaf-type a:hover{opacity:.7}#gaf-type a.active{font-weight:bold;text-decoration:underline}#gaf-text{text-align:center;width:100%}#gaf-submit{text-align:center;display:block;font-weight:bold;font-size:120%;padding:20px 0 10px}#gaf-submit:hover{opacity:.7}#gaf-dialog-close{position:fixed;top:19%;right:25%;padding:10px;font-size:24px;color:rgba(0,0,0,.3);line-height:1}@media only screen and (max-width:800px){#gaf-dialog{left:10%;width:80%}#gaf-dialog-close{right:10%}}",init:function(e){this.options=e;this.loadCss();this.loadHtml();this.loadButton()},loadCss:function(){e.head.innerHTML+="<style>"+this.css+"</style>"},loadHtml:function(){this.buttonHtml='<a id="gaf-button" style="" href="#">'+this.options.open+"</a>";this.dialogHtml='<div id="gaf-dialog"><h5>'+this.options.title+'</h5><a id="gaf-dialog-close" href="#">&times;</a>'+'<p id="gaf-type" data-type="'+this.options.option1+'">'+'<a class="active" href="#">'+this.options.option1+"</a>"+'<a href="#">'+this.options.option2+"</a>"+'<a href="#">'+this.options.option3+"</a>"+'<a href="#">'+this.options.option4+"</a>"+"</p>"+'<input id="gaf-text" type="text" placeholder="'+this.options.placeholder+'" maxlength="500">'+'<a id="gaf-submit" href="#">'+this.options.send+"</a>"},loadButton:function(){e.body.innerHTML+=this.buttonHtml;e.getElementById("gaf-button").addEventListener("click",function(e){t.gaf.loadDialog();e.preventDefault()},!1)},loadDialog:function(){e.getElementById("gaf-button").removeEventListener("click");e.body.removeChild(e.getElementById("gaf-button"));e.body.innerHTML+=this.dialogHtml;e.getElementById("gaf-text").focus();e.getElementById("gaf-dialog-close").addEventListener("click",function(e){t.gaf.closeDialog();e.preventDefault()},!1);e.getElementById("gaf-type").addEventListener("click",function(e){t.gaf.changeType(e);e.preventDefault()},!1);e.getElementById("gaf-submit").addEventListener("click",function(e){t.gaf.sendFeedback();e.preventDefault()},!1)},closeDialog:function(){e.getElementById("gaf-dialog-close").removeEventListener("click");e.getElementById("gaf-submit").removeEventListener("click");e.getElementById("gaf-type").removeEventListener("click");e.body.removeChild(e.getElementById("gaf-dialog"));this.loadButton()},changeType:function(t){var n=document.querySelectorAll("#gaf-type a");for(var r=0;r<n.length;r++)n[r].className="";if(t.target.tagName=="A"){e.getElementById("gaf-type").dataset.type=t.target.innerHTML;t.target.className="active"}e.getElementById("gaf-text").focus()},sendFeedback:function(){if(e.getElementById("gaf-text").value.length<1){document.getElementById("gaf-text").style.border="2px solid #c00";e.getElementById("gaf-text").focus();return!1}ga("send",{hitType:"event",eventCategory:"Feedback",eventAction:e.getElementById("gaf-type").dataset.type,eventLabel:e.getElementById("gaf-text").value});alert(this.options.thankyou);this.closeDialog()}}})(document,Namespace);