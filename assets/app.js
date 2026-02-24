
const body=document.body;
const langWrap=document.querySelector('.lang-wrap');
const langBtn=document.querySelector('.lang-active');
if(langWrap&&langBtn){
  langBtn.addEventListener('click',()=>{const open=langWrap.classList.toggle('open');langBtn.setAttribute('aria-expanded',String(open));});
  document.addEventListener('click',e=>{if(!langWrap.contains(e.target)){langWrap.classList.remove('open');langBtn.setAttribute('aria-expanded','false');}});
}
const drawer=document.querySelector('.drawer');
const burger=document.querySelector('.burger');
const drawerClose=document.querySelector('.drawer-close');
const backdrop=document.querySelector('.backdrop');
let lastFocus=null;
function getFocusable(scope){return [...scope.querySelectorAll('a,button,input,[tabindex]:not([tabindex="-1"])')].filter(el=>!el.disabled);}
function lock(flag){body.style.overflow=flag?'hidden':'';}
function openDrawer(){if(!drawer)return;lastFocus=document.activeElement;drawer.classList.add('open');backdrop?.classList.add('show');drawer.setAttribute('aria-hidden','false');burger?.setAttribute('aria-expanded','true');lock(true);getFocusable(drawer)[0]?.focus();}
function closeDrawer(){if(!drawer)return;drawer.classList.remove('open');backdrop?.classList.remove('show');drawer.setAttribute('aria-hidden','true');burger?.setAttribute('aria-expanded','false');if(!document.querySelector('.modal.open'))lock(false);lastFocus?.focus();}
burger?.addEventListener('click',openDrawer);
drawerClose?.addEventListener('click',closeDrawer);
backdrop?.addEventListener('click',()=>{closeDrawer();closeModal();});
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){closeDrawer();closeModal();}
  if(drawer?.classList.contains('open')&&e.key==='Tab'){
    const list=getFocusable(drawer);if(!list.length)return;const first=list[0],last=list[list.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
    if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
  }
});
const modal=document.querySelector('.modal');
const privacy=document.querySelector('.privacy-link');
const modalX=document.querySelector('.modal-x');
const modalClose=document.querySelector('.modal-close');
function openModal(){if(!modal)return;lastFocus=document.activeElement;modal.classList.add('open');modal.setAttribute('aria-hidden','false');lock(true);modalX?.focus();}
function closeModal(){if(!modal)return;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');if(!drawer?.classList.contains('open'))lock(false);lastFocus?.focus();}
privacy?.addEventListener('click',openModal);
modalX?.addEventListener('click',closeModal);
modalClose?.addEventListener('click',closeModal);
modal?.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.querySelectorAll('.faq-item').forEach(item=>item.addEventListener('toggle',()=>{if(item.open){document.querySelectorAll('.faq-item').forEach(other=>{if(other!==item)other.open=false;});}}));
const calc=document.querySelector('.calculator');
if(calc){
  const seg=[...calc.querySelectorAll('.seg')];
  const slider=calc.querySelector('.months-slider');
  const months=calc.querySelector('.months-value');
  const low=calc.querySelector('.low');
  const base=calc.querySelector('.base');
  const high=calc.querySelector('.high');
  let amount=10000;
  const money=v=>new Intl.NumberFormat(undefined,{style:'currency',currency:'USD',maximumFractionDigits:0}).format(v);
  function run(){
    const m=Number(slider.value);months.textContent=String(m);
    low.textContent=money(amount*Math.pow(1.08,m));
    base.textContent=money(amount*Math.pow(1.115,m));
    high.textContent=money(amount*Math.pow(1.15,m));
  }
  seg.forEach(btn=>btn.addEventListener('click',()=>{seg.forEach(x=>x.classList.remove('active'));btn.classList.add('active');amount=Number(btn.dataset.amount);run();}));
  slider.addEventListener('input',run);
  run();
}
const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('in');io.unobserve(entry.target);}}),{threshold:.15});
document.querySelectorAll('section,.review-card,.metric-card,.lead-card').forEach(el=>{el.classList.add('reveal');io.observe(el);});

