const state = {
  lang: localStorage.getItem("zenvric-lang") || null,
  compact: localStorage.getItem("zenvric-compact") === "1",
  type: "website",
  template: localStorage.getItem("zenvric-template") || "pastel",
  qr: null,
  customBrand: "",
  customTitle: "",
  customDesc: "",
  logoUrl: null,
  history: JSON.parse(localStorage.getItem("zenvric-history") || "[]")
};

const translations = {
  en: {
    create:"Create QR",templates:"Templates",history:"History",settings:"Settings",proText:"Create polished QR designs faster.",
    eyebrow:"SMART QR CREATOR",title:"Create your QR code",subtitle:"Generate, style, download and share beautiful QR codes.",
    destination:"Choose your destination",destinationHint:"Pick what your QR code should open.",website:"Website",text:"Text",email:"Email",sms:"SMS",wifi:"Wi‑Fi",phone:"Phone",contact:"Contact",location:"Location",
    style:"QR style",styleHint:"Make it yours.",reset:"Reset",foreground:"Foreground",background:"Background",radius:"Radius",templateHint:"Background cards for your QR.",viewAll:"View all",
    livePreview:"Live preview",type:"Type",status:"Status",ready:"Ready",copy:"Copy content",download:"Download PNG",share:"Share QR code",
    templatePage:"QR background templates",templatePageHint:"Choose a visual frame, then continue creating your code.",
    historyPage:"Recent QR codes",historyHint:"Your latest local QR creations are saved on this device.",clear:"Clear history",
    settingsPage:"Settings",settingsHint:"Language, appearance and compact controls.",language:"Language",languageHint:"Choose your interface language.",
    compact:"Compact mode",compactHint:"Reduce spacing for a denser workspace.",accent:"Accent color",accentHint:"Use the ZENVRIC violet style.",
    welcome:"Choose your language",welcomeHint:"Select your preferred language before using ZENVRIC.",
    scan:"Scan to open",qrReady:"Your QR code is ready to share.",required:"Please enter the required information.",
    copied:"Content copied.",downloaded:"QR code downloaded.",shared:"Share sheet opened.",cleared:"History cleared.",selected:"Template selected.",
    mobileEdit:"Create",mobilePreview:"Preview",mobileDownload:"Download",
    sheetTitle:"QR Code Ready!",sheetSubtitle:"Your custom QR code has been generated.",sheetClose:"Nice one!",
    sheetEmptyTitle:"Information Needed",sheetEmptySubtitle:"Please fill in your destination details above to generate a QR code.",sheetFillForm:"Fill Information",
    cardTextSection:"Card Text & Photo",cardTextHint:"Customize header, title & center photo.",brandLabel:"Brand header",titleLabel:"Card title",descLabel:"Description",addPhoto:"Center Photo / Logo",selectPhoto:"Add Photo / Logo",removePhoto:"Remove Photo",
    trackLocation:"Auto-Detect My Location",locating:"Detecting GPS...",locationFound:"Location Found!",locationSuccess:"GPS location auto-filled!",geoNotSupported:"Geolocation is not supported by your browser.",geoError:"Could not retrieve GPS location.",geoPermissionDenied:"Location permission denied.",
    generateQr:"Generate & Preview QR",
    authHeader:"VIP Early Access",
    authSub:"Sign in or enter your access code to unlock VIP template posters.",
    emailLabel:"Email Address",
    passLabel:"Password / VIP Code",
    loginBtn:"Claim VIP Early Access",
    earlyAccessBtn:"LOGIN",
    redeemHeader:"Redeem Premium VIP Code",
    redeemHint:"Enter promo code (e.g. ZENVRIC2026) to unlock VIP status.",
    redeemBtn:"Redeem"
  },
  km: {
    create:"បង្កើត QR",templates:"គំរូ",history:"ប្រវត្តិ",settings:"ការកំណត់",proText:"បង្កើត QR ស្អាតៗបានលឿនជាងមុន។",
    eyebrow:"អ្នកបង្កើត QR ឆ្លាតវៃ",title:"បង្កើត QR Code របស់អ្នក",subtitle:"បង្កើត កែរចនា ទាញយក និងចែករំលែក QR Code។",
    destination:"ជ្រើសរើសគោលដៅ",destinationHint:"ជ្រើសរើសអ្វីដែល QR Code ត្រូវបើក។",website:"វេបសាយ",text:"អត្ថបទ",email:"អ៊ីមែល",sms:"SMS",wifi:"Wi‑Fi",phone:"ទូរស័ព្ទ",contact:"ទំនាក់ទំនង",location:"ទីតាំង",
    style:"រចនា QR",styleHint:"កែតាមស្ទីលរបស់អ្នក។",reset:"កំណត់ឡើងវិញ",foreground:"ពណ៌ខាងមុខ",background:"ផ្ទៃខាងក្រោយ",radius:"ជ្រុង",templateHint:"ផ្ទៃខាងក្រោយសម្រាប់ QR។",viewAll:"មើលទាំងអស់",
    livePreview:"មើលជាមុន",type:"ប្រភេទ",status:"ស្ថានភាព",ready:"រួចរាល់",copy:"ចម្លងមាតិកា",download:"ទាញយក PNG",share:"ចែករំលែក QR",
    templatePage:"គំរូផ្ទៃខាងក្រោយ QR",templatePageHint:"ជ្រើសរើសស៊ុមរចនា រួចបន្តបង្កើត QR។",
    historyPage:"QR ថ្មីៗ",historyHint:"QR ដែលអ្នកបានបង្កើតថ្មីៗ ត្រូវបានរក្សាទុកលើឧបករណ៍នេះ។",clear:"លុបប្រវត្តិ",
    settingsPage:"ការកំណត់",settingsHint:"ភាសា រូបរាង និងមុខងារ Compact។",language:"ភាសា",languageHint:"ជ្រើសរើសភាសារបស់អ្នក។",
    compact:"Compact mode",compactHint:"កាត់បន្ថយចន្លោះ ដើម្បីឲ្យផ្ទាំងការងារតូចជាងមុន។",accent:"ពណ៌សំខាន់",accentHint:"ប្រើស្ទីលពណ៌ស្វាយរបស់ ZENVRIC។",
    welcome:"ជ្រើសរើសភាសា",welcomeHint:"ជ្រើសរើសភាសាដែលអ្នកចង់ប្រើជាមួយ ZENVRIC។",
    scan:"ស្កេនដើម្បីបើក",qrReady:"QR Code របស់អ្នករួចរាល់សម្រាប់ចែករំលែក។",required:"សូមបញ្ចូលព័ត៌មានដែលត្រូវការ។",
    copied:"បានចម្លងមាតិកា។",downloaded:"បានទាញយក QR Code។",shared:"បានបើកផ្ទាំងចែករំលែក។",cleared:"បានលុបប្រវត្តិ។",selected:"បានជ្រើសរើសគំរូ។",
    mobileEdit:"បង្កើត",mobilePreview:"មើល QR",mobileDownload:"ទាញយក",
    sheetTitle:"QR Code រួចរាល់!",sheetSubtitle:"QR Code របស់អ្នកត្រូវបានបង្កើតដោយជោគជ័យ។",sheetClose:"យល់ព្រម",
    sheetEmptyTitle:"ត្រូវការបញ្ចូលព័ត៌មាន",sheetEmptySubtitle:"សូមបញ្ចូលព័ត៌មានគោលដៅខាងលើ ដើម្បីបង្កើត QR Code។",sheetFillForm:"បញ្ចូលព័ត៌មាន",
    cardTextSection:"អត្ថបទ និង រូបថត Card",cardTextHint:"កែប្រែ Header, ចំណងជើង និងរូបថតចំកណ្ដាល។",brandLabel:"ឈ្មោះ Header",titleLabel:"ចំណងជើង Card",descLabel:"ការពិពណ៌នា",addPhoto:"រូបថត / Logo ចំកណ្ដាល",selectPhoto:"បន្ថែមរូបថត / Logo",removePhoto:"លុបរូបថត",
    trackLocation:"ចាប់យកទីតាំងបច្ចុប្បន្ន (Auto-Fill)",locating:"កំពុងចាប់យក GPS...",locationFound:"រកឃើញទីតាំងហើយ!",locationSuccess:"បានបញ្ចូលទីតាំង GPS ដោយស្វ័យប្រវត្តិ!",geoNotSupported:"កម្មវិធីរុករករបស់អ្នកមិនគាំទ្រ Geolocation ទេ។",geoError:"មិនអាចទាញយកទីតាំងបានទេ។",geoPermissionDenied:"សូមអនុញ្ញាតសិទ្ធិចាប់យកទីតាំង GPS។",
    generateQr:"បង្កើត និងមើល QR ជាមុន",
    authHeader:"VIP Early Access",
    authSub:"ចូលប្រើប្រាស់ ឬ បញ្ចូលលេខកូដ VIP ដើម្បីទាញយកគំរូពិសេសៗ។",
    emailLabel:"អាសយដ្ឋានអ៊ីមែល",
    passLabel:"ពាក្យសម្ងាត់ / លេខកូដ VIP",
    loginBtn:"ទទួលយក VIP Early Access",
    earlyAccessBtn:"ចូលប្រព័ន្ធ",
    redeemHeader:"បញ្ចូលលេខកូដ Premium VIP",
    redeemHint:"បញ្ចូលលេខកូដ (ឧ. ZENVRIC2026) ដើម្បីដោះសោ VIP។",
    redeemBtn:"បញ្ចូលលេខកូដ"
  }
};

