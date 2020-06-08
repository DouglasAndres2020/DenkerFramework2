/*
  Denker Framework 2.0
    global  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
let Denkcolors =["blue","cyan","sky","green","vue","darkvue","red","angular","deepred","orange","amber","yellow",
            "purple","violet","pink","brown","celbluegrey","bluegrey","dark","ligthen","grey","white","black"];

/*
    Denker Framework 2.0
    switch  LICENCE MIT DouglasAndresMorenoReinaldo©2020
    ==========================================================>
*/
document.querySelectorAll('switch').forEach(sw => {
    let colors = 'blue';
    Denkcolors.forEach(col => {
        if(sw.classList.contains(col)){
            sw.classList.remove(col)
            colors = col;
        }
    })
    sw.classList.add('switch')
    sw.innerHTML = `<label><input type="checkbox"><div class="switcher ${colors}"></div></label>`;
    if(sw.hasAttribute('name')) {
        sw.querySelector('input').setAttribute('name',sw.getAttribute('name'))
        sw.removeAttribute('name')
    }
    if(sw.hasAttribute('id')){
        sw.querySelector('input').setAttribute('id',sw.getAttribute('id'))
        sw.removeAttribute('id')
    }
    if(sw.hasAttribute('checked')){
        sw.querySelector('input').setAttribute('checked','true')
        sw.removeAttribute('checked')
    }
    if(sw.classList.contains('disabled')){
        sw.querySelector('input').removeAttribute('checked')
    }
})

