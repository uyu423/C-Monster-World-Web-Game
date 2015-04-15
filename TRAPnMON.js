function monster_ing(result, i) {
    canvasclick.removeEventListener('click', rsp_click, false);
    if (result == 1) {
        setTimeout(run_effect_com, 700, i);
        monster[i].now_hp = monster[i].now_hp - (char.ap - monster[i].dp);
    }
    if (result == 0) {
        setTimeout(run_effect_com, 700, i);
        setTimeout(run_effect_char, 900, i);
        monster[i].now_hp = monster[i].now_hp - (char.ap - monster[i].dp);
        char.now_hp = char.now_hp - (monster[i].ap - char.dp);
    }
    if (result == -1) {
        setTimeout(run_effect_char, 700, i);
        char.now_hp = char.now_hp - (monster[i].ap - char.dp);
    }
    draw_back();
    draw_char();
    draw_stat_char();
    draw_mon(i);
    draw_stat_mon(i);
    draw_meter();
    que_mondead(i);
    que_gameover();
}

function trap_ing(result) {
    draw_trap();
    draw_char();
    draw_stat_char();
    draw_rsp_char(char_rsp);
    draw_rsp_com(com_rsp);
    draw_meter();
    canvasclick.removeEventListener('click', rsp_click, false);
    if (result == -1 || result == 0) {
        setTimeout(run_effect_char, 700, -1);
        char.now_hp = char.now_hp - trapdam;
        que_gameover();
    }
    if(result == 1)
    {
        trapdam = trapdam + (8 + Math.floor(Math.random() * 4));
        char.now_exp = char.now_exp + Math.floor(char.max_exp / 10);
        que_levelup();
    }
    if(char.now_hp > 0)
    {
        setTimeout(draw_back, 2000);
        setTimeout(draw_char, 2000);
        setTimeout(draw_stat_char, 2000);
        setTimeout(draw_arrow, 2000);
        setTimeout(draw_meter, 2000);
        setTimeout(GIVE_AEL_ARROW, 2000);
    }

    now_trap = 0;
}

