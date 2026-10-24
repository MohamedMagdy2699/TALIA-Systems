(function(){
'use strict';
document.querySelectorAll('[data-year]').forEach(function(e){e.textContent=new Date().getFullYear();});
var b=document.querySelector('.burger'),m=document.getElementById('menu');
if(b&&m){
 b.addEventListener('click',function(){var o=b.getAttribute('aria-expanded')==='true';b.setAttribute('aria-expanded',String(!o));m.classList.toggle('open',!o);});
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&m.classList.contains('open')){m.classList.remove('open');b.setAttribute('aria-expanded','false');b.focus();}});
}
var f=document.getElementById('cform');
if(!f)return;
var q=new URLSearchParams(location.search).get('service'),sel=f.elements.service;
if(q&&sel&&sel.querySelector('option[value="'+q.replace(/[^a-z-]/g,'')+'"]'))sel.value=q.replace(/[^a-z-]/g,'');
function err(id,msg){var i=f.elements[id],s=document.getElementById('e-'+id);s.textContent=msg;if(msg)i.setAttribute('aria-invalid','true'),i.setAttribute('aria-describedby','e-'+id);else i.removeAttribute('aria-invalid');return !msg;}
function check(){
 var n=f.elements.name.value.trim(),e=f.elements.email.value.trim(),t=f.elements.message.value.trim();
 var a=err('name',n?'':'Enter your name.');
 var c=err('email',!e?'Enter your email address.':/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e)?'':'Enter a valid email address, such as name@example.com.');
 var d=err('message',t.length>=10?'':'Enter a message of at least 10 characters.');
 return a&&c&&d;
}
f.addEventListener('submit',function(ev){
 ev.preventDefault();
 var st=document.getElementById('fstatus');st.textContent='';
 if(!check()){var bad=f.querySelector('[aria-invalid=true]');if(bad)bad.focus();return;}
 var to=f.getAttribute('data-email');
 if(/your-domain\.example$/.test(to)){
  st.innerHTML='<p class="warn">This form is not connected yet: the site owner must replace the placeholder email address. No email was prepared.</p>';return;}
 var v=function(k){return f.elements[k].value.trim();};
 var svc=sel.options[sel.selectedIndex].text;
 var body='Name: '+v('name')+'\nEmail: '+v('email')+'\nPhone: '+(v('phone')||'-')+'\nCompany: '+(v('company')||'-')+'\nService: '+(sel.value?svc:'-')+'\n\n'+v('message');
 var url='mailto:'+to+'?subject='+encodeURIComponent('Website enquiry from '+v('name'))+'&body='+encodeURIComponent(body);
 st.innerHTML='<p class="ok">Your email app should now open with this message ready. It has <strong>not</strong> been sent: press Send in your email app. If nothing opened, <a href="'+url+'">use this link</a> or email us directly.</p>';
 window.location.href=url;
});
f.addEventListener('input',function(e){if(e.target.hasAttribute('aria-invalid'))check();});
})();
document.head.appendChild(Object.assign(document.createElement('script'),{src:'assets/js/arabic.js',defer:true}));
