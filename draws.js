var startback = new Image();
var startbutt = new Image();
startback.src = "./img/startbg.jpg";
startbutt.src = "./img/start.png";
function draw_start()
{
    ctx.drawImage(startback, 0, 0, 900, 500);
    ctx.drawImage(startbutt, 350, 350, 200, 50);
}

var gameoverback = new Image();
var restartbutt = new Image();
gameoverback.src = "./img/gameover.jpg";
restartbutt.src = "./img/replay.png";
function draw_gameover()
{
    ctx.drawImage(gameoverback, 0, 0, 900, 500);
    ctx.drawImage(restartbutt, 350, 350, 200, 50);
}

var back = new Image();
back.src = "./img/background.jpg";
function draw_back()   //배경화면 그리기
{
    ctx.drawImage(back, 0, 0, 900, 500);
}

var charimg = new Image();
charimg.src = "./img/bear.png";
function draw_char()
{
    ctx.drawImage(charimg, 350, 250, 200, 250);
}

var statrect = new Image();
statrect.src = "./img/stat.png";
var plusicon = new Image();
plusicon.src = "./img/plusicon.png";
var charstatbx = 600;
var charstatby = 320;
var apupbx = 820;
var apupby = 367;
var dpupbx = 820;
var dpupby = 392;
var hpupbx = 820;
var hpupby = 417;
var upleng = 20;
function draw_stat_char()
{
    ctx.drawImage(statrect, charstatbx, charstatby, 280, 160);
    ctx.font = "bold 30px fixedsys"
    ctx.fillText("L V. " + char.lv, 620, 360);
    ctx.font = "bold 20px fixedsys"
    ctx.fillText("A P : " + char.ap, 620, 385);
    ctx.fillText("D P : " + char.dp, 620, 410);
    ctx.fillText("H P : " + char.now_hp + " / " + char.max_hp, 620, 435);
    ctx.fillText("EXP : " + char.now_exp + " / " + char.max_exp, 620, 460);
    if(char.point > 0)
    {
        statclick.addEventListener('click', statup_click, false);
        ctx.drawImage(plusicon, apupbx, apupby, upleng, upleng);
        ctx.drawImage(plusicon, dpupbx, dpupby, upleng, upleng);
        ctx.drawImage(plusicon, hpupbx, hpupby, upleng, upleng);
    }
}



var monimg = [];
monimg[0] = new Image();
monimg[1] = new Image();
monimg[2] = new Image();
monimg[0].src = "./img/monster1.png";
monimg[1].src = "./img/monster2.png";
monimg[2].src = "./img/monster3.png";
function draw_mon(i)
{
    nowmon = i;
    if (i == 2) {
        ctx.drawImage(monimg[i], 320, 2, 250, 250);
    }
    else {
        ctx.drawImage(monimg[i], 370, 10, 200, 180);
    }
}

var monstatbx = 20;
var monstatby = 20;
function draw_stat_mon(i)
{
    ctx.drawImage(statrect, monstatbx, monstatby, 280, 160);
    ctx.font = "bold 30px fixedsys";
    ctx.fillText("L V. " + monster[i].lv, 50, 60);
    ctx.font = "bold 20px fixedsys";
    ctx.fillText("A P : " + monster[i].ap, 50, 100);
    ctx.fillText("D P : " + monster[i].dp, 50, 130);
    ctx.fillText("H P : " + monster[i].now_hp + " / " + monster[i].max_hp, 50, 160);
}

var skull = new Image();
skull.src = "./img/dead.png";
function draw_skull(flag)
{
    if(flag==0){
        ctx.drawImage(statrect, charstatbx, charstatby, 280, 160);
        ctx.drawImage(skull, charstatbx, charstatby, 280, 160);
    }
    if(flag==1){
        ctx.drawImage(statrect, monstatbx, monstatby, 280, 160);
        ctx.drawImage(skull, monstatbx, monstatby, 280, 160);
    }
}

var meterbx = 20;
var meterby = 480;
function draw_meter()
{
    ctx.font = "bold 50px fixedsys";
    ctx.fillStyle = "red";
    ctx.fillText(meter + " m", meterbx, meterby);
    ctx.fillStyle = "black";
}

var parkimg = new Image();
parkimg.src = "./img/park.jpg";
function draw_park()
{
    ctx.drawImage(parkimg, 0, 0, 900, 500);
}

var trapimg = new Image();
trapimg.src = "./img/trap.jpg";
function draw_trap()
{
    ctx.drawImage(trapimg, 0, 0, 900, 500);
    ctx.font = "bold 40pt fixedsys";
    ctx.fillStyle = "red";
    ctx.fillText("TRAP! 이기지 못하면 " + trapdam + " 데미지 !", 50, 50);
    ctx.fillStyle = "black";
}