const templates = [
  {id:"scan_pay",name:"Scan To Pay Poster",desc:"Payment poster with pointing hand icon",cls:"template-scan-pay",badge:"PREMIUM"},
  {id:"food_doodle",name:"Food & Cafe Frame",desc:"Cute food icons & arrow border frame",cls:"template-food-doodle",badge:"PREMIUM"},
  {id:"bank_card",name:"Bank Payment Stand",desc:"Professional bank card & account info layout",cls:"template-bank-card",badge:"PREMIUM"},
  {id:"neo_dark",name:"Pro Dark Poster",desc:"Luxury dark theme with gold accent",cls:"template-neo-dark",badge:"PREMIUM"},
  {id:"kitty",name:"Cute Kitty",desc:"Pastel pink with cute ears & bow",cls:"template-kitty"},
  {id:"anime",name:"Anime Sparkle",desc:"Kawaii purple & anime star sparkles",cls:"template-anime"},
  {id:"spiderman",name:"Hero Spider",desc:"Spider-Man red & navy web design",cls:"template-spiderman"},
  {id:"cute",name:"Cute Boba",desc:"Kawaii mint & coral pastel look",cls:"template-cute"},
  {id:"work",name:"Executive Work",desc:"Corporate dark slate & gold style",cls:"template-work"},
  {id:"cyberpunk",name:"Cyber Neon",desc:"Neon cyan & pink cyberpunk look",cls:"template-cyberpunk"},
  {id:"night",name:"Midnight",desc:"Premium dark frame",cls:"template-night"},
  {id:"purple",name:"Violet Glow",desc:"Bold ZENVRIC violet",cls:"template-purple"},
  {id:"pastel",name:"Pastel Dream",desc:"Soft lavender glass",cls:"template-pastel"},
  {id:"minimal",name:"Clean Minimal",desc:"Minimal professional high contrast",cls:"template-minimal"},
  {id:"sunset",name:"Sunset",desc:"Warm creative gradient",cls:"template-sunset"},
  {id:"glass",name:"Aqua Glass",desc:"Frosted aqua look",cls:"template-glass"}
];

const formArea = document.getElementById("formArea");
const qrStage = document.getElementById("qrStage");
const qrcodeEl = document.getElementById("qrcode");
const templateContent = document.getElementById("templateContent");
const previewTitle = document.getElementById("previewTitle");
const previewText = document.getElementById("previewText");
const previewType = document.getElementById("previewType");
const toast = document.getElementById("toast");

function t(key){ return translations[state.lang || "en"][key] || key; }

function applyLanguage(){
  document.documentElement.lang = state.lang || "en";
  document.body.classList.toggle("khmer", state.lang === "km");
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n));
  document.getElementById("currentLang").textContent = state.lang === "km" ? "ខ្មែរ" : "EN";
  document.getElementById("languageSelect").value = state.lang || "en";
  renderForm();
  renderHistory();
  renderTemplates();
  renderMiniTemplates();
  updatePreview();
}

function showToast(msg){
  toast.textContent = msg; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer=setTimeout(()=>toast.classList.remove("show"),2200);
}

function inputField(label,key,type="text",placeholder="",value=""){
  return `<div class="field"><label>${label}</label><input data-key="${key}" type="${type}" placeholder="${placeholder}" value="${escapeHtml(value)}"></div>`;
}
function textField(label,key,placeholder="",value=""){
  return `<div class="field"><label>${label}</label><textarea data-key="${key}" placeholder="${placeholder}">${escapeHtml(value)}</textarea></div>`;
}
function escapeHtml(s=""){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));}

