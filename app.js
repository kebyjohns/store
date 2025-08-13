// --- Data (replace with CMS/API later) ---
const projects = [
  {id:1,cat:'photo',title:'Golden Hour Portraits',img:'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=1200&auto=format&fit=crop'},
  {id:2,cat:'video',title:'Cafe Promo Reel',img:'https://images.unsplash.com/photo-1526178611653-1b1f7c9d1a0e?q=80&w=1200&auto=format&fit=crop'},
  {id:3,cat:'web',title:'Startup Landing Page',img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'},
  {id:4,cat:'graphic',title:'Brand Identity Kit',img:'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop'},
  {id:5,cat:'photo',title:'Wedding Highlights',img:'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop'},
  {id:6,cat:'video',title:'Event Recap',img:'https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1200&auto=format&fit=crop'},
  {id:7,cat:'web',title:'E‑commerce UI',img:'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=1200&auto=format&fit=crop'},
  {id:8,cat:'graphic',title:'Poster Series',img:'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop'},
  {id:9,cat:'photo',title:'Real‑Estate Shoot',img:'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1200&auto=format&fit=crop'}
];

const testimonials = [
  {q:'They nailed our brand story and visuals. Sales went up within a month.',a:'— Maya, DTC Founder'},
  {q:'Professional, fast, and the footage was stunning.',a:'— Chris, Event Planner'},
  {q:'Our website is faster and easier to edit than ever.',a:'— Devon, Studio Owner'}
];

// 20 demo products (includes Haitian items)
const products = [
  {id:'p1', name:'Haitian Flag Mug', price:15.00, img:'https://images.unsplash.com/photo-1566787601742-4cfd3f24d9d9?q=80&w=1200&auto=format&fit=crop'},
  {id:'p2', name:'Haitian Flag Car Sticker', price:6.00, img:'https://images.unsplash.com/photo-1581351123004-757df051db8f?q=80&w=1200&auto=format&fit=crop'},
  {id:'p3', name:'Haitian Flag Key Chain', price:7.50, img:'https://images.unsplash.com/photo-1595475719380-6c0d7f2f7d3b?q=80&w=1200&auto=format&fit=crop'},
  {id:'p4', name:'Haiti Pride T‑Shirt', price:22.00, img:'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'},
  {id:'p5', name:'Haiti Flag Hoodie', price:45.00, img:'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=1200&auto=format&fit=crop'},
  {id:'p6', name:'Haiti Crest Hat', price:18.00, img:'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop'},
  {id:'p7', name:'Haiti Phone Case', price:19.00, img:'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1200&auto=format&fit=crop'},
  {id:'p8', name:'Haiti Tote Bag', price:16.00, img:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1200&auto=format&fit=crop'},
  {id:'p9', name:'Haiti Water Bottle', price:14.00, img:'https://images.unsplash.com/photo-1526401485004-2fda9f4f735d?q=80&w=1200&auto=format&fit=crop'},
  {id:'p10', name:'Haiti Mouse Pad', price:10.00, img:'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop'},
  {id:'p11', name:'Haiti Notebook', price:12.00, img:'https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=1200&auto=format&fit=crop'},
  {id:'p12', name:'Haiti Enamel Pin', price:9.00, img:'https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop'},
  {id:'p13', name:'Haiti Lanyard', price:8.00, img:'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1200&auto=format&fit=crop'},
  {id:'p14', name:'Haiti Magnet', price:5.00, img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop'},
  {id:'p15', name:'Canvas Print 24×36', price:89.00, img:'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop'},
  {id:'p16', name:'Poster 18×24', price:29.00, img:'https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1200&auto=format&fit=crop'},
  {id:'p17', name:'Postcard Set (10)', price:9.50, img:'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'},
  {id:'p18', name:'Preset Pack: Island Vibes', price:25.00, img:'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop'},
  {id:'p19', name:'Template Pack: Caribbean Social', price:34.00, img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'},
  {id:'p20', name:'Desktop Wallpaper Pack', price:6.50, img:'https://images.unsplash.com/photo-1503264116251-35a269479413?q=80&w=1200&auto=format&fit=crop'}
];

const team = [
  {name:'KB',role:'Creative Director'},
  {name:'Alana',role:'Photographer'},
  {name:'Marco',role:'Videographer'}
];

const posts = [
  {title:'What to Wear for Portraits',img:'https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop'},
  {title:'Web Design Pricing Explained',img:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'},
  {title:'How to Choose a Videographer',img:'https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=1200&auto=format&fit=crop'}
];

// --- Helpers: safe DOM selects ---
const $ = (sel) => document.querySelector(sel);
const byId = (id) => document.getElementById(id);

// --- Renderers (guarded by element existence) ---
const grid = byId('portfolioGrid');
const quotes = byId('quotes');
const storeGrid = byId('storeGrid');
const teamWrap = byId('team');
const blogGrid = byId('blogGrid');

function renderProjects(list){
  if(!grid) return;
  grid.innerHTML = list.map(p => `
    <figure class="tile" data-cat="${p.cat}">
      <img src="${p.img}" alt="${p.title}">
      <figcaption class="cap"><span>${p.title}</span><span class="pill">${p.cat}</span></figcaption>
    </figure>
  `).join('');
}

function renderTestimonials(){
  if(!quotes) return;
  quotes.innerHTML = testimonials.map(t => `
    <blockquote class="quote">“${t.q}”<br><br><strong>${t.a}</strong></blockquote>
  `).join('');
}

function renderStore(){
  if(!storeGrid) return;
  storeGrid.innerHTML = products.map(p => `
    <article class="prod">
      <img alt="${p.name}" src="${p.img}">
      <div class="meta">
        <strong>${p.name}</strong>
        <small class="price">$${p.price.toFixed(2)}</small>
        <button class="btn" data-add="${p.id}">Add to Cart</button>
      </div>
    </article>
  `).join('');
}

function renderTeam(){
  if(!teamWrap) return;
  teamWrap.innerHTML = team.map(m => `
    <div class="member">
      <div class="avatar" aria-hidden="true"></div>
      <strong>${m.name}</strong>
      <div class="sub">${m.role}</div>
    </div>
  `).join('');
}

function renderBlog(){
  if(!blogGrid) return;
  blogGrid.innerHTML = posts.map(p => `
    <article class="post">
      <img alt="${p.title}" src="${p.img}">
      <div class="meta">
        <strong>${p.title}</strong>
        <p class="sub">Read more →</p>
      </div>
    </article>
  `).join('');
}

renderProjects(projects);
renderTestimonials();
renderStore();
renderTeam();
renderBlog();

// --- Portfolio filters (home / photography page) ---
const filterBar = document.querySelector('.filters');
if(filterBar){
  filterBar.addEventListener('click', (e)=>{
    const btn = e.target.closest('button');
    if(!btn) return;
    [...filterBar.children].forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    if(cat==='all'){ renderProjects(projects); return; }
    renderProjects(projects.filter(p=>p.cat===cat));
  });
}

// --- Booking modal (only where present) ---
const bookModal = byId('bookModal');
const openBook = byId('openBook');
const closeBook = byId('closeBook');
if(bookModal && openBook && closeBook){
  openBook.addEventListener('click', ()=> bookModal.showModal());
  closeBook.addEventListener('click', ()=> bookModal.close());
  document.querySelectorAll('[data-book]').forEach(b=> b.addEventListener('click', ()=> bookModal.showModal()));
}

// --- Simple cart (store page only) ---
const cart = [];
const cartModal = byId('cartModal');
const openCart = byId('openCart');
const closeCart = byId('closeCart');
const cartItems = byId('cartItems');
const cartTotal = byId('cartTotal');
const cartCount = byId('cartCount');
const checkoutBtn = byId('checkoutBtn');

function updateCart(){
  if(!cartItems || !cartTotal || !cartCount) return;
  if(cart.length===0){cartItems.textContent='Your cart is empty.'; cartTotal.textContent='0.00'; if(cartCount) cartCount.textContent='0'; return;}
  cartItems.innerHTML = cart.map(item=>`<div style="display:flex;justify-content:space-between;margin:6px 0">
    <span>${item.name}</span> <span>$${item.price.toFixed(2)}</span>
  </div>`).join('');
  const total = cart.reduce((s,i)=>s+i.price,0);
  cartTotal.textContent = total.toFixed(2);
  if(cartCount) cartCount.textContent = cart.length;
}

if(storeGrid){
  storeGrid.addEventListener('click', (e)=>{
    const btn = e.target.closest('[data-add]');
    if(!btn) return;
    const id = btn.dataset.add;
    const prod = products.find(p=>p.id===id);
    cart.push(prod);
    updateCart();
    if(cartModal) cartModal.showModal();
  });
}
if(openCart && cartModal){ openCart.addEventListener('click', ()=> cartModal.showModal()); }
if(closeCart && cartModal){ closeCart.addEventListener('click', ()=> cartModal.close()); }
if(checkoutBtn){
  checkoutBtn.addEventListener('click', ()=>{
    if(cart.length===0){ alert('Your cart is empty.'); return; }
    const wrap = byId('paypalWrap');
    if(wrap) wrap.style.display = 'block';
    const container = byId('paypal-button-container');
    if(container) container.innerHTML = '';
    if(!window.paypal){ alert('PayPal SDK not loaded. Replace YOUR_PAYPAL_CLIENT_ID in store.html.'); return; }
    const total = cart.reduce((s,i)=>s+i.price,0);
    paypal.Buttons({
      style: { layout: 'vertical' },
      createOrder: (data, actions) => actions.order.create({ purchase_units: [{ amount: { value: total.toFixed(2) } }] }),
      onApprove: async (data, actions) => {
        try {
          const details = await actions.order.capture();
          alert('Payment completed! Order ID: ' + details.id);
          cart.length = 0; updateCart();
          if(wrap) wrap.style.display = 'none';
        } catch (err){ console.error(err); alert('There was an issue capturing the payment.'); }
      },
      onError: (err) => { console.error(err); alert('PayPal error. Please try again.'); }
    }).render('#paypal-button-container');
  });
}

// --- Contact form (only on home) ---
const form = byId('contactForm');
const note = byId('formNote');
if(form){
  form.addEventListener('submit', async (e)=>{
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if(!data.name || !data.email || !data.service){
      if(note){ note.textContent = 'Please fill required fields.'; note.style.color = 'var(--danger)'; }
      return;
    }
    if(note){ note.textContent = 'Sending…'; note.style.color = 'var(--sub)'; }
    try{
      const res = await fetch(form.action, { method: 'POST', headers: { 'Accept': 'application/json' }, body: new FormData(form) });
      if(res.ok){ if(note){ note.textContent = 'Thanks! Your message was sent.'; note.style.color = 'var(--brand-2)'; } form.reset(); }
      else {
        const err = await res.json().catch(()=>({}));
        if(note){ note.textContent = (err && err.errors) ? err.errors.map(e=>e.message).join(', ') : 'Something went wrong. Please email kebymage@gmail.com.'; note.style.color = 'var(--danger)'; }
      }
    }catch(err){ if(note){ note.textContent = 'Network error. Please email kebymage@gmail.com.'; note.style.color = 'var(--danger)'; } }
  });
}

// Footer year
const year = document.getElementById('year');
if(year){ year.textContent = new Date().getFullYear(); }

// Deep-link filter from service links (home only)
document.querySelectorAll('[data-filter]')?.forEach(a=>{
  a.addEventListener('click', ()=>{
    const cat = a.getAttribute('data-filter');
    setTimeout(()=>{ const btn = document.querySelector(`.filters [data-cat="${cat}"]`); if(btn){ btn.click(); } }, 0);
  });
});
