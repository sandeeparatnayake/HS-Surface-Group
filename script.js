window.addEventListener('scroll', function() {
 document.querySelector('nav').classList.toggle('scrolled', window.scrollY > 60);
});
var mb = document.getElementById('mbb');
var mm = document.getElementById('mmenu');
if (mb && mm) {
 mb.addEventListener('click', function() {
 mm.classList.toggle('open');
 mb.textContent = mm.classList.contains('open') ? '✕' : '☰';
 });
 mm.querySelectorAll('a').forEach(function(a) {
 a.addEventListener('click', function() {
 mm.classList.remove('open');
 mb.textContent = '☰';
 });
 });
}
var tabs = document.querySelectorAll('.app-tab');
var panes = document.querySelectorAll('.app-pane');
tabs.forEach(function(tab) {
 tab.addEventListener('click', function() {
 tabs.forEach(function(t) { t.classList.remove('active'); });
 panes.forEach(function(p) { p.classList.remove('active'); });
 tab.classList.add('active');
 var target = document.getElementById(tab.dataset.pane);
 if (target) { target.classList.add('active'); }
 });
});
var form = document.getElementById('cform');
if (form) {
 form.addEventListener('submit', async function(e) {
 e.preventDefault();
 var btn = form.querySelector('.fsub');
 var err = form.querySelector('.ferr');
 var suc = form.querySelector('.fsuc');
 var flds = form.querySelector('.form-fields');
 btn.textContent = 'Sending…';
 btn.disabled = true;
 if (err) err.style.display = 'none';
 try {
 var res = await fetch(form.action, {
 method: 'POST',
 body: new FormData(form),
 headers: { 'Accept': 'application/json' }
 });
 if (res.ok) {
 if (flds) flds.style.display = 'none';
 if (suc) suc.style.display = 'block';
 } else {
 if (err) { err.textContent = 'Something went wrong — please email us directly.'; err.style.display = 'block'; }
 btn.textContent = 'Send Enquiry';
 btn.disabled = false;
 }
 } catch (ex) {
 if (err) err.style.display = 'block';
 btn.textContent = 'Send Enquiry';
 btn.disabled = false;
 }
 });
}