/*
  Denker Framework 2.0
    Skills Proggres Bar  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/

class SkillsProggres {
    init(){
        document.querySelectorAll('pros').forEach(sk => {
            if(sk.dataset.bg != undefined && sk.dataset.bg.trim()){
                if(sk.dataset.bg == "dark"){
                    sk.dataset.bg = "#242436";
                }
            }
            function attr(e){
                if(sk.hasAttribute('data-'+e) && sk.getAttribute('data-'+e).trim()){
                    return sk.getAttribute('data-'+e);
                }else {
                    return "0";
                }
            }
            let newp = document.createElement('div');
            newp.classList.add('percent');
            newp.dataset.pros = attr('percentage');
            newp.innerHTML = `<div class="boxx"><svg><circle cx="70" cy="70" r="70"></circle><circle cx="70" cy="70" r="70" class="pross" style="stroke-dashoffset: calc(440 - (440 * ${attr('percentage')}) / 100); stroke: ${attr('color')}; fill:${attr('bg')};"></circle></svg><div class="number"><h2 class="h2" style="color:${attr('color')}">${attr('percentage')}<span>%</span></h2></div></div><h2 class="text">${sk.innerText}</h2>`;
            sk.parentNode.insertBefore(newp,sk);
            sk.parentNode.removeChild(sk);
            this.Repeat()
        })
    }
    Repeat(r){
        if(r == undefined){
            document.querySelectorAll('.percent').forEach(sp => {
                let datalenght = sp.dataset.pros;
                sp.querySelectorAll('.pross')[0].style.transition = `all ease .0s`;
                sp.querySelectorAll('.pross')[0].style.strokeDashoffset = `calc(440 - (440 * 0) / 100)`;
                let ad = 0;
                let ist = setInterval(() => {
                    if(ad >= datalenght){
                        clearInterval(ist);
                    }
                    sp.querySelector('.number .h2').innerHTML = `${ad}<span>%</span>`;
                    ad += 1;
                }, 10);
                setTimeout(() => {
                sp.querySelectorAll('.pross')[0].style.transition = `all ease .5s`;
                sp.querySelectorAll('.pross')[0].style.strokeDashoffset = `calc(440 - (440 * ${datalenght}) / 100)`
            }, 0);
            })
        }else {
                let y = document.querySelector('.percent')
                    let datalenght = sp.dataset.pros;
                    y.querySelectorAll('.pross')[0].style.transition = `all ease .0s`;
                    y.querySelectorAll('.pross')[0].style.strokeDashoffset = `calc(440 - (440 * 0) / 100)`;
                    let ad = 0;
                    let ist = setInterval(() => {
                        if(ad >= datalenght){
                            clearInterval(ist);
                        }
                        y.querySelector('.number .h2').innerHTML = `${ad}<span>%</span>`;
                        ad += 1;
                    }, 10);
                    setTimeout(() => {
                    spy.querySelectorAll('.pross')[0].style.transition = `all ease .5s`;
                    spy.querySelectorAll('.pross')[0].style.strokeDashoffset = `calc(440 - (440 * ${datalenght}) / 100)`
                }, 0);

        }
    }
}

let Skills = new SkillsProggres;
Skills.init();
/*
  Denker Framework 2.0
    collapsibles  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
class DenkerCollapsibles {
    init(){
        document.querySelectorAll('.collapsible-container').forEach(el => {
            let content = el.querySelector('.collapsible-content');
            let btn = el.querySelector('.collapsible-header');
            let popp = el.dataset.pop;
            let querypop = (popp == "TRUE" || popp == "true");
            let accord = el.dataset.acordion;
            let queryacc= (accord == "TRUE" || accord == "true");
            function OpenThisCollapse() {
                if(querypop){
                    el.parentNode.style.overflow = `visible`;
                    if(el.classList.contains('pop')){
                        el.classList.remove('pop')
                    }else {
                        el.parentNode.querySelectorAll('.collapsible-container').forEach(ct => {
                            ct.classList.remove('pop')
                            ct.querySelector('.collapsible-content').style.maxHeight = null;
                            ct.querySelector('.collapsible-content').style.paddingTop = null;
                            ct.querySelector('.collapsible-content').style.paddingBottom = null;
                        })
                        el.classList.add('pop')
                    }
                }
                if(queryacc){
                    if(el.classList.contains('active')){
                        el.classList.remove('active')
                    }else {
                        el.parentNode.querySelectorAll('.collapsible-container').forEach(ct => {
                            ct.classList.remove('active')
                            ct.querySelector('.collapsible-content').style.maxHeight = null;
                            ct.querySelector('.collapsible-content').style.paddingTop = null;
                            ct.querySelector('.collapsible-content').style.paddingBottom = null;
                        })
                        el.classList.add('active')
                    }
                }
                
                if(content.style.maxHeight){
                    content.style.paddingTop = null;
                    content.style.paddingBottom = null;
                    content.style.maxHeight = null;
                }else {
                    content.style.paddingTop = "7px";
                    content.style.paddingBottom = "7px";
                    content.style.maxHeight = `${content.scrollHeight + 14}px`;
                }
            }
            btn.addEventListener('click', e => {
                OpenThisCollapse()
            })
            if(el.classList.contains('preselect')){
               document.addEventListener("DOMContentLoaded", e => {
                   OpenThisCollapse();
               })
            }
        })
    }
}
let Collapsibles = new DenkerCollapsibles;
/*
  Denker Framework 2.0
    Global  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
let colors =["blue","cyan","sky","green","vue","darkvue","red","angular","deepred","orange","amber","yellow",
            "purple","violet","pink","brown","celbluegrey","bluegrey","dark","ligthen","grey","white","black"];
/*
  Denker Framework 2.0
    buttons  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
const GroputButtons = document.querySelectorAll('.group-btns').forEach(el => {
   
    let btns = el.querySelectorAll('.btn').forEach(btn => {
        if(btn.classList.contains('icon-left')){
            btn.classList = `btn icon-left`;
        }else {
            btn.classList = `btn`;
        }
    })
    if(el.classList.contains('outline')){
        el.classList.add('outlined')
        let btns = el.querySelectorAll('.btn').forEach(btn => {
            btn.classList = `btn outline`;
        })
        colors.forEach(col => {
            if(el.classList.contains(col)){
                el.classList.remove(col)
                el.querySelectorAll('.btn').forEach(btn => {
                    btn.classList.add(col);
                })
            }
        })
        
    }else if(!el.classList.contains('text') && !el.classList.contains('blue')){
        colors.forEach(col => {
            if(el.classList.contains(col)){
                el.classList.remove(col)
                el.querySelectorAll('.btn').forEach(btn => {
                    btn.classList.add(col);
                })
            }
        })
    }
    if(el.classList.contains('denk-wave-effect')){
       colors.forEach(col => {
            if(el.classList.contains(`wave-${col}`)){
                el.classList.remove('denk-wave-effect');
                el.classList.remove(`wave-${col}`);
                el.querySelectorAll('.btn').forEach(btn => {
                    btn.classList.add(`denk-wave-effect`);
                    btn.classList.add(`wave-${col}`);
                })
            }
        })
    }
    if(el.classList.contains('big')){
        let btns = el.querySelectorAll('.btn').forEach(btn => {
            btn.classList.add('big')
        })
    }
    if(el.classList.contains('small')){
        let btns = el.querySelectorAll('.btn').forEach(btn => {
            btn.classList.add('small')
        })
    }
})
/*
  Denker Framework 2.0
    tabs  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
let tabsInitianilizacion = false;
class DenkerTabs{
    init() {
        tabsInitianilizacion = true;
        const TabContainer = document.querySelectorAll('.tab-container').forEach(tbh => {
            tbh.innerHTML = `<div class="newdenkercontainerindicator">${tbh.innerHTML}<div class="indicator"></div></div>`;
            let activetab = 0;
            tbh.querySelectorAll('.tab').forEach((tb,idx) => {
                tb.dataset.index = idx;
            })
            if(!tbh.querySelector('.tab.active')){
                click(tbh.querySelector('.tab'),0)
            }else{
                if(tbh.querySelector('.tab.active.disabled')){click(tbh.querySelector('.tab'),0)}else{click(tbh.querySelector('.tab.active'),tbh.querySelector('.tab.active').dataset.index)}
            }
            const tabs = tbh.querySelectorAll('.tab').forEach((tb,idx) => {
                if(location.hash && location.hash == tb.getAttribute('href')){
                    click(tb,idx)
                }
                tb.addEventListener('click', (e) => {
                    e.preventDefault();
                    click(tb,idx)
                })
            })
        function click(tb,idx){
                const indicator = tbh.querySelector('.indicator');
                let left = 0,
                    right = 0;
                tbh.querySelectorAll('.tab').forEach((el,id) => {
                    if(idx > id){
                        left += el.getBoundingClientRect().width; 
                    }
                    if(idx < id){
                        right += el.getBoundingClientRect().width; 
                    }
                })
                if(activetab < idx){
                    indicator.style.right = `${right}px`;
                    setTimeout(() => {
                        indicator.style.left = `${left}px`;
                    }, 150);
                }else {
                    indicator.style.left = `${left}px`;
                    setTimeout(() => {
                        indicator.style.right = `${right}px`;
                    }, 150);
                }
               tbh.scroll({
                    top:0,
                    left : left - (tb.getBoundingClientRect().width / 2),
                    behavior : "smooth"
                });
            activetab = idx;
            if(tb.hasAttribute('href')){
                if(tb.getAttribute('href').trim()){
                    tb.parentNode.querySelectorAll('.tab').forEach(tbx => {
                        if(document.querySelector(tbx.getAttribute('href')) != undefined){
                            document.querySelector(tbx.getAttribute('href')).style.display = "none";
                        }
                    })
                    if(document.querySelector(tb.getAttribute('href')) != undefined){
                        document.querySelector(tb.getAttribute('href')).style.display = null;
                    }
                }
            }
            tb.parentNode.querySelectorAll('.tab').forEach(tbx => {
                tbx.classList.remove('active')
            })
            tb.classList.add('active')
        }
    })
    }
    recalculateTabIndicator(){
        if(tabsInitianilizacion === true){
            const TabHeader = document.querySelectorAll('.tab-container').forEach(tbh => {
                let activetab = tbh.querySelector('.tab.active');
                activetab.click();
                activetab.click();
            })
        }
    }
}
let Tabs = new DenkerTabs;
window.addEventListener('resize', (e) => {
    Tabs.recalculateTabIndicator();
})

/*
  Denker Framework 2.0
    droopdowns  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
class DenkerDroopdowns {
    init(){
        document.querySelectorAll('.droopdown-container').forEach(drc => {
            const btn = drc.querySelector('.droopdown-btn');
            const droopdown = drc.querySelector('.droopdown-content');
            const a = droopdown.querySelectorAll('a');
            let position = (drc.hasAttribute('data-pos'))? drc.dataset.pos.toLowerCase() : "bottom-left";
            droopdown.classList.add('desactive')
            let x,y;
            if(position == "top"){
                position = "top-left";
            }else if (position == "bottom"){
                position = "bottom-left";
            }
            function RecalculatePositionOnDenkerDroopDowns2() {
                let rect = btn.getBoundingClientRect();
                let drrect = droopdown.getBoundingClientRect();
                if(position == "bottom-left"){
                    y = rect.top + rect.height + 5,
                    x = rect.left + 5;
                    droopdown.style.transformOrigin = `top left`;
                    droopdown.style.left = `${x}px`;droopdown.style.top = `${y}px`;
                    
                    if(droopdown.getBoundingClientRect().left+(droopdown.getBoundingClientRect().width*2) > document.documentElement.clientWidth){
                        position = "bottom-right"
                        x = (rect.right + 5) - (drrect.width * 2);
                        droopdown.style.transformOrigin = `top right`;
                    }
                    if(droopdown.getBoundingClientRect().top+(droopdown.getBoundingClientRect().height*2) > document.documentElement.clientHeight){
                        position = "top-left";
                        y = (rect.top - 5) - (drrect.height * 2);
                        x = rect.left + 5;
                        droopdown.style.transformOrigin = `bottom left`;
                    }
                    if(droopdown.getBoundingClientRect().top+(droopdown.getBoundingClientRect().height*2) > document.documentElement.clientHeight && droopdown.getBoundingClientRect().left+(droopdown.getBoundingClientRect().width*2) > document.documentElement.clientWidth){
                        position = "top-right"
                        y = (rect.top - 5) - (drrect.height * 2);
                        x = rect.left + 5;
                        droopdown.style.transformOrigin = `bottom left`;
                    }
                }else if (position == "bottom-right"){
                    y = rect.top + rect.height + 5,
                    x = (rect.right + 5) - (drrect.width * 2);
                    droopdown.style.transformOrigin = `top right`;
                    droopdown.style.left = `${x}px`;droopdown.style.top = `${y}px`;
                    if(droopdown.getBoundingClientRect().left < 0){ 
                        position = "bottom-left";
                        x = rect.left + 5;
                        droopdown.style.transformOrigin = `top left`;
                    }
                    if(droopdown.getBoundingClientRect().top+(droopdown.getBoundingClientRect().height*2) > document.documentElement.clientHeight){
                        position = "top-left";
                        y = (rect.top - 5) - (drrect.height * 2);
                        x = rect.left + 5;
                        droopdown.style.transformOrigin = `bottom left`;
                    }

                    if(droopdown.getBoundingClientRect().left+(droopdown.getBoundingClientRect().width*2) > document.documentElement.clientWidth){
                        position = "top-right";
                        y = (rect.top - 5) - (drrect.height * 2),
                        x = (rect.right + 5) - (drrect.width * 2);
                        droopdown.style.transformOrigin = `bottom right`;
                    }
                }else if (position == "top-left"){
                    y = (rect.top - 5) - (drrect.height * 2);
                    x = rect.left + 5;
                    droopdown.style.transformOrigin = `bottom left`;
                    droopdown.style.left = `${x}px`;droopdown.style.top = `${y}px`;
                    if(droopdown.getBoundingClientRect().top-10 < 0){
                       position = "bottom-left";
                       y = rect.top + rect.height + 5,
                       x = (rect.right + 5) - (drrect.width * 2);
                       droopdown.style.transformOrigin = `top right`;
                    }
                    if(droopdown.getBoundingClientRect().left+(droopdown.getBoundingClientRect().width*2) > document.documentElement.clientWidth){
                        position = "bottom-right";
                        y = rect.top + rect.height + 5,
                        x = (rect.right + 5) - (drrect.width * 2);
                        droopdown.style.transformOrigin = `top right`;
                    }
                    if(droopdown.getBoundingClientRect().left+(droopdown.getBoundingClientRect().width*2) > document.documentElement.clientWidth &&!droopdown.getBoundingClientRect().top-10 < 0){
                        position = "top-right";
                        y = (rect.top - 5) - (drrect.height * 2),
                        x = (rect.right + 5) - (drrect.width * 2);
                        droopdown.style.transformOrigin = `bottom right`;
                    }
                }else /*top-right*/{
                    y = (rect.top - 5) - (drrect.height * 2),
                    x = (rect.right + 5) - (drrect.width * 2);
                    droopdown.style.transformOrigin = `bottom right`;
                    droopdown.style.left = `${x}px`;droopdown.style.top = `${y}px`;
                   if(droopdown.getBoundingClientRect().top-10-(droopdown.getBoundingClientRect().height*2) < 0){ 
                        position = "bottom-right";
                        y = rect.top + rect.height + 5,
                        x = (rect.right + 5) - (drrect.width * 2);
                        droopdown.style.transformOrigin = `top right`; 
                    }
                    if(droopdown.getBoundingClientRect().right-10-(droopdown.getBoundingClientRect().width*2) < 0){
                        position = "bottom-left";
                        y = rect.top + rect.height + 5,
                        x = rect.left + 5;
                        droopdown.style.transformOrigin = `top left`;
                    }
                }
                drc.dataset.pos = position;
            }
            
            RecalculatePositionOnDenkerDroopDowns2()
            a.forEach( as => {
                as.addEventListener('click',e => {
                    e.preventDefault();
                })  
            })
            btn.addEventListener('click',(e) => {
                if(droopdown.classList.contains('desactive')){
                    RecalculatePositionOnDenkerDroopDowns2()
                    //animation active
                    droopdown.style.transform = `scale(1)`;
                    droopdown.style.pointerEvents = null;
                    droopdown.classList.remove('desactive');
                    droopdown.style.opacity = `1`;
                }else {
                    //animation desactive
                    droopdown.style.opacity = null;
                    droopdown.style.pointerEvents = 'none';
                    droopdown.style.transform = null;
                    droopdown.classList.add('desactive')
                }
            })
        })
    }
    OpenAll(){
        document.querySelectorAll('.droopdown-container').forEach(drc => {
            const btn = drc.querySelector('.droopdown-btn');
            const droopdown = drc.querySelector('.droopdown-content');
            if(droopdown.classList.contains('desactive')){
                btn.click();
            }
        })
    }
    CloseAll(){
        document.querySelectorAll('.droopdown-container').forEach(drc => {
            const btn = drc.querySelector('.droopdown-btn');
            const droopdown = drc.querySelector('.droopdown-content');
            if(!droopdown.classList.contains('desactive')){
                btn.click();
            }
        })
    }
    ToggleAll(){
        document.querySelectorAll('.droopdown-container').forEach(drc => {
            const btn = drc.querySelector('.droopdown-btn');
            btn.click();
        })
    }
}
let Droopdowns = new DenkerDroopdowns;
/*
  Denker Framework 2.0
    cards  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/

const rev = document.querySelectorAll('.reveal').forEach(rev => {
        const reveal = rev.parentNode.querySelector('.rax');
        const reclose = rev.parentNode.querySelector('.close');
        rev.style.height = "0%";
        reveal.addEventListener('click', e => {
            if(rev.dataset.reveal == "sticky"){
                let r = rev.nextElementSibling.offsetHeight;
                rev.style.height = `calc(100% - ${r}px)`;
                rev.style.transform = `translateY(-${r}px)`
                rev.style.overflow = "auto";
            }else{
                rev.style.height = "100%";
                rev.style.overflow = "auto";
            }
        });
        reclose.addEventListener('click', e => {
            rev.style.height = "0%";
            setTimeout(() => {
                rev.style.overflow = "hidden";
            }, 500);
        });
})
/*
  Denker Framework 2.0
    sidenav  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/

let trigger = document.querySelectorAll('.aside-trigger');
let side = document.querySelectorAll('.asider')
trigger.forEach( tr => {
    tr.addEventListener('click',() => {
        let tgra = tr.dataset.side;
        let sider = document.querySelector(tgra);
        sider.style.transform = 'translateX(0px)';
    })
})
side.forEach(sd => {
    let closer = sd.querySelector('.asider-close');
    closer.addEventListener('click',() => {
        closer.parentNode.parentNode.style.transform = null;
    })
})

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("active");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(!this.value.trim()){
        if(this.hasAttribute('placeholder')){if(this.getAttribute('placeholder').trim()){}
        }else {
            parent.classList.remove("active");
        }
	}
}
/*
  Denker Framework 2.0
    inputs-Text  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
const inputs = document.querySelectorAll(".input");
inputs.forEach(input => {
    if(input.hasAttribute('placeholder')){
        if(input.getAttribute('placeholder').trim()){
            let parent = input.parentNode.parentNode;
	        parent.classList.add("active");
        }
    }
    input.addEventListener("focus", addcl);
    input.addEventListener("blur", remcl);
    if(input.hasAttribute('disabled')){
        input.parentNode.parentNode.classList.add('disabled');
    }
    if(input.dataset.counter != undefined){
        if(input.dataset.counter.trim()){
            let conteido = document.createElement('div')
            conteido.classList.add('conteidor');
            input.parentNode.parentNode.appendChild(conteido);
            input.addEventListener('input', e => {
                let thislen = input.value.length;
                let max = input.dataset.counter;
                const conteidor = input.parentNode.parentNode.querySelector('.conteidor');
                conteidor.innerHTML = `${thislen}/${max}`
                if(thislen >= max){
                    input.parentNode.parentNode.classList.add('errored')
                }else{
                    input.parentNode.parentNode.classList.remove('errored')
                }
            })
        }
    }
    input.addEventListener('input', e => {
        if(input.dataset.error != undefined && input.dataset.error.trim()){
            if(input == input.parentNode.querySelector('input:invalid')){
                input.parentNode.parentNode.classList.add('errored')
                if(input.parentNode.parentNode.querySelector('.info')){
                    input.parentNode.parentNode.removeChild(input.parentNode.parentNode.querySelector('.info'));
                }
                let content = input.dataset.error;
                let contenel = document.createElement('div');
                contenel.classList.add('info','error');
                contenel.innerHTML = content;
                input.parentNode.parentNode.append(contenel)
            }
        }
        if(input.dataset.success != undefined && input.dataset.success.trim()){
            if(input == input.parentNode.querySelector('input:valid')){
                input.parentNode.parentNode.classList.remove('errored')
                if(input.parentNode.parentNode.querySelector('.info')){
                    input.parentNode.parentNode.removeChild(input.parentNode.parentNode.querySelector('.info'));
                }
                let content = (input.value.trim())? input.dataset.success : "";
                let contenel = document.createElement('div');
                contenel.classList.add('info','success');
                contenel.innerHTML = content;
                input.parentNode.parentNode.append(contenel)
            }
        }
    })
    if(input.tagName == "TextAREA"){
        input.addEventListener('keydown', e => {
            setTimeout(es => {
                input.style.height = `auto`;
                let y = input.scrollHeight;
                input.style.height = `${y}px`;
            },1)
        })
        
    }
});

class AutoCompleteInput{
    aut(ins,array){
        if(document.querySelector(ins) != undefined){
            let sl = document.createElement('div')
            sl.classList.add('selection');
            document.querySelector(ins).appendChild(sl);
            let inp = document.querySelector(ins).querySelector('label').querySelector('.input');
            inp.addEventListener('input', e => {
                let a = inp.parentNode.parentNode.querySelector('.selection');
                let focus = -1;
                a.innerHTML = ``;
                if(inp.value.trim()){
                    array.forEach(item => {
                        let val = inp.value;
                        if (item.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                            let b = document.createElement("DIV");
                            b.innerHTML = `<div class="selection__item"><span><strong>${item.substr(0, val.length)}</strong>${item.substr(val.length)}</span></div>`;
                            a.appendChild(b);
                        };
                        a.querySelectorAll('.selection__item').forEach(b => {
                            b.addEventListener('click',e => {
                                inp.value = b.querySelector('span').innerText;
                                a.innerHTML = ``;
                            })
                        })
                    });
                }
                function select(){
                    let iasd = inp.parentNode.parentNode.querySelector('.selection').querySelectorAll('.selection__item');
                    iasd.forEach(er => {
                        er.classList.remove('active')
                    })
                    if(iasd[focus] != undefined){
                        iasd[focus].classList.add('active')
                    }
                    }
                    inp.addEventListener('keyup', e => {
                    if (e.keyCode == 40) {
                        let max = inp.parentNode.parentNode.querySelector('.selection').querySelectorAll('.selection__item').length-1;
                        if(focus != max){
                            focus++;
                            select()
                        }
                    } else if (e.keyCode == 38) { 
                        if(focus != 0){
                            focus--;
                            select()
                        }
                        } else if (e.keyCode == 13) {
                            e.preventDefault(); 
                            let cls = inp.parentNode.parentNode.querySelector('.selection').querySelector('.selection__item.active');
                            if(cls != undefined){
                                cls.click();
                            }
                        }
                })
                window.addEventListener('click', u => {
                    a.innerHTML = ``;
                })
            });
        }
    }
}
let Inputs = new AutoCompleteInput;

/*
  Denker Framework 2.0
    input range  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
const slider = document.querySelectorAll('.slider-container');
slider.forEach(sli => {
    let cos = document.createElement('span');
    cos.classList.add('bar');
    cos.innerHTML = `<span class="fill"></span>`;
    let input = sli.querySelector('.slider');
    sli.insertBefore(cos,input);
    let fill = sli.querySelector(':scope .bar .fill')
    let attr = input.getAttribute('max');
    fill.style.width = `${input.value * (100 / attr)}%`
    input.addEventListener('input',() => {
        fill.style.width = `${input.value * (100 / attr)}%`
    })
})
let InputDenkcolors =["blue","cyan","sky","green","vue","darkvue","red","angular","deepred","orange","amber","yellow",
            "purple","violet","pink","brown","celbluegrey","bluegrey","dark","ligthen","grey","white","black"];

document.querySelectorAll('sel').forEach(sel => {
    let label = (sel.hasAttribute('label') && sel.getAttribute('label').trim())? sel.getAttribute('label') :"Select Box";
    let newinput = document.createElement('div');
    newinput.className += `input-group selec active desactive`;
    if(sel.classList.contains('outlined'))  newinput.classList.add('outlined');
    newinput.innerHTML = `<div class="clickker"><label><div class="semiinput">${sel.querySelector('op').innerText}</div></label><svg class="expand-icon"xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M24 24H0V0h24v24z" fill="none" opacity=".87"/><path d="M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z"/></svg><div><span class="label">${label}</span><div class="selecoptions"></div><input type="hidden"value="${sel.querySelector('op').innerText}" name="${(sel.hasAttribute('name') && sel.getAttribute('name').trim())?sel.getAttribute('name'):Date.now}">`;
    sel.parentNode.insertBefore(newinput,sel);
    let grid = (sel.hasAttribute('grid') && sel.getAttribute('grid').trim())? sel.getAttribute('grid') : "";
    newinput.className += ` ${grid}`;
    InputDenkcolors.forEach(col => {
        if(sel.classList.contains(col)) newinput.classList.add(col)
    })
    let op = sel.querySelectorAll('op').forEach(op => {
        let newitem = document.createElement('div');
        newitem.classList.add('itemselection');
        newitem.innerHTML += `<span>${op.innerHTML}</span>`;
        newitem.addEventListener('click', e => {
            newinput.querySelector('input').value = op.innerText;
            newinput.querySelector('.semiinput').innerHTML = op.innerText;
        })
        newinput.querySelector('.selecoptions').appendChild(newitem)
    })
    newinput.querySelector('.clickker').addEventListener('click', a => {
        manipuler();
    })
    manipuler();
    
    function manipuler(){
        if(newinput.classList.contains('desactive')){
            newinput.classList.remove('desactive');
            let manipuler = newinput.querySelector('.selecoptions');
            manipuler.style.pointerEvents = "none";
            manipuler.style.opacity = "0";
            manipuler.style.transform = "scale(0)";
        }else {
            newinput.classList.add('desactive');
            let manipuler = newinput.querySelector('.selecoptions');
            manipuler.style.pointerEvents = null;
            manipuler.style.opacity = null;
            manipuler.style.transform = null;
        }
    }
    sel.parentNode.removeChild(sel)
})
class ToastC {
    Denk(e){

        if(document.querySelector('.toast-container')){
            this.create(e);
        }else{
            let container = document.createElement('div');
            container.classList.add('toast-container');
            document.body.appendChild(container);
            this.create(e);
        }
    }
    create(y){
        if(y){
            let title = (y.title)? y.title : "no-content";
            let text = (y.text)? y.text : "no-content";
            let newt = document.createElement('div');
            newt.classList.add('toast');
            newt.innerHTML = `<div class="toast-header"><div class="t-header"><div class="icon"></div><span>${title}</span></div><div class="time">just now</div></div><div class="content">${text}</div>`;
            if(document.querySelector('.toast-container').querySelector('.toast')){
                let yt = document.querySelector('.toast-container').querySelector('.toast');
                yt.parentNode.insertBefore(newt,yt);
            }else{
                document.querySelector('.toast-container').appendChild(newt)
            }
            let t = 0;
            let pause = false;
            let timer = setInterval(ts => {
                if(pause == false){
                    t += 1;
                }
                if(t >= 5){
                    newt.parentNode.removeChild(newt);
                    clearInterval(timer);
                    if(document.querySelector('.toast-container')){
                        if(document.querySelector('.toast-container').innerHTML == ''){
                            document.querySelector('.toast-container').parentNode.removeChild(document.querySelector('.toast-container'));
                        }
                    }
                }
            },1000)
            newt.addEventListener('mousemove', e => {
                pause = true;
            })
            newt.addEventListener('mouseleave', e => {
                pause = false;
            })

        }
    }
    clearAll(){
        if(document.querySelector('.toast-container')){
            let remove = document.querySelector('.toast-container');
            remove.parentNode.removeChild(remove);
        }
    }
}

let Toast = new ToastC;

/*
  Denker Framework 2.0
    tooltips  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
let DenkerTooltipsInitializated = false;
class DenkerTooltips {
    init() {
        DenkerTooltipsInitializated = true;
        document.querySelectorAll('.Tooltip').forEach(tlh => {
            let tooltipContent = tlh.dataset.tooltip;
            let tl = document.createElement('div')
            tl.classList.add('denker-tooltip')
            document.body.appendChild(tl);
            let position = (tlh.hasAttribute('data-pos'))? tlh.dataset.pos.toLowerCase() : "top";
            let x,y;
            function recalculateRects() {
                let tlhrect = tlh.getBoundingClientRect();
                let tlrect = tl.getBoundingClientRect();
                if(position === "top"){
                    x = tlhrect.left - (tlrect.width / 2) + (tlhrect.width / 2);
                    y = tlhrect.top - tlhrect.height;
                    if(y < tlrect.height){
                        y = tlhrect.top + tlhrect.height;
                        position = "bottom";
                    }
                    if(x-10 < 0){
                        x = tlhrect.left;
                    }
                    if(x+tlrect.width+10 > document.documentElement.clientWidth){
                        x = tlhrect.right - tlrect.width;
                    }
                }else if(position === "bottom"){
                    x = tlhrect.left - (tlrect.width / 2) + (tlhrect.width / 2);
                    y = tlhrect.top + tlhrect.height;
                    if(y+tlrect.width+10 > document.documentElement.clientHeight){
                        y = tlhrect.top - tlhrect.height;
                        position = "top";
                    }
                    if(x-10 < 0){
                        x = tlhrect.left;
                    }
                    if(x+tlrect.width+10 > document.documentElement.clientWidth){
                        x = tlhrect.right - tlrect.width;
                    }
                }else if (position === "right"){
                    x = tlhrect.right;
                    y = tlhrect.top;
                    if(x+tlrect.width+10 > document.documentElement.clientWidth){
                        y = tlhrect.top - tlrect.height;
                        x = tlhrect.right - tlrect.width;
                        position = "top";
                        if(tlrect.top <= 0){
                            x = tlhrect.left;
                            y = tlhrect.top + tlrect.height;
                            position = "bottom";
                        }
                    }
                }else /*left*/{
                    x = tlhrect.left - tlrect.width;
                    y = tlhrect.top;
                    if(x-10 < 0){
                        x = tlhrect.left;
                        y = tlhrect.top - tlrect.height;
                        position = "top";
                        if(tlrect.top <= 0){
                            x = tlhrect.left;
                            y = tlhrect.top + tlrect.height;
                            position = "bottom";
                        }
                    }
                }
            }
            let margin = 10;
            tlh.addEventListener('mouseover', e => {
                tl.innerHTML = tooltipContent;
                recalculateRects()
                if(position === "top"){
                    tl.style.transform = `translateY(-${margin}px)`;
                }else if (position === "bottom") {
                    tl.style.transform = `translateY(${margin}px)`;
                }else if (position === "right"){
                    tl.style.transform = `translateX(${margin}px)`;
                }else /*left*/{
                    tl.style.transform = `translateX(-${margin}px)`;
                }
                tl.style.left = `${x}px`;
                tl.style.top = `${y}px`;
                tl.style.opacity = 1;
            })
            tlh.addEventListener('mouseleave', e => {
                tl.style.transform = null;
                tl.style.opacity = null;
            })
        })
    }
    destroy(){
        if(DenkerTooltipsInitializated === true){
            document.querySelectorAll('.denker-tooltip').forEach( tl => {
                document.body.removeChild(tl);
            })
            DenkerTooltipsInitializated = false;
        }else {
            console.warn('Primero debes Inicializarce Tooltips.init() para poder porder ejecutar Tooltips.destroy();')
        }
    }
}
let Tooltips = new DenkerTooltips;