var left = new Image();
var front = new Image();
var right = new Image();
left.src = "./img/left.png";
front.src = "./img/front.png";
right.src = "./img/right.png";
var leftbx = 50;
var leftby = 50;
var centerbx = 350;
var centerby = 50;
var rightbx = 650;
var rightby = 50;
var objwid = 200;
var objhei = 200;
function draw_arrow() {
    ctx.drawImage(left, leftbx, leftby, objwid, objhei);
    ctx.drawImage(front, centerbx, centerby, objwid, objhei);
    ctx.drawImage(right, rightbx, rightby, objwid, objhei);
}

var sci = new Image();
var paper = new Image();
var rock = new Image();
rock.src = "./img/rock.png";
sci.src = "./img/scissor.png";
paper.src = "./img/paper.png";
function draw_rsp() {
    ctx.drawImage(sci, leftbx, leftby + 100, 200, 200);
    ctx.drawImage(rock, centerbx, centerby + 100, 200, 200);
    ctx.drawImage(paper, rightbx, rightby + 100, 200, 200);
}

var rock_s = new Image();
var sci_s = new Image();
var paper_s = new Image();
rock_s.src = "./img/rock_small.png";
sci_s.src = "./img/scissor_small.png";
paper_s.src = "./img/paper_small.png";
function draw_rsp_char(i)
{
    switch (i) {
        case 0:
            ctx.drawImage(sci_s, 410, 250, 80, 80);
            break;
        case 1:
            ctx.drawImage(rock_s, 410, 250, 80, 80);
            break;
        case 2:
            ctx.drawImage(paper_s, 410, 250, 80, 80);
            break;
        default:
            break;
    }
}
function draw_rsp_com(i)
{
    switch (i) {
        case 0:
            ctx.drawImage(sci_s, 410, 160, 80, 80);
            break;
        case 1:
            ctx.drawImage(rock_s, 410, 160, 80, 80);
            break;
        case 2:
            ctx.drawImage(paper_s, 410, 160, 80, 80);
            break;
        default:
            break;
    }
}

var effectbx_char;
var effectby_char;
var effectbx_com;
var effectby_com;
var effect_size_char = 5;
var effect_size_com = 5;
var effectimg = new Image();
effectimg.src = "./img/effect.png";
function draw_effect_char() {
    ctx.drawImage(effectimg, effectbx_char, effectby_char, effect_size_char, effect_size_char);
    effectbx_char = effectbx_char - (effect_size_char / 2);
    effectby_char = effectby_char - (effect_size_char / 2);
    effect_size_char = effect_size_char * 4;
    if (effect_size_char > 100) {
        clearInterval(effect_char);
    }
}

function clear_effect_char(i) {
    draw_back();
    if(i == -1)
    {
       draw_trap();
    }
    draw_meter();
    if (i != -1) {
        draw_mon(i);
        if (monster[i].now_hp <= 0) {
            draw_skull(1);
        }
        if (monster[i].now_hp > 0) {
            draw_stat_mon(i);
        }
    }
    draw_char();
    if (char.now_hp <= 0) {
        draw_skull(0);
    }
    if (char.now_hp > 0) {
        draw_stat_char();
    }
    ctx.drawImage(effectimg, effectbx_char, effectby_char, effect_size_char, effect_size_char);
    effectbx_char = effectbx_char + (effect_size_char / 4);
    effectby_char = effectby_char + (effect_size_char / 4);
    effect_size_char = Math.floor(effect_size_char / 2);
    if (effect_size_char <= 0) {
        clearInterval(effect_char);
    }
}

function draw_effect_com() {
    ctx.drawImage(effectimg, effectbx_com, effectby_com, effect_size_com, effect_size_com);
    effectbx_com = effectbx_com - (effect_size_com / 2);
    effectby_com = effectby_com - (effect_size_com / 2);
    effect_size_com = effect_size_com * 4;
    if (effect_size_com > 100) {
        clearInterval(effect_com);
    }
}

function clear_effect_com(i) {
    draw_back();
    draw_mon(i);
    draw_meter();
    if (monster[i].now_hp <= 0)
    {
        draw_skull(1);
    }
    if (monster[i].now_hp > 0)
    {
        draw_stat_mon(i);
    }
    draw_char();
    if (char.now_hp <= 0)
    {
        draw_skull(0);
    }
    if (char.now_hp > 0)
    {
        draw_stat_char();
    }
    ctx.drawImage(effectimg, effectbx_com, effectby_com, effect_size_com, effect_size_com);
    effectbx_com = effectbx_com + (effect_size_com / 4);
    effectby_com = effectby_com + (effect_size_com / 4);
    effect_size_com = Math.floor(effect_size_com / 2);
    if (effect_size_com <= 0) {
        clearInterval(effect_com);
    }
}