function renderForm(){
  const labels = {
    website: state.lang==="km" ? "វេបសាយ URL" : "Website URL",
    text: state.lang==="km" ? "អត្ថបទ" : "Text",
    email: state.lang==="km" ? "អ៊ីមែល" : "Email address",
    sms: state.lang==="km" ? "លេខទូរស័ព្ទ" : "Phone number",
    wifi: state.lang==="km" ? "ឈ្មោះ Wi‑Fi" : "Wi‑Fi name",
    phone: state.lang==="km" ? "លេខទូរស័ព្ទ" : "Phone number",
    vcard: state.lang==="km" ? "ឈ្មោះ" : "Full name",
    location: state.lang==="km" ? "Google Maps URL / Location" : "Google Maps URL / Location"
  };
  const ph = state.lang==="km" ? "បញ្ចូលព័ត៌មាន..." : "Enter information...";
  let html="";
  if(state.type==="website") html=inputField(labels.website,"url","url","https://example.com");
  if(state.type==="text") html=textField(labels.text,"text",ph);
  if(state.type==="email") html=`<div class="two">${inputField(labels.email,"email","email","hello@example.com")}${inputField(state.lang==="km"?"ប្រធានបទ":"Subject","subject","text","QR message")}</div>${textField(state.lang==="km"?"សារអ៊ីមែល":"Email message","message",ph)}`;
  if(state.type==="sms") html=`<div class="two">${inputField(labels.sms,"phone","tel","+855 12 345 678")}${inputField(state.lang==="km"?"ប្រធានបទ":"Message","message","text",ph)}</div>`;
  if(state.type==="wifi") html=`<div class="two">${inputField(labels.wifi,"ssid","text","My WiFi")}${inputField(state.lang==="km"?"ពាក្យសម្ងាត់":"Password","password","text","password")}</div><div class="field"><label>${state.lang==="km"?"សុវត្ថិភាព":"Security"}</label><select data-key="security"><option value="WPA">WPA/WPA2</option><option value="WEP">WEP</option><option value="">Open</option></select></div>`;
  if(state.type==="phone") html=inputField(labels.phone,"phone","tel","+855 12 345 678");
  if(state.type==="vcard") html=`<div class="two">${inputField(labels.vcard,"name","text","Your Name")}${inputField(state.lang==="km"?"លេខទូរស័ព្ទ":"Phone","phone","tel","+855 12 345 678")}</div>${inputField(state.lang==="km"?"អ៊ីមែល":"Email","email","email","hello@example.com")}${inputField(state.lang==="km"?"ក្រុមហ៊ុន":"Company","company","text","ZENVRIC")}`;
  if(state.type==="location") html=`
    <div class="location-track-banner">
      <button type="button" class="track-loc-btn" id="trackLocationBtn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="2" x2="12" y2="6"></line>
          <line x1="12" y1="18" x2="12" y2="22"></line>
          <line x1="2" y1="12" x2="6" y2="12"></line>
          <line x1="18" y1="12" x2="22" y2="12"></line>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
        <span id="trackLocText">${t("trackLocation")}</span>
      </button>
    </div>
    <div class="two">${inputField(state.lang==="km"?"Latitude":"Latitude","lat","text","11.5564")}${inputField(state.lang==="km"?"Longitude":"Longitude","lng","text","104.9282")}</div>
    ${inputField(state.lang==="km"?"ឈ្មោះទីតាំង":"Place name","place","text","Phnom Penh")}
  `;
  formArea.innerHTML=html;
  formArea.querySelectorAll("input,textarea,select").forEach(el=>el.addEventListener("input",updatePreview));

  if(state.type==="location") {
    attachLocationTracker();
  }
}

function attachLocationTracker() {
  const trackBtn = document.getElementById("trackLocationBtn");
  const trackText = document.getElementById("trackLocText");

  if (trackBtn) {
    trackBtn.addEventListener("click", () => {
      if (!navigator.geolocation) {
        showToast(t("geoNotSupported"));
        return;
      }

      if (trackText) trackText.textContent = t("locating");
      trackBtn.disabled = true;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude.toFixed(6);
          const lng = position.coords.longitude.toFixed(6);

          const latInput = formArea.querySelector('[data-key="lat"]');
          const lngInput = formArea.querySelector('[data-key="lng"]');
          const placeInput = formArea.querySelector('[data-key="place"]');

          if (latInput) latInput.value = lat;
          if (lngInput) lngInput.value = lng;
          if (placeInput && !placeInput.value) placeInput.value = "Current Location (" + lat + ", " + lng + ")";

          if (trackText) trackText.textContent = t("locationFound");
          trackBtn.disabled = false;
          showToast(t("locationSuccess"));
          updatePreview();
        },
        (error) => {
          if (trackText) trackText.textContent = t("trackLocation");
          trackBtn.disabled = false;
          let msg = t("geoError");
          if (error.code === error.PERMISSION_DENIED) msg = t("geoPermissionDenied");
          showToast(msg);
        },
        { enableHighAccuracy: true, timeout: 10000 }
      );
    });
  }
}

function getFormData(){
  const d={}; formArea.querySelectorAll("[data-key]").forEach(el=>d[el.dataset.key]=el.value.trim()); return d;
}
function makePayload(){
  const d=getFormData();
  if(state.type==="website") return d.url;
  if(state.type==="text") return d.text;
  if(state.type==="email") return `mailto:${d.email}?subject=${encodeURIComponent(d.subject||"")}&body=${encodeURIComponent(d.message||"")}`;
  if(state.type==="sms") return `SMSTO:${d.phone}:${d.message||""}`;
  if(state.type==="wifi") return `WIFI:T:${d.security||""};S:${d.ssid||""};P:${d.password||""};;`;
  if(state.type==="phone") return `tel:${d.phone}`;
  if(state.type==="vcard") return `BEGIN:VCARD\nVERSION:3.0\nFN:${d.name||""}\nTEL:${d.phone||""}\nEMAIL:${d.email||""}\nORG:${d.company||""}\nEND:VCARD`;
  if(state.type==="location") return `geo:${d.lat||""},${d.lng||""}?q=${encodeURIComponent(d.place||"")}`;
  return "";
}
function validPayload(payload){ return payload && payload.length > 0; }

function updatePreview(){
  const payload=makePayload();
  qrcodeEl.innerHTML="";
  const fg=document.getElementById("fgColor").value, bg=document.getElementById("bgColor").value;
  if(validPayload(payload)){
    state.qr=new QRCode(qrcodeEl,{text:payload,width:210,height:210,colorDark:fg,colorLight:bg,correctLevel:QRCode.CorrectLevel.H});
  }
  previewType.textContent = ({website:t("website"),text:t("text"),email:t("email"),sms:t("sms"),wifi:t("wifi"),phone:t("phone"),vcard:t("contact"),location:t("location")})[state.type];
  
  const tmpl = templates.find(a=>a.id===state.template);
  const defaultLabel = "ZENVRIC • " + (tmpl ? tmpl.name.toUpperCase() : "");
  document.getElementById("templateLabel").textContent = state.customBrand || defaultLabel;
  previewTitle.textContent = state.customTitle || t("scan");
  previewText.textContent = state.customDesc || t("qrReady");

  const qrLogoOverlay = document.getElementById("qrLogoOverlay");
  if (qrLogoOverlay) {
    if (state.logoUrl) {
      qrLogoOverlay.src = state.logoUrl;
      qrLogoOverlay.classList.remove("hidden");
    } else {
      qrLogoOverlay.classList.add("hidden");
    }
  }

  document.documentElement.style.setProperty("--qr-radius",document.getElementById("radiusRange").value+"px");
}