/*
  Denker Framework 2.0
    Wave-Effect v1.4  LICENCE MIT DouglasAndresMorenoReinaldo©2020
  ==========================================================>
*/
document.querySelectorAll('.denk-wave-effect').forEach(wv => {
    wv.addEventListener('mousedown', e => {
        if(e.button === 0){
            let newave = document.createElement('div');
            let btnposL = wv.getBoundingClientRect().left;
            let btnposT = wv.getBoundingClientRect().top;
            let mousex = window.event.clientX;
            let mousey = window.event.clientY;
            let x = mousex - btnposL;
            let y = mousey - btnposT;
            let id = Date.now();
            newave.classList.add('denkerwave-effecterforbtns');
            newave.dataset.nowids = id;
            wv.appendChild(newave);
            x = x - (newave.getBoundingClientRect().width / 2);
            y = y - (newave.getBoundingClientRect().height / 2);
            newave.style.left = `${x}px`;
            newave.style.top = `${y}px`;
            function denkerremovethisremove() {
                wv.querySelectorAll('.denkerwave-effecterforbtns').forEach( el => {
                    if(el.getAttribute('data-nowids') == id){
                        setTimeout(r => {
                            el.style.opacity = 0;
                            setTimeout(e => {
                                if(el.parentNode != undefined){
                                    el.parentNode.removeChild(el)
                                }
                            },500)
                        },200)
                    }
                })
            }
            wv.addEventListener('mouseup', e => {
                denkerremovethisremove();
            })
            wv.addEventListener('mouseleave', e => {
                denkerremovethisremove();
            })
        }
    })
})