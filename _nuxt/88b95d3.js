(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{247:function(e,t,n){"use strict";(function(e){var o=n(2);n(29);t.a={mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(t.$route.query.code),"https://cors-anywhere.herokuapp.com/",n.next=4,t.$axios.$post("https://cors-anywhere.herokuapp.com/https://github.com/login/oauth/access_token",{code:t.$route.query.code,client_id:e.env.clientId,client_secret:e.env.clientSecret},{headers:{Accept:"application/json","Content-Type":"application/json"}});case 4:return o=n.sent,t.$store.commit("auth/setAccessToken",o.access_token),console.log("TOKEN: ",t.$store.state.auth.accessToken),e.env.TOKEN=t.$store.state.auth.accessToken,console.log(o),t.$router.push("/"),n.abrupt("return",o);case 11:case"end":return n.stop()}}),n)})))()}}}).call(this,n(63))},262:function(e,t,n){"use strict";n.r(t);var o=n(247).a,c=n(23),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("p",[e._v(" ...logging in...  ")])}),[],!1,null,null,null);t.default=component.exports}}]);