function getSampleQrSvg(size = 70) {
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 100" fill="none">
    <rect x="5" y="5" width="28" height="28" rx="5" fill="currentColor"/>
    <rect x="10" y="10" width="18" height="18" rx="3" fill="#ffffff"/>
    <rect x="14" y="14" width="10" height="10" rx="2" fill="currentColor"/>
    
    <rect x="67" y="5" width="28" height="28" rx="5" fill="currentColor"/>
    <rect x="72" y="10" width="18" height="18" rx="3" fill="#ffffff"/>
    <rect x="76" y="14" width="10" height="10" rx="2" fill="currentColor"/>
    
    <rect x="5" y="67" width="28" height="28" rx="5" fill="currentColor"/>
    <rect x="10" y="72" width="18" height="18" rx="3" fill="#ffffff"/>
    <rect x="14" y="76" width="10" height="10" rx="2" fill="currentColor"/>

    <rect x="38" y="8" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="50" y="8" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="38" y="20" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="50" y="20" width="8" height="8" rx="1.5" fill="currentColor"/>
    
    <rect x="8" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="20" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="38" y="38" width="8" height="8" rx="1.5" fill="#5b55f6"/>
    <rect x="50" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="62" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="74" y="38" width="8" height="8" rx="1.5" fill="currentColor"/>
    
    <rect x="8" y="50" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="20" y="50" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="38" y="50" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="62" y="50" width="8" height="8" rx="1.5" fill="#5b55f6"/>
    <rect x="74" y="50" width="8" height="8" rx="1.5" fill="currentColor"/>
    
    <rect x="38" y="62" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="50" y="62" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="62" y="62" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="74" y="62" width="8" height="8" rx="1.5" fill="currentColor"/>

    <rect x="38" y="74" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="50" y="74" width="8" height="8" rx="1.5" fill="#5b55f6"/>
    <rect x="62" y="74" width="8" height="8" rx="1.5" fill="currentColor"/>
    <rect x="74" y="74" width="8" height="8" rx="1.5" fill="currentColor"/>
  </svg>`;
}

function getTemplateSvgIcon(id, size = 16) {
  const icons = {
    scan_pay: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line></svg>`,
    food_doodle: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
    bank_card: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
    neo_dark: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`,
    kitty: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c-5 0-9 4-9 9 0 4 3.5 7 9 7s9-3 9-7c0-5-4-9-9-9z"></path><path d="M4 10L2 3l7 4"></path><path d="M20 10l2-7-7 4"></path><circle cx="9" cy="13" r="1" fill="currentColor"></circle><circle cx="15" cy="13" r="1" fill="currentColor"></circle><path d="M11 16h2"></path></svg>`,
    anime: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`,
    spiderman: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"></path><circle cx="12" cy="9" r="2.5"></circle></svg>`,
    cute: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    work: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    cyberpunk: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    night: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`,
    purple: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="12 6 15 11 20 12 16 16 17 21 12 18 7 21 8 16 4 12 9 11 12 6"></polygon></svg>`,
    pastel: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path></svg>`,
    minimal: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"></rect><path d="M9 3v18"></path></svg>`,
    sunset: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line></svg>`,
    glass: `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
  };
  return icons[id] || icons.purple;
}

function renderMiniTemplates(){
  document.getElementById("miniTemplates").innerHTML=templates.slice(0,4).map(x=>`
    <button class="template-mini ${x.cls} ${state.template===x.id?"active":""}" data-template="${x.id}">
      <div class="mini-sample-qr">${getSampleQrSvg(24)}</div>
      <span>${x.name}</span>
    </button>
  `).join("");
  document.querySelectorAll("[data-template]").forEach(b=>b.addEventListener("click",()=>selectTemplate(b.dataset.template)));
}

function renderTemplates(){
  const isDark = (id) => ["night","purple","sunset","cyan","pink","anime","spiderman","work","cyberpunk","neo_dark"].includes(id);
  document.getElementById("templateGallery").innerHTML=templates.map(x=>`
    <div class="gallery-card">
      <div class="gallery-preview ${x.cls}" style="color:${isDark(x.id)?'#ffffff':'#171a35'}">
        <div class="sample-qr-stage">
          <span class="sample-brand">ZENVRIC • ${x.name.toUpperCase()}</span>
          <div class="sample-qr-box">${getSampleQrSvg(64)}</div>
          <small class="sample-title">Scan Example</small>
        </div>
      </div>
      <div class="gallery-info">
        <b style="display:flex;align-items:center;gap:6px">${getTemplateSvgIcon(x.id, 16)} ${x.name} ${x.badge?`<span class="badge-tag">${x.badge}</span>`:''}</b>
        <p>${x.desc}</p>
        <button data-gallery-template="${x.id}">${state.template===x.id?(state.lang==="km"?"បានជ្រើស":"Selected"):(state.lang==="km"?"ប្រើគំរូនេះ":"Use template")}</button>
      </div>
    </div>
  `).join("");
  document.querySelectorAll("[data-gallery-template]").forEach(b=>b.addEventListener("click",()=>selectTemplate(b.dataset.galleryTemplate)));
}

