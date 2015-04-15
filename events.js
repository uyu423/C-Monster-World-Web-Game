function GIVE_AEL_RSP() {
    if (gameover_flag != 1) {
        canvasclick.addEventListener('click', rsp_click, false);
    }
    
}

function GIVE_AEL_ARROW() {
    if (gameover_flag != 1) {
        canvasclick.addEventListener('click', arrow_click, false);
    }
}

//0 : 25%, 1 : 50%, 2 : 10%
function EVENT_RECOVER(i)
{
    canvasclick.removeEventListener('click', arrow_click, false);
    draw_park();
    draw_char();
    draw_stat_char();
    draw_meter();
    ctx.fillStyle = "yellow";
    switch(i)
    {
        case 0:
            ctx.fillText("25% 체력회복 !", 500, 250);
            char.now_hp = char.now_hp + Math.floor((char.max_hp / 4));
            if (char.now_hp > char.max_hp) {
                char.now_hp = char.max_hp;
            }
            break;
        case 1:
            ctx.fillText("50% 체력회복 !", 500, 250);
            char.now_hp = char.now_hp + Math.floor((char.max_hp / 2));
            if (char.now_hp > char.max_hp) {
                char.now_hp = char.max_hp;
            }
            break;
        case 2:
            ctx.fillText("10% 체력회복 !", 500, 250);
            char.now_hp = char.now_hp + Math.floor((char.max_hp / 10));
            if (char.now_hp > char.max_hp) {
                char.now_hp = char.max_hp;
            }
            break;
    }
    ctx.fillStyle = "black";
    draw_stat_char();
    setTimeout(GIVE_AEL_ARROW, 2000);
    setTimeout(draw_back, 2000);
    setTimeout(draw_char, 2000);
    setTimeout(draw_stat_char, 2000);
    setTimeout(draw_arrow, 2000);
    setTimeout(draw_meter, 2000);
}

function EVENT_TRAP()
{
    now_trap = 1;
    canvasclick.removeEventListener('click', arrow_click, false);
    draw_trap();
    draw_char();
    draw_stat_char();
    draw_meter();
    setTimeout(draw_rsp, 2000);
    setTimeout(GIVE_AEL_RSP, 2000);
}

function EVENT_MONSTER(i)
{
    who = i;
    now_monster = 1;
    canvasclick.removeEventListener('click', arrow_click, false);
    draw_back();
    draw_char();
    draw_stat_char();
    draw_meter();
    draw_mon(i);
    draw_stat_mon(i);
    setTimeout(draw_rsp, 2000);
    setTimeout(GIVE_AEL_RSP, 2000);
}