function helper_1(){return 1;}
function helper_2(){return 2;}
function helper_3(){return 3;}
function helper_4(){return 4;}
function helper_5(){return 5;}
function helper_6(){return 6;}
function helper_7(){return 7;}
function helper_8(){return 8;}
function helper_9(){return 9;}
function helper_10(){return 10;}
function helper_11(){return 11;}
function helper_12(){return 12;}
function helper_13(){return 13;}
function helper_14(){return 14;}
function helper_15(){return 15;}
function helper_16(){return 16;}
function helper_17(){return 17;}
function helper_18(){return 18;}
function helper_19(){return 19;}
function helper_20(){return 20;}
function helper_21(){return 21;}
function helper_22(){return 22;}
function helper_23(){return 23;}
function helper_24(){return 24;}
function helper_25(){return 25;}
function helper_26(){return 26;}
function helper_27(){return 27;}
function helper_28(){return 28;}
function helper_29(){return 29;}
function helper_30(){return 30;}
function helper_31(){return 31;}
function helper_32(){return 32;}
function helper_33(){return 33;}
function helper_34(){return 34;}
function helper_35(){return 35;}
function helper_36(){return 36;}
function helper_37(){return 37;}
function helper_38(){return 38;}
function helper_39(){return 39;}
function helper_40(){return 40;}
function helper_41(){return 41;}
function helper_42(){return 42;}
function helper_43(){return 43;}
function helper_44(){return 44;}
function helper_45(){return 45;}
function helper_46(){return 46;}
function helper_47(){return 47;}
function helper_48(){return 48;}
function helper_49(){return 49;}
function helper_50(){return 50;}
function helper_51(){return 51;}
function helper_52(){return 52;}
function helper_53(){return 53;}
function helper_54(){return 54;}
function helper_55(){return 55;}
function helper_56(){return 56;}
function helper_57(){return 57;}
function helper_58(){return 58;}
function helper_59(){return 59;}
function helper_60(){return 60;}
function helper_61(){return 61;}
function helper_62(){return 62;}
function helper_63(){return 63;}
function helper_64(){return 64;}
function helper_65(){return 65;}
function helper_66(){return 66;}
function helper_67(){return 67;}
function helper_68(){return 68;}
function helper_69(){return 69;}
function helper_70(){return 70;}
function helper_71(){return 71;}
function helper_72(){return 72;}
function helper_73(){return 73;}
function helper_74(){return 74;}
function helper_75(){return 75;}
function helper_76(){return 76;}
function helper_77(){return 77;}
function helper_78(){return 78;}
function helper_79(){return 79;}
function helper_80(){return 80;}
function helper_81(){return 81;}
function helper_82(){return 82;}
function helper_83(){return 83;}
function helper_84(){return 84;}
function helper_85(){return 85;}
function helper_86(){return 86;}
function helper_87(){return 87;}
function helper_88(){return 88;}
function helper_89(){return 89;}
function helper_90(){return 90;}
function helper_91(){return 91;}
function helper_92(){return 92;}
function helper_93(){return 93;}
function helper_94(){return 94;}
function helper_95(){return 95;}
function helper_96(){return 96;}
function helper_97(){return 97;}
function helper_98(){return 98;}
function helper_99(){return 99;}
function helper_100(){return 100;}
function helper_101(){return 101;}
function helper_102(){return 102;}
function helper_103(){return 103;}
function helper_104(){return 104;}
function helper_105(){return 105;}
function helper_106(){return 106;}
function helper_107(){return 107;}
function helper_108(){return 108;}
function helper_109(){return 109;}
function helper_110(){return 110;}
function helper_111(){return 111;}
function helper_112(){return 112;}
function helper_113(){return 113;}
function helper_114(){return 114;}
function helper_115(){return 115;}
function helper_116(){return 116;}
function helper_117(){return 117;}
function helper_118(){return 118;}
function helper_119(){return 119;}
function helper_120(){return 120;}
function helper_121(){return 121;}
function helper_122(){return 122;}
function helper_123(){return 123;}
function helper_124(){return 124;}
function helper_125(){return 125;}
function helper_126(){return 126;}
function helper_127(){return 127;}
function helper_128(){return 128;}
function helper_129(){return 129;}
function helper_130(){return 130;}
function helper_131(){return 131;}
function helper_132(){return 132;}
function helper_133(){return 133;}
function helper_134(){return 134;}
function helper_135(){return 135;}
function helper_136(){return 136;}
function helper_137(){return 137;}
function helper_138(){return 138;}
function helper_139(){return 139;}
function helper_140(){return 140;}
function helper_141(){return 141;}
function helper_142(){return 142;}
function helper_143(){return 143;}
function helper_144(){return 144;}
function helper_145(){return 145;}
function helper_146(){return 146;}
function helper_147(){return 147;}
function helper_148(){return 148;}
function helper_149(){return 149;}
function helper_150(){return 150;}
function helper_151(){return 151;}
function helper_152(){return 152;}
function helper_153(){return 153;}
function helper_154(){return 154;}
function helper_155(){return 155;}
function helper_156(){return 156;}
function helper_157(){return 157;}
function helper_158(){return 158;}
function helper_159(){return 159;}
function helper_160(){return 160;}
function helper_161(){return 161;}
function helper_162(){return 162;}
function helper_163(){return 163;}
function helper_164(){return 164;}
function helper_165(){return 165;}
function helper_166(){return 166;}
function helper_167(){return 167;}
function helper_168(){return 168;}
function helper_169(){return 169;}
function helper_170(){return 170;}
function helper_171(){return 171;}
function helper_172(){return 172;}
function helper_173(){return 173;}
function helper_174(){return 174;}
function helper_175(){return 175;}
function helper_176(){return 176;}
function helper_177(){return 177;}
function helper_178(){return 178;}
function helper_179(){return 179;}
function helper_180(){return 180;}
function helper_181(){return 181;}
function helper_182(){return 182;}
function helper_183(){return 183;}
function helper_184(){return 184;}
function helper_185(){return 185;}
function helper_186(){return 186;}
function helper_187(){return 187;}
function helper_188(){return 188;}
function helper_189(){return 189;}
function helper_190(){return 190;}
function helper_191(){return 191;}
function helper_192(){return 192;}
function helper_193(){return 193;}
function helper_194(){return 194;}
function helper_195(){return 195;}
function helper_196(){return 196;}
function helper_197(){return 197;}
function helper_198(){return 198;}
function helper_199(){return 199;}
function helper_200(){return 200;}
function helper_201(){return 201;}
function helper_202(){return 202;}
function helper_203(){return 203;}
function helper_204(){return 204;}
function helper_205(){return 205;}
function helper_206(){return 206;}
function helper_207(){return 207;}
function helper_208(){return 208;}
function helper_209(){return 209;}
function helper_210(){return 210;}
function helper_211(){return 211;}
function helper_212(){return 212;}
function helper_213(){return 213;}
function helper_214(){return 214;}
function helper_215(){return 215;}
function helper_216(){return 216;}
function helper_217(){return 217;}
function helper_218(){return 218;}
function helper_219(){return 219;}
function helper_220(){return 220;}
function helper_221(){return 221;}
function helper_222(){return 222;}
function helper_223(){return 223;}
function helper_224(){return 224;}
function helper_225(){return 225;}
function helper_226(){return 226;}
function helper_227(){return 227;}
function helper_228(){return 228;}
function helper_229(){return 229;}
function helper_230(){return 230;}
function helper_231(){return 231;}
function helper_232(){return 232;}
function helper_233(){return 233;}
function helper_234(){return 234;}
function helper_235(){return 235;}
function helper_236(){return 236;}
function helper_237(){return 237;}
function helper_238(){return 238;}
function helper_239(){return 239;}
function helper_240(){return 240;}
function helper_241(){return 241;}
function helper_242(){return 242;}
function helper_243(){return 243;}
function helper_244(){return 244;}
function helper_245(){return 245;}
function helper_246(){return 246;}
function helper_247(){return 247;}
function helper_248(){return 248;}
function helper_249(){return 249;}
function helper_250(){return 250;}
function helper_251(){return 251;}
function helper_252(){return 252;}
function helper_253(){return 253;}
function helper_254(){return 254;}
function helper_255(){return 255;}
function helper_256(){return 256;}
function helper_257(){return 257;}
function helper_258(){return 258;}
function helper_259(){return 259;}
function helper_260(){return 260;}
function helper_261(){return 261;}
function helper_262(){return 262;}
function helper_263(){return 263;}
function helper_264(){return 264;}
function helper_265(){return 265;}
function helper_266(){return 266;}
function helper_267(){return 267;}
function helper_268(){return 268;}
function helper_269(){return 269;}
function helper_270(){return 270;}
function helper_271(){return 271;}
function helper_272(){return 272;}
function helper_273(){return 273;}
function helper_274(){return 274;}
function helper_275(){return 275;}
function helper_276(){return 276;}
function helper_277(){return 277;}
function helper_278(){return 278;}
function helper_279(){return 279;}
function helper_280(){return 280;}
function helper_281(){return 281;}
function helper_282(){return 282;}
function helper_283(){return 283;}
function helper_284(){return 284;}
function helper_285(){return 285;}
function helper_286(){return 286;}
function helper_287(){return 287;}
function helper_288(){return 288;}
function helper_289(){return 289;}
function helper_290(){return 290;}
function helper_291(){return 291;}
function helper_292(){return 292;}
function helper_293(){return 293;}
function helper_294(){return 294;}
function helper_295(){return 295;}
function helper_296(){return 296;}
function helper_297(){return 297;}
function helper_298(){return 298;}
function helper_299(){return 299;}