function selectTemplate(id){
  state.template=id; localStorage.setItem("zenvric-template",id);
  const x=templates.find(a=>a.id===id);
  qrStage.className="qr-stage "+x.cls;
  if(["night","purple","sunset","cyan","pink","anime","spiderman","work","cyberpunk","neo_dark"].includes(id)) templateContent.style.color="#fff"; else templateContent.style.color="";
  if (!state.customBrand) {
    document.getElementById("templateLabel").textContent="ZENVRIC • "+x.name.toUpperCase();
  }

  const qrBox = document.querySelector(".qr-box");
  const oldBadge = qrBox ? qrBox.querySelector(".pointing-hand-badge") : null;
  if (oldBadge) oldBadge.remove();

  if (id === "scan_pay" && qrBox) {
    const handBadge = document.createElement("div");
    handBadge.className = "pointing-hand-badge";
    handBadge.innerHTML = `<svg width="38" height="38" viewBox="0 0 24 24" fill="#ffffff" stroke="#2563eb" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2 2 2 0 0 0-2 2v0a2 2 0 0 0-2-2 2 2 0 0 0-2 2v0a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7l-3-3a2 2 0 0 0-3 3l5 7a7 7 0 0 0 7 2h4a5 5 0 0 0 5-5v-6a2 2 0 0 0-2-2z"></path></svg>`;
    qrBox.appendChild(handBadge);
  }

  renderMiniTemplates(); renderTemplates(); showToast(t("selected"));
}
function saveHistory(){
  const payload=makePayload(); if(!validPayload(payload)){showToast(t("required"));return false}
  const item={type:state.type,payload:payload,title:payload.slice(0,70),time:new Date().toLocaleString()};
  state.history=[item,...state.history.filter(x=>x.payload!==payload)].slice(0,20);
  localStorage.setItem("zenvric-history",JSON.stringify(state.history)); renderHistory(); return true;
}
function renderHistory(){
  const list=document.getElementById("historyList");
  if(!state.history.length){list.innerHTML=`<div class="empty">${state.lang==="km"?"មិនទាន់មាន QR Code នៅឡើយទេ។":"No QR codes yet. Create your first one."}</div>`;return}
  list.innerHTML=state.history.map((x,i)=>{
    let displayTitle = x.title;
    try { displayTitle = decodeURIComponent(displayTitle); } catch(e){}
    return `<div class="history-item"><div class="history-qr"></div><div class="history-main" title="${escapeHtml(displayTitle)}"><b>${escapeHtml(displayTitle)}</b><small>${x.type} • ${escapeHtml(x.time)}</small></div><button class="secondary-btn" data-load="${i}">${state.lang==="km"?"ប្រើ":"Use"}</button></div>`;
  }).join("");
  list.querySelectorAll("[data-load]").forEach(b=>b.addEventListener("click",()=>loadHistory(Number(b.dataset.load))));
}
function loadHistory(i){
  const x=state.history[i]; state.type=x.type; showView("create");
  document.querySelectorAll(".type-card").forEach(b=>b.classList.toggle("active",b.dataset.type===state.type));
  renderForm(); const field=formArea.querySelector("[data-key]");
  if(field) field.value=x.payload.startsWith("http")?x.payload:x.payload.replace(/^tel:/,"");
  updatePreview();
}
function showView(view){
  document.querySelectorAll(".view").forEach(v=>v.classList.toggle("active",v.id==="view-"+view));
  document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
}
function downloadQR(){
  if(!saveHistory()) return;
  const canvas = qrcodeEl.querySelector("canvas");
  if(!canvas){ showToast(t("required")); return; }

  const tmpl = templates.find(a => a.id === state.template) || templates[0];
  const isDark = ["night","purple","sunset","cyan","pink","anime","spiderman","work","cyberpunk","neo_dark"].includes(tmpl.id);

  const outW = 460;
  const outH = 580;
  const out = document.createElement("canvas");
  out.width = outW;
  out.height = outH;
  const ctx = out.getContext("2d");

  // 1. Draw Template Background Gradient
  ctx.save();
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(0, 0, outW, outH, 28);
  else ctx.rect(0, 0, outW, outH);
  ctx.clip();

  let bgGrad;
  if (tmpl.id === "scan_pay") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#ffffff");
    bgGrad.addColorStop(1, "#ebf3ff");
  } else if (tmpl.id === "food_doodle") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#ffffff");
    bgGrad.addColorStop(1, "#f8fafc");
  } else if (tmpl.id === "bank_card") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#f8fafc");
    bgGrad.addColorStop(1, "#edf2f7");
  } else if (tmpl.id === "neo_dark") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#050508");
    bgGrad.addColorStop(1, "#12121c");
  } else if (tmpl.id === "kitty") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#ffdeea");
    bgGrad.addColorStop(1, "#fff0f6");
  } else if (tmpl.id === "anime") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#1f1147");
    bgGrad.addColorStop(1, "#5c27fe");
  } else if (tmpl.id === "spiderman") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#b91c1c");
    bgGrad.addColorStop(1, "#0f172a");
  } else if (tmpl.id === "cute") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#c8f7dc");
    bgGrad.addColorStop(1, "#ffe5d9");
  } else if (tmpl.id === "work") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#0f172a");
    bgGrad.addColorStop(1, "#1e293b");
  } else if (tmpl.id === "cyberpunk") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#0a0a12");
    bgGrad.addColorStop(1, "#1f0a2e");
  } else if (tmpl.id === "night") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#161936");
    bgGrad.addColorStop(1, "#232856");
  } else if (tmpl.id === "purple") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#5b55f6");
    bgGrad.addColorStop(1, "#8177ff");
  } else if (tmpl.id === "sunset") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#f97316");
    bgGrad.addColorStop(1, "#e11d48");
  } else if (tmpl.id === "glass") {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#e0f2fe");
    bgGrad.addColorStop(1, "#bae6fd");
  } else {
    bgGrad = ctx.createLinearGradient(0, 0, outW, outH);
    bgGrad.addColorStop(0, "#e9e8ff");
    bgGrad.addColorStop(1, "#faf9ff");
  }

  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, outW, outH);
  ctx.restore();

  // 2. Draw Brand Header Text
  const brandText = state.customBrand || ("ZENVRIC • " + tmpl.name.toUpperCase());
  ctx.textAlign = "center";
  ctx.font = "800 12px sans-serif";
  let brandColor = isDark ? "#ffffff" : "#5b55f6";
  if (tmpl.id === "scan_pay") brandColor = "#2563eb";
  if (tmpl.id === "kitty") brandColor = "#d81b60";
  if (tmpl.id === "work" || tmpl.id === "neo_dark") brandColor = "#fbbf24";
  if (tmpl.id === "cyberpunk") brandColor = "#ff00ff";
  ctx.fillStyle = brandColor;
  ctx.fillText(brandText, outW / 2, 58);

  // 3. Draw White Box & QR Canvas
  const boxW = 240;
  const boxH = 240;
  const boxX = (outW - boxW) / 2;
  const boxY = 82;

  ctx.save();
  ctx.fillStyle = "#ffffff";
  ctx.shadowColor = isDark ? "rgba(0,0,0,0.35)" : "rgba(28,24,84,0.12)";
  ctx.shadowBlur = 25;
  ctx.shadowOffsetY = 12;
  ctx.beginPath();
  if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 18);
  else ctx.fillRect(boxX, boxY, boxW, boxH);
  ctx.fill();
  ctx.restore();

  if (tmpl.id === "scan_pay") {
    ctx.strokeStyle = "#60a5fa";
    ctx.lineWidth = 5;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 18);
    ctx.stroke();
  } else if (tmpl.id === "neo_dark" || tmpl.id === "work") {
    ctx.strokeStyle = "#f59e0b";
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 18);
    ctx.stroke();
  } else if (tmpl.id === "cyberpunk") {
    ctx.strokeStyle = "#00ffff";
    ctx.lineWidth = 3;
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(boxX, boxY, boxW, boxH, 18);
    ctx.stroke();
  }

  const qrPad = 15;
  ctx.drawImage(canvas, boxX + qrPad, boxY + qrPad, boxW - qrPad * 2, boxH - qrPad * 2);

  const finalizeDownload = () => {
    // 4. Draw Card Title
    const titleText = state.customTitle || t("scan");
    ctx.textAlign = "center";
    ctx.font = "800 22px sans-serif";
    ctx.fillStyle = isDark ? "#ffffff" : "#171a35";
    if (tmpl.id === "scan_pay") ctx.fillStyle = "#1e40af";
    if (tmpl.id === "cyberpunk") ctx.fillStyle = "#00ffff";
    ctx.fillText(titleText, outW / 2, 375);

    // 5. Draw Card Description
    const descText = state.customDesc || t("qrReady");
    ctx.font = "500 12px sans-serif";
    ctx.fillStyle = isDark ? "rgba(255,255,255,0.75)" : "#64748b";
    ctx.fillText(descText, outW / 2, 405);

    // 6. Draw Footer Branding
    ctx.font = "700 10px sans-serif";
    ctx.fillStyle = isDark ? "rgba(255,255,255,0.4)" : "rgba(100,116,139,0.5)";
    ctx.fillText("ZENVRIC QR STUDIO", outW / 2, 535);

    const a = document.createElement("a");
    a.download = "zenvric-qr-poster.png";
    a.href = out.toDataURL("image/png");
    a.click();
    showToast(t("downloaded"));
  };

  if (state.logoUrl) {
    const logoImg = new Image();
    logoImg.onload = () => {
      const logoSize = 48;
      const cx = outW / 2;
      const cy = boxY + boxH / 2;
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(cx - logoSize / 2 - 4, cy - logoSize / 2 - 4, logoSize + 8, logoSize + 8, 10);
      else ctx.fillRect(cx - logoSize / 2 - 4, cy - logoSize / 2 - 4, logoSize + 8, logoSize + 8);
      ctx.fill();
      ctx.drawImage(logoImg, cx - logoSize / 2, cy - logoSize / 2, logoSize, logoSize);
      finalizeDownload();
    };
    logoImg.src = state.logoUrl;
  } else {
    finalizeDownload();
  }
}
function copyContent(){
  const payload=makePayload(); if(!validPayload(payload)){showToast(t("required"));return}
  navigator.clipboard?.writeText(payload).then(()=>showToast(t("copied"))).catch(()=>showToast(payload));
}
async function shareQR(){
  if(!saveHistory()) return;
  const canvas=qrcodeEl.querySelector("canvas"); if(!canvas){return}
  if(navigator.share){try{await navigator.share({title:"ZENVRIC QR Code",text:makePayload()});showToast(t("shared"));}catch(e){}}
  else {copyContent();}
}

document.querySelectorAll(".type-card").forEach(btn=>btn.addEventListener("click",()=>{
  state.type=btn.dataset.type;document.querySelectorAll(".type-card").forEach(b=>b.classList.toggle("active",b===btn));renderForm();updatePreview();
}));
document.getElementById("fgColor").addEventListener("input",updatePreview);
document.getElementById("bgColor").addEventListener("input",updatePreview);
document.getElementById("radiusRange").addEventListener("input",updatePreview);
document.getElementById("resetStyle").addEventListener("click",()=>{document.getElementById("fgColor").value="#171a35";document.getElementById("bgColor").value="#ffffff";document.getElementById("radiusRange").value=8;updatePreview()});
document.getElementById("copyBtn").addEventListener("click",copyContent);
document.getElementById("downloadBtn").addEventListener("click",downloadQR);
document.getElementById("shareBtn").addEventListener("click",shareQR);
function getDailyUsage() {
  const today = new Date().toISOString().slice(0, 10);
  const savedDate = localStorage.getItem("zenvric-daily-date");
  if (savedDate !== today) {
    localStorage.setItem("zenvric-daily-date", today);
    localStorage.setItem("zenvric-daily-count", "0");
    return 0;
  }
  return parseInt(localStorage.getItem("zenvric-daily-count") || "0", 10);
}

function isUserVIP() {
  const user = JSON.parse(localStorage.getItem("zenvric-user") || "null");
  const isPrem = localStorage.getItem("zenvric-premium") === "1";
  if (!user) {
    localStorage.removeItem("zenvric-premium");
    return false;
  }
  return isPrem;
}

function checkDailyQuota() {
  if (isUserVIP()) return true;
  const count = getDailyUsage();
  return count < 10;
}

function incrementDailyUsage() {
  if (isUserVIP()) return true;
  const count = getDailyUsage();
  localStorage.setItem("zenvric-daily-count", (count + 1).toString());
  updateDailyUsageCounter();
  return true;
}

function updateDailyUsageCounter() {
  const badge = document.getElementById("dailyQuotaBadge");
  if (!badge) return;
  if (isUserVIP()) {
    badge.innerHTML = `<span class="quota-badge vip">👑 Unlimited VIP Member</span>`;
  } else {
    const used = getDailyUsage();
    badge.innerHTML = `<span class="quota-badge ${used >= 10 ? 'limit' : ''}">⚡ Daily Free Quota: ${used} / 10 Used Today</span>`;
  }
}

const generateBtn = document.getElementById("generateBtn");
generateBtn?.addEventListener("click", () => {
  const payload = makePayload();
  if (!validPayload(payload)) {
    showToast(t("required"));
    showQrSheet();
    return;
  }
  
  if (!checkDailyQuota()) {
    showToast(state.lang === "km" ? "⚠️ ឈានដល់ដែនកំណត់ 10 QR ក្នុង 1 ថ្ងៃហើយ! សូមបញ្ចូលលេខកូដ (ZENVRIC2026) ដើម្បីប្រើ Unlimited VIP!" : "⚠️ Daily limit reached (10/10 QR today)! Enter promo code 'ZENVRIC2026' for unlimited VIP!");
    showAuthModal();
    return;
  }

  const originalContent = generateBtn.innerHTML;
  generateBtn.disabled = true;
  const procLabel = state.lang === "km" ? "កំពុងបង្កើត QR Code..." : "Generating QR Code...";
  generateBtn.innerHTML = `<span class="btn-spinner"></span> <span>${procLabel}</span>`;

  setTimeout(() => {
    incrementDailyUsage();
    saveHistory();
    generateBtn.disabled = false;
    generateBtn.innerHTML = originalContent;
    showQrSheet();
  }, 420);
});
document.getElementById("clearHistory").addEventListener("click",()=>{state.history=[];localStorage.removeItem("zenvric-history");renderHistory();showToast(t("cleared"))});
document.querySelectorAll(".nav-item").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.view)));
document.querySelectorAll("[data-view-link]").forEach(b=>b.addEventListener("click",()=>showView(b.dataset.viewLink)));
document.getElementById("compactBtn").addEventListener("click",toggleCompact);
document.getElementById("compactSwitch").addEventListener("click",toggleCompact);
document.getElementById("languageBtn").addEventListener("click",()=>document.getElementById("languageOverlay").classList.remove("hidden"));
document.getElementById("languageMini").addEventListener("click",()=>document.getElementById("languageOverlay").classList.remove("hidden"));
document.querySelectorAll("[data-lang-choice]").forEach(b=>b.addEventListener("click",()=>setLanguage(b.dataset.langChoice)));
document.getElementById("languageSelect").addEventListener("change",e=>setLanguage(e.target.value));
document.getElementById("accentColor").addEventListener("input",e=>{document.documentElement.style.setProperty("--accent",e.target.value);localStorage.setItem("zenvric-accent",e.target.value)});
document.getElementById("fullscreenPreview").addEventListener("click",()=>{if(qrStage.requestFullscreen)qrStage.requestFullscreen()});

// Auth Modal Logic & Early Access VIP
const authBackdrop = document.getElementById("authBackdrop");
const authModal = document.getElementById("authModal");
const authBtn = document.getElementById("authBtn");
const authCloseBtn = document.getElementById("authCloseBtn");
const authForm = document.getElementById("authForm");
const authLoggedIn = document.getElementById("authLoggedIn");
const userBtnLabel = document.getElementById("userBtnLabel");

function updateAuthUI() {
  const user = JSON.parse(localStorage.getItem("zenvric-user") || "null");
  state.user = user;
  const isPrem = isUserVIP();

  if (user) {
    if (authForm) authForm.classList.add("hidden");
    if (authLoggedIn) authLoggedIn.classList.remove("hidden");
    document.getElementById("userName").textContent = user.name || "Member";
    document.getElementById("userEmail").textContent = user.email || "user@zenvric.com";
    document.getElementById("userAvatar").textContent = (user.name || "US").substring(0, 2).toUpperCase();
    if (userBtnLabel) userBtnLabel.textContent = user.name ? user.name.split(" ")[0] : "Profile";

    const badgeEl = document.getElementById("userStatusBadge");
    if (badgeEl) {
      if (isPrem) {
        badgeEl.className = "active-badge vip-active";
        badgeEl.textContent = state.lang === "km" ? "👑 សមាជិក Unlimited VIP" : "👑 Unlimited VIP Member";
      } else {
        badgeEl.className = "active-badge free-active";
        badgeEl.textContent = state.lang === "km" ? "⚡ សមាជិក Free (10 QR/ថ្ងៃ)" : "⚡ Free Account (10 QR/day limit)";
      }
    }
  } else {
    if (authForm) authForm.classList.remove("hidden");
    if (authLoggedIn) authLoggedIn.classList.add("hidden");
    if (userBtnLabel) userBtnLabel.textContent = state.lang === "km" ? "ចូលប្រព័ន្ធ" : "LOGIN";
  }
  updateDailyUsageCounter();
}

function showAuthModal() {
  updateAuthUI();
  authBackdrop?.classList.add("active");
  authModal?.classList.add("active");
}
function hideAuthModal() {
  authBackdrop?.classList.remove("active");
  authModal?.classList.remove("active");
}

authBtn?.addEventListener("click", showAuthModal);
authCloseBtn?.addEventListener("click", hideAuthModal);
authBackdrop?.addEventListener("click", hideAuthModal);

authForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const passVal = document.getElementById("authPassword")?.value;
  const emailVal = document.getElementById("authEmail")?.value || "user@zenvric.com";
  
  if (passVal && ["ZENVRIC2026", "VIPFREE", "PREMIUM999", "CAMBODIA2026", "ZENVRICVIP"].includes(passVal.trim().toUpperCase())) {
    redeemCode(passVal);
    hideAuthModal();
    return;
  }

  const name = emailVal.split("@")[0].toUpperCase();
  const userObj = { email: emailVal, name: name, role: "Free Member" };
  localStorage.setItem("zenvric-user", JSON.stringify(userObj));
  localStorage.removeItem("zenvric-premium");
  updateAuthUI();
  hideAuthModal();
  showToast(state.lang === "km" ? "បានចូលប្រើប្រាស់គណនី (Free Tier)!" : "Signed in (Free 10/day limit).");
});

function redeemCode(code) {
  const validCodes = ["ZENVRIC2026", "VIPFREE", "PREMIUM999", "CAMBODIA2026", "ZENVRICVIP"];
  const cleanCode = (code || "").trim().toUpperCase();
  if (validCodes.includes(cleanCode)) {
    const userObj = { email: "vip.member@zenvric.com", name: "VIP Premium Member", role: "VIP Premium", code: cleanCode };
    localStorage.setItem("zenvric-user", JSON.stringify(userObj));
    localStorage.setItem("zenvric-premium", "1");
    updateAuthUI();
    showToast(state.lang === "km" ? "🎉 បានដោះសោ Premium VIP ដោយជោគជ័យ!" : "🎉 Premium VIP Unlocked Successfully!");
  } else {
    showToast(state.lang === "km" ? "លេខកូដមិនត្រឹមត្រូវ! (សាកល្បង: ZENVRIC2026)" : "Invalid Code! Try 'ZENVRIC2026' or 'VIPFREE'");
  }
}

document.getElementById("redeemCodeBtn")?.addEventListener("click", () => {
  const input = document.getElementById("redeemCodeInput");
  redeemCode(input?.value);
  if (input) input.value = "";
});

document.getElementById("googleAuthBtn")?.addEventListener("click", () => {
  showToast(state.lang === "km" ? "Google OAuth ជិតមកដល់ហើយ! សូមចូលដោយប្រើអ៊ីមែលខាងលើ។" : "Google OAuth Coming Soon! Please sign in with Email above.");
});

document.getElementById("githubAuthBtn")?.addEventListener("click", () => {
  showToast(state.lang === "km" ? "GitHub OAuth ជិតមកដល់ហើយ! សូមចូលដោយប្រើអ៊ីមែលខាងលើ។" : "GitHub OAuth Coming Soon! Please sign in with Email above.");
});

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("zenvric-user");
  localStorage.removeItem("zenvric-premium");
  state.user = null;
  updateAuthUI();
  hideAuthModal();
  showToast(state.lang === "km" ? "បានចាកចេញពីគណនី" : "Signed out.");
});

// Photo Logo Upload & Custom Card Text logic
const logoInput = document.getElementById("logoInput");
const logoUploadBtn = document.getElementById("logoUploadBtn");
const removeLogoBtn = document.getElementById("removeLogoBtn");

logoUploadBtn?.addEventListener("click", () => logoInput?.click());
logoInput?.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      state.logoUrl = event.target.result;
      removeLogoBtn?.classList.remove("hidden");
      updatePreview();
    };
    reader.readAsDataURL(file);
  }
});
removeLogoBtn?.addEventListener("click", () => {
  state.logoUrl = null;
  if (logoInput) logoInput.value = "";
  removeLogoBtn?.classList.add("hidden");
  updatePreview();
});

document.getElementById("customBrandInput")?.addEventListener("input", (e) => {
  state.customBrand = e.target.value.trim();
  updatePreview();
});
document.getElementById("customTitleInput")?.addEventListener("input", (e) => {
  state.customTitle = e.target.value.trim();
  updatePreview();
});
document.getElementById("customDescInput")?.addEventListener("input", (e) => {
  state.customDesc = e.target.value.trim();
  updatePreview();
});

// Mobile menu & tap bar logic
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const sidebar = document.querySelector(".sidebar");
const qrSheetBackdrop = document.getElementById("qrSheetBackdrop");
const qrSheetModal = document.getElementById("qrSheetModal");
const sheetQrBox = document.getElementById("sheetQrBox");

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener("click", () => {
    sidebar?.classList.toggle("open");
    sidebarOverlay?.classList.toggle("active", sidebar?.classList.contains("open"));
  });
}

if (sidebarOverlay) {
  sidebarOverlay.addEventListener("click", () => {
    sidebar?.classList.remove("open");
    sidebarOverlay.classList.remove("active");
  });
}

document.querySelectorAll(".nav-item").forEach(b => {
  b.addEventListener("click", () => {
    sidebar?.classList.remove("open");
    sidebarOverlay?.classList.remove("active");
    updateTapBarState(b.dataset.view === "create" ? "edit" : b.dataset.view);
  });
});

function showQrSheet() {
  const isReady = validPayload(makePayload());
  const mainCanvas = qrcodeEl.querySelector("canvas");
  const sheetQrStage = document.getElementById("sheetQrStage");
  const sheetTemplateLabel = document.getElementById("sheetTemplateLabel");
  const sheetPreviewTitle = document.getElementById("sheetPreviewTitle");
  const sheetPreviewText = document.getElementById("sheetPreviewText");
  const sheetPreviewType = document.getElementById("sheetPreviewType");
  const sheetCopyBtn = document.getElementById("sheetCopyBtn");
  const sheetDownloadBtn = document.getElementById("sheetDownloadBtn");
  const sheetShareBtn = document.getElementById("sheetShareBtn");
  const sheetCloseBtn = document.getElementById("sheetCloseBtn");

  sheetQrBox.innerHTML = "";

  if (sheetQrStage) sheetQrStage.className = "sheet-qr-stage " + (templates.find(a=>a.id===state.template)?.cls || "");
  if (sheetTemplateLabel) sheetTemplateLabel.textContent = document.getElementById("templateLabel").textContent;
  if (sheetPreviewTitle) sheetPreviewTitle.textContent = document.getElementById("previewTitle").textContent;
  if (sheetPreviewText) sheetPreviewText.textContent = document.getElementById("previewText").textContent;
  if (sheetPreviewType) sheetPreviewType.textContent = document.getElementById("previewType").textContent;

  if (isReady && mainCanvas) {
    const clone = document.createElement("canvas");
    clone.width = mainCanvas.width;
    clone.height = mainCanvas.height;
    const ctx = clone.getContext("2d");
    ctx.drawImage(mainCanvas, 0, 0);
    sheetQrBox.appendChild(clone);

    if (state.logoUrl) {
      const logoImg = new Image();
      logoImg.src = state.logoUrl;
      logoImg.className = "sheet-logo-overlay";
      sheetQrBox.appendChild(logoImg);
    }

    if (sheetCopyBtn) sheetCopyBtn.style.display = "block";
    if (sheetDownloadBtn) sheetDownloadBtn.style.display = "block";
    if (sheetShareBtn) sheetShareBtn.style.display = "block";
    if (sheetCloseBtn) sheetCloseBtn.textContent = t("sheetClose");
  } else {
    sheetQrBox.innerHTML = `
      <div class="sheet-empty-state">
        <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#8b7cff" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
          <path d="M7 7h10M7 12h10M7 17h6"></path>
        </svg>
        <span>${t("sheetEmptySubtitle")}</span>
      </div>
    `;

    if (sheetCopyBtn) sheetCopyBtn.style.display = "none";
    if (sheetDownloadBtn) sheetDownloadBtn.style.display = "none";
    if (sheetShareBtn) sheetShareBtn.style.display = "none";
    if (sheetCloseBtn) sheetCloseBtn.textContent = t("sheetFillForm");
  }

  qrSheetBackdrop?.classList.add("show");
  qrSheetModal?.classList.add("show");
  updateTapBarState("preview");
}

function hideQrSheet() {
  qrSheetBackdrop?.classList.remove("show");
  qrSheetModal?.classList.remove("show");
}

document.getElementById("sheetCopyBtn")?.addEventListener("click", () => {
  copyContent();
});
document.getElementById("sheetFullscreenBtn")?.addEventListener("click", () => {
  if (qrStage.requestFullscreen) qrStage.requestFullscreen();
});
document.getElementById("sheetCloseBtn")?.addEventListener("click", () => {
  const isReady = validPayload(makePayload());
  hideQrSheet();
  if (!isReady) {
    showView("create");
    updateTapBarState("edit");
    const field = formArea.querySelector("input, textarea");
    if (field) field.focus();
  }
});
qrSheetBackdrop?.addEventListener("click", hideQrSheet);
document.getElementById("sheetDownloadBtn")?.addEventListener("click", () => {
  hideQrSheet();
  downloadQR();
});
document.getElementById("sheetShareBtn")?.addEventListener("click", () => {
  hideQrSheet();
  shareQR();
});

function updateTapBarState(target) {
  document.querySelectorAll(".mobile-tap-bar .tap-item").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tapTarget === target);
  });
}

document.querySelectorAll(".mobile-tap-bar .tap-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.dataset.tapTarget;
    if (target === "preview") {
      showQrSheet();
    } else {
      hideQrSheet();
      const viewName = target === "edit" ? "create" : target;
      showView(viewName);
      updateTapBarState(target);
      if (target === "edit") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  });
});

function setSiteTheme(theme) {
  state.siteTheme = theme;
  localStorage.setItem("zenvric-theme", theme);
  document.body.classList.remove("theme-dark", "theme-cyberpunk", "theme-glassmorphism");
  if (theme !== "light") {
    document.body.classList.add("theme-" + theme);
  }
  const themeSelect = document.getElementById("siteThemeSelect");
  if (themeSelect) themeSelect.value = theme;
}

document.getElementById("siteThemeSelect")?.addEventListener("change", (e) => {
  setSiteTheme(e.target.value);
});

const themeModes = ["light", "dark", "cyberpunk", "glassmorphism"];
document.getElementById("themeToggleBtn")?.addEventListener("click", () => {
  const currentIndex = themeModes.indexOf(state.siteTheme || "light");
  const nextTheme = themeModes[(currentIndex + 1) % themeModes.length];
  setSiteTheme(nextTheme);
  showToast("Theme: " + nextTheme.toUpperCase());
});

document.querySelectorAll(".preset-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const color = btn.dataset.color;
    document.documentElement.style.setProperty("--accent", color);
    localStorage.setItem("zenvric-accent", color);
    const picker = document.getElementById("accentColor");
    if (picker) picker.value = color;
    showToast(t("selected"));
  });
});

function setLanguage(lang){
  state.lang=lang;localStorage.setItem("zenvric-lang",lang);document.getElementById("languageOverlay").classList.add("hidden");applyLanguage();
}
function toggleCompact(){
  state.compact=!state.compact;document.body.classList.toggle("compact",state.compact);localStorage.setItem("zenvric-compact",state.compact?"1":"0");document.getElementById("compactSwitch").classList.toggle("on",state.compact);
}

(function init(){
  updateAuthUI();
  state.siteTheme = localStorage.getItem("zenvric-theme") || "light";
  setSiteTheme(state.siteTheme);
  const accent=localStorage.getItem("zenvric-accent");
  if(accent) {
    document.documentElement.style.setProperty("--accent",accent);
    const picker = document.getElementById("accentColor");
    if (picker) picker.value = accent;
  }
  document.body.classList.toggle("compact",state.compact);document.getElementById("compactSwitch").classList.toggle("on",state.compact);
  selectTemplate(state.template);
  if(!state.lang) document.getElementById("languageOverlay").classList.remove("hidden");
  else document.getElementById("languageOverlay").classList.add("hidden");
  state.lang=state.lang||"en";applyLanguage();
})();
